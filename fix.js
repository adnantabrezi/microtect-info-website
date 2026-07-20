const fs = require('fs');
let c = fs.readFileSync('src/i18n.ts', 'utf8');
c = c.replace('navigator.language.split("-")[0] : "en";', '(navigator.language.split("-")[0] || "en") : "en";');
fs.writeFileSync('src/i18n.ts', c);
