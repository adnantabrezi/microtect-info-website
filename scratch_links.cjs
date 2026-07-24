const fs = require('fs');
let content = fs.readFileSync('src/components/Header.tsx', 'utf8');

// Micronization
content = content.replace(/<a href=\"#\/services\" onClick={\(e\) => toggleSubMenu\(e, \"micronization\"/g, '<a href=\"#/services/micronization\" onClick={(e) => toggleSubMenu(e, \"micronization\"');
content = content.replace(/<li><a href=\"#\/services\" onClick={\(\) => setMobileOpen\(false\)}>Co micronization<\/a><\/li>/g, '<li><a href=\"#/services/micronization#co-micronization\" onClick={() => setMobileOpen(false)}>Co micronization</a></li>');
content = content.replace(/<li><a href=\"#\/services\" onClick={\(\) => setMobileOpen\(false\)}>Cryo micronization<\/a><\/li>/g, '<li><a href=\"#/services/micronization#cryo-micronization\" onClick={() => setMobileOpen(false)}>Cryo micronization</a></li>');
content = content.replace(/<li><a href=\"#\/services\" onClick={\(\) => setMobileOpen\(false\)}>Air jet micronization<\/a><\/li>/g, '<li><a href=\"#/services/micronization#air-jet-micronization\" onClick={() => setMobileOpen(false)}>Air jet micronization</a></li>');

// Milling
content = content.replace(/<a href=\"#\/services\" onClick={\(e\) => toggleSubMenu\(e, \"milling\"/g, '<a href=\"#/services/milling\" onClick={(e) => toggleSubMenu(e, \"milling\"');
content = content.replace(/<a href=\"#\/services\" onClick={\(e\) => toggleSubMenu\(e, \"multi-mill\"/g, '<a href=\"#/services/milling#multi-mill\" onClick={(e) => toggleSubMenu(e, \"multi-mill\"');
content = content.replace(/<a href=\"#\/services\" onClick={\(e\) => toggleSubMenu\(e, \"hammer-mill\"/g, '<a href=\"#/services/milling#hammer-mill\" onClick={(e) => toggleSubMenu(e, \"hammer-mill\"');
let millingChanges = content;
millingChanges = millingChanges.replace(/<li><a href=\"#\/services\" onClick={\(\) => setMobileOpen\(false\)}>Cryogenic purging<\/a><\/li>/g, '<li><a href=\"#/services/milling#cryogenic-purging\" onClick={() => setMobileOpen(false)}>Cryogenic purging</a></li>');
millingChanges = millingChanges.replace(/<li><a href=\"#\/services\" onClick={\(\) => setMobileOpen\(false\)}>Standard milling<\/a><\/li>/g, '<li><a href=\"#/services/milling#standard-milling\" onClick={() => setMobileOpen(false)}>Standard milling</a></li>');
millingChanges = millingChanges.replace(/<li><a href=\"#\/services\" onClick={\(\) => setMobileOpen\(false\)}>Co-milling<\/a><\/li>/g, '<li><a href=\"#/services/milling#co-milling\" onClick={() => setMobileOpen(false)}>Co-milling</a></li>');
content = millingChanges;

// Sieving
content = content.replace(/<a href=\"#\/services\" onClick={\(e\) => toggleSubMenu\(e, \"sieving\"/g, '<a href=\"#/services/sieving\" onClick={(e) => toggleSubMenu(e, \"sieving\"');
content = content.replace(/<li><a href=\"#\/services\" onClick={\(\) => setMobileOpen\(false\)}>Ultra fine grinding mill<\/a><\/li>/g, '<li><a href=\"#/services/sieving#ultra-fine\" onClick={() => setMobileOpen(false)}>Ultra fine grinding mill</a></li>');
content = content.replace(/<li><a href=\"#\/services\" onClick={\(\) => setMobileOpen\(false\)}>Air classifier mill<\/a><\/li>/g, '<li><a href=\"#/services/sieving#air-classifier\" onClick={() => setMobileOpen(false)}>Air classifier mill</a></li>');

// Analysis
content = content.replace(/<a href=\"#\/services\" onClick={\(e\) => toggleSubMenu\(e, \"analysis\"/g, '<a href=\"#/services/analysis\" onClick={(e) => toggleSubMenu(e, \"analysis\"');
content = content.replace(/<li><a href=\"#\/services\" onClick={\(\) => setMobileOpen\(false\)}>Dry and wet modes<\/a><\/li>/g, '<li><a href=\"#/services/analysis#dry-wet-modes\" onClick={() => setMobileOpen(false)}>Dry and wet modes</a></li>');
content = content.replace(/<a href=\"#\/services\" onClick={\(e\) => toggleSubMenu\(e, \"sieve-analysis\"/g, '<a href=\"#/services/analysis#sieve-analysis\" onClick={(e) => toggleSubMenu(e, \"sieve-analysis\"');
content = content.replace(/<li><a href=\"#\/services\" onClick={\(\) => setMobileOpen\(false\)}>Bulk density and tap density<\/a><\/li>/g, '<li><a href=\"#/services/analysis#bulk-tap-density\" onClick={() => setMobileOpen(false)}>Bulk density and tap density</a></li>');

fs.writeFileSync('src/components/Header.tsx', content);
