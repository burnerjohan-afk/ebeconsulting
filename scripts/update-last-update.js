/**
 * Script pour mettre à jour automatiquement la date de dernière mise à jour
 * dans lib/legal.ts lors des commits Git
 */

const fs = require('fs');
const path = require('path');

const legalFilePath = path.join(__dirname, '..', 'lib', 'legal.ts');

// Lire le fichier
let content = fs.readFileSync(legalFilePath, 'utf8');

// Générer la date au format français
const now = new Date();
const formattedDate = now.toLocaleDateString('fr-FR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

// Remplacer la date de dernière mise à jour
const datePattern = /lastUpdate:\s*"[^"]*",?|lastUpdate:\s*new Date\(\)\.toLocaleDateString\([^)]+\),?/;
const newDateLine = `lastUpdate: "${formattedDate}",`;

if (datePattern.test(content)) {
  content = content.replace(datePattern, newDateLine);
  fs.writeFileSync(legalFilePath, content, 'utf8');
  console.log(`✅ Date de mise à jour mise à jour : ${formattedDate}`);
} else {
  console.log('⚠️  Pattern de date non trouvé dans legal.ts');
}

