import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
const html = readFileSync('dist/index.html','utf8');
assert.ok(html.includes('Logistic 18'));
assert.ok(html.includes('University of Peradeniya'));
const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.equal(schema.mainEntity.name,'Hasini Kulatunga');
for (const match of html.matchAll(/src="(\/assets\/[^"]+)"/g)) assert.ok(existsSync('dist'+match[1]), match[1]);
console.log('Pre-rendered content, structured data, and asset paths verified.');
