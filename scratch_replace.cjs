const fs = require('fs');
let content = fs.readFileSync('src/components/Header.tsx', 'utf8');

// Replace toggleMenu definition
const oldToggleMenu = `  const toggleMenu = (e: React.MouseEvent, menuId: string) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      e.stopPropagation();
      setExpandedMenus((prev) => ({ ...prev, [menuId]: !prev[menuId] }));
    }
  };`;

const newToggleMenu = `  const toggleTopMenu = (e: React.MouseEvent, menuId: string) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      setExpandedMenus(prev => prev[menuId] ? {} : { [menuId]: true });
    } else {
      setMobileOpen(false);
    }
  };

  const toggleSubMenu = (e: React.MouseEvent, menuId: string, siblingIds: string[]) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      e.stopPropagation();
      setExpandedMenus(prev => {
        if (prev[menuId]) {
          return { ...prev, [menuId]: false };
        } else {
          const next = { ...prev };
          siblingIds.forEach(id => next[id] = false);
          next[menuId] = true;
          return next;
        }
      });
    }
  };`;
content = content.replace(oldToggleMenu, newToggleMenu);

// Replace the inline onClicks for top level menus
const menuNames = ['home', 'about', 'facilities', 'services', 'contact'];
for (const menuName of menuNames) {
  const regex = new RegExp(`onClick=\\{\\(e\\) => \\{\\s*if \\(window\\.innerWidth <= 900\\) \\{\\s*e\\.preventDefault\\(\\);\\s*setExpandedMenus\\(prev => \\(\\{ \\.\\.\\.prev, "${menuName}": !prev\\["${menuName}"\\] \\}\\)\\);\\s*\\} else \\{\\s*setMobileOpen\\(false\\);\\s*\\}\\s*\\}\\}`, 'g');
  content = content.replace(regex, `onClick={(e) => toggleTopMenu(e, "${menuName}")}`);
}

// Also replace toggleMenu calls with toggleSubMenu
content = content.replace(/toggleMenu\(e, "micronization"\)/g, 'toggleSubMenu(e, "micronization", ["milling", "sieving", "analysis"])');
content = content.replace(/toggleMenu\(e, "milling"\)/g, 'toggleSubMenu(e, "milling", ["micronization", "sieving", "analysis"])');
content = content.replace(/toggleMenu\(e, "sieving"\)/g, 'toggleSubMenu(e, "sieving", ["micronization", "milling", "analysis"])');
content = content.replace(/toggleMenu\(e, "analysis"\)/g, 'toggleSubMenu(e, "analysis", ["micronization", "milling", "sieving"])');

content = content.replace(/toggleMenu\(e, "multi-mill"\)/g, 'toggleSubMenu(e, "multi-mill", ["hammer-mill"])');
content = content.replace(/toggleMenu\(e, "hammer-mill"\)/g, 'toggleSubMenu(e, "hammer-mill", ["multi-mill"])');

content = content.replace(/toggleMenu\(e, "sieve-analysis"\)/g, 'toggleSubMenu(e, "sieve-analysis", [])');

fs.writeFileSync('src/components/Header.tsx', content);
