import { build, loadEnv } from 'vite';
import { readFile, writeFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const env = { ...loadEnv('production', process.cwd(), ''), ...process.env };
const rawUrl = env.SITE_URL?.trim();
let siteUrl;
if (rawUrl) {
  const parsed = new URL(rawUrl);
  if (parsed.protocol !== 'https:' || ['localhost', '127.0.0.1'].includes(parsed.hostname) || parsed.search || parsed.hash) {
    throw new Error('SITE_URL must be the public HTTPS portfolio URL, without a query or hash.');
  }
  siteUrl = parsed.href.replace(/\/?$/, '/');
}
const repositoryName = env.GITHUB_REPOSITORY?.split('/')[1];
const githubBase = repositoryName && !repositoryName.endsWith('.github.io') ? `/${repositoryName}/` : '/';
const base = siteUrl ? new URL(siteUrl).pathname : (env.BASE_PATH || (env.GITHUB_ACTIONS ? githubBase : '/'));
const serverDir = resolve('.prerender');
try {
  await build({ base });
  await build({ base, build: { ssr: 'src/entry-server.jsx', outDir: serverDir, emptyOutDir: true, copyPublicDir: false } });
  const { render } = await import(pathToFileURL(resolve(serverDir, 'entry-server.js')).href);
  let html = await readFile('dist/index.html', 'utf8');
  html = html.replace('<div id="root"></div>', () => `<div id="root">${render()}</div>`);
  // Keep pre-rendered sections visible before JavaScript or if it is unavailable.
  html = html.replace('</head>', `<style id="static-visibility">[data-reveal],[data-project-reveal],[data-education-reveal],[data-contact-reveal]{opacity:1!important;transform:none!important}</style></head>`);
  if (siteUrl) {
    html = html.replace('</head>', `<link rel="canonical" href="${siteUrl.replaceAll('&', '&amp;').replaceAll('"', '&quot;')}" /><meta property="og:url" content="${siteUrl.replaceAll('&', '&amp;').replaceAll('"', '&quot;')}" /></head>`);
    await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl.replaceAll('&', '&amp;').replaceAll('<', '&lt;')}</loc></url></urlset>`);
    await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${siteUrl}sitemap.xml\n`);
  } else {
    await rm('dist/sitemap.xml', { force: true });
    console.warn('Set SITE_URL to the live HTTPS URL to generate the canonical link and sitemap.');
  }
  await writeFile('dist/index.html', html);
} finally {
  await rm(serverDir, { recursive: true, force: true });
}
