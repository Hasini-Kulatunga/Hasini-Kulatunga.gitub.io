# Search setup

Production builds pre-render the portfolio, including skills, education, and project links. Metadata and Person/ProfilePage structured data describe Hasini as a Data Science undergraduate.

Set SITE_URL to the final HTTPS portfolio URL in .env.production or the build environment, then run npm run build. Include the repository subdirectory for GitHub Pages. The build generates canonical metadata, robots.txt, and sitemap.xml from this URL. Without it, canonical metadata and the sitemap are omitted to avoid publishing incorrect addresses.

For GitHub Actions, set the repository Actions variable SITE_URL under Settings > Secrets and variables > Actions > Variables. The workflow reads it automatically. GitHub Pages asset paths otherwise use the actual repository name.

After publishing:
1. Verify the live URL in Google Search Console.
2. Submit sitemap.xml and request indexing for the homepage.
3. Add the portfolio link to Hasini's LinkedIn and GitHub profiles.
4. Keep project information accurate and add useful case studies as work develops.

The site must be publicly accessible. Rankings and inclusion in Google or AI search are not guaranteed. Name searches are a more realistic focus than broad data science queries. Google uses the same SEO fundamentals for its AI features: https://developers.google.com/search/docs/appearance/ai-features
