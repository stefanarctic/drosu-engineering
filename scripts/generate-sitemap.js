#!/usr/bin/env node

/**
 * Sitemap Generator for DROSU Engineering
 * Automatically generates sitemap.xml with current date
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.drosuengineering.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

const pages = [
  {
    loc: '/',
    lastmod: CURRENT_DATE,
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    loc: '/#services',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    loc: '/#about',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/#contact',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    loc: '/#remapare-ecu',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/#modificari-performanta',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/#dyno-test',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/#suspensie-sport',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: '/piese',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/piese/kit-admisie',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: '/servicii/modificari-hardware',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    loc: '/blog/ce-modificari-pot-face',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.8'
  }
];

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${BASE_URL}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  try {
    fs.writeFileSync(outputPath, sitemap, 'utf8');
    console.log('✅ Sitemap generated successfully!');
    console.log(`📅 Last updated: ${CURRENT_DATE}`);
    console.log(`📍 Location: ${outputPath}`);
    console.log(`🔗 Base URL: ${BASE_URL}`);
    console.log(`📄 Pages: ${pages.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

// Add new pages to sitemap
function addPage(url, changefreq = 'monthly', priority = '0.7') {
  const newPage = {
    loc: url,
    lastmod: CURRENT_DATE,
    changefreq,
    priority: priority.toString()
  };
  
  // Check if page already exists
  const exists = pages.find(p => p.loc === url);
  if (!exists) {
    pages.push(newPage);
    console.log(`➕ Added new page: ${url}`);
  } else {
    console.log(`ℹ️  Page already exists: ${url}`);
  }
}

// Command line interface
if (process.argv.includes('--add')) {
  const urlIndex = process.argv.indexOf('--add') + 1;
  const url = process.argv[urlIndex];
  
  if (url) {
    addPage(url);
    generateSitemap();
  } else {
    console.log('Usage: npm run sitemap:generate -- --add /new-page');
  }
} else {
  generateSitemap();
}

export { generateSitemap, addPage };
