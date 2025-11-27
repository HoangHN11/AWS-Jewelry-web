// Quick validator for src/data/news.js
const path = require('path');
const news = require(path.join(__dirname, '../src/data/news.js'));
const errs = [];
const slugs = {};
news.forEach((n, i) => {
  if (!n.slug) errs.push(`item[${i}] missing slug`);
  if (n.slug) {
    if (slugs[n.slug]) errs.push(`duplicate slug: ${n.slug}`);
    slugs[n.slug] = true;
  }
  if (!n.title) errs.push(`${n.slug || 'item['+i+']'} missing title`);
  if (!n.date) errs.push(`${n.slug || 'item['+i+']'} missing date`);
  if (!n.category) errs.push(`${n.slug || 'item['+i+']'} missing category`);
  if (!n.content) errs.push(`${n.slug || 'item['+i+']'} missing content`);
  if (n.image && typeof n.image !== 'string') errs.push(`${n.slug} image not string`);
  if (n.images && !Array.isArray(n.images)) errs.push(`${n.slug} images not array`);
});

if (errs.length) {
  console.error('FOUND ERRORS:');
  errs.forEach(e => console.error(' -', e));
  process.exitCode = 2;
} else {
  console.log('VALID: no basic errors found in news.js');
}
