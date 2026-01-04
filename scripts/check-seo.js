/**
 * Script de vérification SEO automatique
 * Usage: node scripts/check-seo.js
 */

const https = require('https');
const http = require('http');

// Utiliser l'URL de production ou localhost si en développement
const baseUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://ebeconsulting.fr';
const isLocal = baseUrl.includes('localhost') || baseUrl.includes('127.0.0.1');
const pages = [
  '',
  '/offres',
  '/copil',
  '/a-propos',
  '/contact',
  '/faq',
  '/ressources',
];

const checks = {
  sitemap: false,
  robots: false,
  pages: [],
};

async function checkUrl(url, followRedirects = true, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const makeRequest = (currentUrl, redirectCount = 0) => {
      if (redirectCount > maxRedirects) {
        reject(new Error('Trop de redirections'));
        return;
      }
      
      client.get(currentUrl, (res) => {
        // Gérer les redirections
        if (followRedirects && (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308)) {
          const location = res.headers.location;
          if (location) {
            const newUrl = location.startsWith('http') ? location : new URL(location, currentUrl).href;
            return makeRequest(newUrl, redirectCount + 1);
          }
        }
        
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve({
            status: res.statusCode,
            headers: res.headers,
            body: data,
            finalUrl: currentUrl,
          });
        });
      }).on('error', reject);
    };
    
    makeRequest(url);
  });
}

async function checkSEO() {
  console.log('🔍 Vérification SEO automatique...\n');
  console.log(`🌐 URL de base: ${baseUrl}`);
  if (isLocal) {
    console.log('⚠️  Mode local détecté - certaines vérifications peuvent échouer\n');
  }
  console.log('');

  // Vérifier sitemap
  try {
    const sitemap = await checkUrl(`${baseUrl}/sitemap.xml`);
    if (sitemap.status === 200) {
      checks.sitemap = true;
      console.log('✅ Sitemap accessible');
      const pageCount = (sitemap.body.match(/<url>/g) || []).length;
      console.log(`   ${pageCount} pages trouvées dans le sitemap`);
    } else {
      console.log('❌ Sitemap non accessible');
    }
  } catch (error) {
    console.log('❌ Erreur lors de la vérification du sitemap:', error.message);
  }

  // Vérifier robots.txt
  try {
    const robots = await checkUrl(`${baseUrl}/robots.txt`);
    if (robots.status === 200) {
      checks.robots = true;
      console.log('✅ Robots.txt accessible');
      if (robots.body.includes('Sitemap:')) {
        console.log('   Sitemap référencé dans robots.txt');
      }
    } else {
      console.log('❌ Robots.txt non accessible');
    }
  } catch (error) {
    console.log('❌ Erreur lors de la vérification de robots.txt:', error.message);
  }

  // Vérifier les pages principales
  console.log('\n📄 Vérification des pages principales:');
  for (const page of pages) {
    try {
      const response = await checkUrl(`${baseUrl}${page}`);
      if (response.status === 200) {
        const hasTitle = response.body.includes('<title>');
        const hasDescription = response.body.includes('name="description"') || response.body.includes('property="og:description"');
        const hasCanonical = response.body.includes('rel="canonical"');
        const hasStructuredData = response.body.includes('application/ld+json');
        
        const pageCheck = {
          url: page || '/',
          accessible: true,
          hasTitle,
          hasDescription,
          hasCanonical,
          hasStructuredData,
        };
        
        checks.pages.push(pageCheck);
        
        const status = hasTitle && hasDescription && hasCanonical && hasStructuredData ? '✅' : '⚠️';
        console.log(`${status} ${page || '/'}`);
        if (!hasTitle) console.log('   ⚠️  Titre manquant');
        if (!hasDescription) console.log('   ⚠️  Description manquante');
        if (!hasCanonical) console.log('   ⚠️  Canonical manquant');
        if (!hasStructuredData) console.log('   ⚠️  Données structurées manquantes');
      } else {
        console.log(`❌ ${page || '/'} - Status: ${response.status}`);
        checks.pages.push({
          url: page || '/',
          accessible: false,
        });
      }
    } catch (error) {
      console.log(`❌ ${page || '/'} - Erreur: ${error.message}`);
      checks.pages.push({
        url: page || '/',
        accessible: false,
      });
    }
  }

  // Résumé
  console.log('\n📊 Résumé:');
  console.log(`Sitemap: ${checks.sitemap ? '✅' : '❌'}`);
  console.log(`Robots.txt: ${checks.robots ? '✅' : '❌'}`);
  const accessiblePages = checks.pages.filter(p => p.accessible).length;
  console.log(`Pages accessibles: ${accessiblePages}/${pages.length}`);
  
  const pagesWithSEO = checks.pages.filter(p => 
    p.accessible && p.hasTitle && p.hasDescription && p.hasCanonical
  ).length;
  console.log(`Pages avec SEO complet: ${pagesWithSEO}/${pages.length}`);

  // Recommandations
  console.log('\n💡 Recommandations:');
  if (!checks.sitemap) {
    console.log('- Vérifier que le sitemap est accessible');
  }
  if (!checks.robots) {
    console.log('- Vérifier que robots.txt est accessible');
  }
  if (pagesWithSEO < pages.length) {
    console.log('- Améliorer les métadonnées des pages manquantes');
  }
  console.log('- Soumettre le site à Google Search Console');
  console.log('- Soumettre le site à Bing Webmaster Tools');
  console.log('- Vérifier la vitesse de chargement sur PageSpeed Insights');
}

checkSEO().catch(console.error);

