import fs from 'fs';

let i18n = fs.readFileSync('src/i18n.ts', 'utf8');

for (const lang of ['gu', 'it', 'fr', 'zh']) {
  const langStart = lang + ': {';
  let startIdx = i18n.indexOf(langStart);
  if (startIdx === -1) continue;

  const showcaseStart = i18n.indexOf('      showcase: {', startIdx);
  const microStart = i18n.indexOf('      serviceMicronization: {', showcaseStart);
  if (showcaseStart === -1 || microStart === -1) continue;

  const textToRemove = i18n.substring(showcaseStart, microStart);
  i18n = i18n.replace(textToRemove, '');
}

fs.writeFileSync('src/i18n.ts', i18n);
console.log('Duplicates removed.');
