import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});
  const { t } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const toggleTopMenu = (e: React.MouseEvent, menuId: string) => {
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
  };

  const handleNavAndScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string, targetId: string) => {
    e.preventDefault();
    setMobileOpen(false);
    window.location.hash = `#/${path}`;
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <nav>
      <a href="#/" className="nav-logo">
        <img src="/logo.svg" className="logo-svg" alt="Microtech India logo" />
      </a>
      <div className={`nav-links${mobileOpen ? " nav-links--open" : ""}`}>
        <div className={`nav-item has-dropdown${expandedMenus["home"] ? " mobile-dropdown-open" : ""}`}>
          <a href="#/" onClick={(e) => toggleTopMenu(e, "home")}>{t("nav.home")}</a>
          <ul className="dropdown-menu">
            <li className="mobile-only-link" style={{ display: "none" }}><a href="#/" onClick={() => setMobileOpen(false)}>Home Overview</a></li>
            <li><a href="#powders" onClick={(e) => handleNavAndScroll(e, "", "powders")}>Powders</a></li>
            <li><a href="#particle-size" onClick={(e) => handleNavAndScroll(e, "", "particle-size")}>Particle Size</a></li>
            <li><a href="#technology" onClick={(e) => handleNavAndScroll(e, "", "technology")}>Technology</a></li>
            <li><a href="#benefits" onClick={(e) => handleNavAndScroll(e, "", "benefits")}>Benefits</a></li>
            <li><a href="#process" onClick={(e) => handleNavAndScroll(e, "", "process")}>Process</a></li>
          </ul>
        </div>
        
        <div className={`nav-item has-dropdown${expandedMenus["about"] ? " mobile-dropdown-open" : ""}`}>
          <a href="#/about" onClick={(e) => toggleTopMenu(e, "about")}>{t("nav.about")}</a>
          <ul className="dropdown-menu">
            <li className="mobile-only-link" style={{ display: "none" }}><a href="#/about" onClick={() => setMobileOpen(false)}>About Overview</a></li>
            <li><a href="#at-a-glance" onClick={(e) => handleNavAndScroll(e, "about", "at-a-glance")}>At a Glance</a></li>
            <li><a href="#about-features" onClick={(e) => handleNavAndScroll(e, "about", "about-features")}>Features</a></li>
            <li><a href="#about-benefits" onClick={(e) => handleNavAndScroll(e, "about", "about-benefits")}>Benefits</a></li>
            <li><a href="#our-company" onClick={(e) => handleNavAndScroll(e, "about", "our-company")}>Our Company</a></li>
          </ul>
        </div>
        <div className={`nav-item has-dropdown${expandedMenus["facilities"] ? " mobile-dropdown-open" : ""}`}>
          <a href="#/facilities" onClick={(e) => toggleTopMenu(e, "facilities")}>{t("nav.facilities")}</a>
          <ul className="dropdown-menu">
            <li className="mobile-only-link" style={{ display: "none" }}><a href="#/facilities" onClick={() => setMobileOpen(false)}>Facilities Overview</a></li>
            <li><a href="#ankleshwar-unit" onClick={(e) => handleNavAndScroll(e, "facilities", "ankleshwar-unit")}>Ankleshwar Unit</a></li>
            <li><a href="#panoli-plant-1" onClick={(e) => handleNavAndScroll(e, "facilities", "panoli-plant-1")}>Panoli Plant 1</a></li>
            <li><a href="#panoli-plant-2" onClick={(e) => handleNavAndScroll(e, "facilities", "panoli-plant-2")}>Panoli Plant 2</a></li>
          </ul>
        </div>
        
        <div className={`nav-item has-dropdown${expandedMenus["services"] ? " mobile-dropdown-open" : ""}`}>
          <a href="#/services" onClick={(e) => toggleTopMenu(e, "services")}>{t("nav.services")}</a>
          <ul className="dropdown-menu">
            <li className="mobile-only-link" style={{ display: "none" }}><a href="#/services" onClick={() => setMobileOpen(false)}>Services Overview</a></li>
            <li className={`has-dropdown-right${expandedMenus["micronization"] ? " mobile-dropdown-open" : ""}`}>
              <a href="#/services/micronization" onClick={(e) => toggleSubMenu(e, "micronization", ["milling", "sieving", "analysis"])}>Micronization</a>
              <ul className="dropdown-menu-right">
                <li><a href="#/services/micronization#co-micronization" onClick={() => setMobileOpen(false)}>Co micronization</a></li>
                <li><a href="#/services/micronization#cryo-micronization" onClick={() => setMobileOpen(false)}>Cryo micronization</a></li>
                <li><a href="#/services/micronization#air-jet-micronization" onClick={() => setMobileOpen(false)}>Air jet micronization</a></li>
              </ul>
            </li>
            
            <li className={`has-dropdown-right${expandedMenus["milling"] ? " mobile-dropdown-open" : ""}`}>
              <a href="#/services/milling" onClick={(e) => toggleSubMenu(e, "milling", ["micronization", "sieving", "analysis"])}>Milling</a>
              <ul className="dropdown-menu-right">
                <li className={`has-dropdown-right${expandedMenus["multi-mill"] ? " mobile-dropdown-open" : ""}`}>
                  <a href="#/services/milling#multi-mill" onClick={(e) => toggleSubMenu(e, "multi-mill", ["hammer-mill"])}>Multi mill</a>
                  <ul className="dropdown-menu-right">
                    <li><a href="#/services/milling#cryogenic-purging" onClick={() => setMobileOpen(false)}>Cryogenic purging</a></li>
                    <li><a href="#/services/milling#standard-milling" onClick={() => setMobileOpen(false)}>Standard milling</a></li>
                    <li><a href="#/services/milling#co-milling" onClick={() => setMobileOpen(false)}>Co-milling</a></li>
                  </ul>
                </li>
                <li className={`has-dropdown-right${expandedMenus["hammer-mill"] ? " mobile-dropdown-open" : ""}`}>
                  <a href="#/services/milling#hammer-mill" onClick={(e) => toggleSubMenu(e, "hammer-mill", ["multi-mill"])}>Hammer mill</a>
                  <ul className="dropdown-menu-right">
                    <li><a href="#/services/milling#cryogenic-purging" onClick={() => setMobileOpen(false)}>Cryogenic purging</a></li>
                    <li><a href="#/services/milling#standard-milling" onClick={() => setMobileOpen(false)}>Standard milling</a></li>
                    <li><a href="#/services/milling#co-milling" onClick={() => setMobileOpen(false)}>Co-milling</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className={`has-dropdown-right${expandedMenus["sieving"] ? " mobile-dropdown-open" : ""}`}>
              <a href="#/services/sieving" onClick={(e) => toggleSubMenu(e, "sieving", ["micronization", "milling", "analysis"])}>Sieving / Classification</a>
              <ul className="dropdown-menu-right">
                <li><a href="#/services/sieving#ultra-fine" onClick={() => setMobileOpen(false)}>Ultra fine grinding mill</a></li>
                <li><a href="#/services/sieving#air-classifier" onClick={() => setMobileOpen(false)}>Air classifier mill</a></li>
              </ul>
            </li>

            <li className={`has-dropdown-right${expandedMenus["analysis"] ? " mobile-dropdown-open" : ""}`}>
              <a href="#/services/analysis" onClick={(e) => toggleSubMenu(e, "analysis", ["micronization", "milling", "sieving"])}>Analysis</a>
              <ul className="dropdown-menu-right">
                <li><a href="#/services/analysis#dry-wet-modes" onClick={() => setMobileOpen(false)}>Dry and wet modes</a></li>
                <li className={`has-dropdown-right${expandedMenus["sieve-analysis"] ? " mobile-dropdown-open" : ""}`}>
                  <a href="#/services/analysis#sieve-analysis" onClick={(e) => toggleSubMenu(e, "sieve-analysis", [])}>Sieve analysis</a>
                  <ul className="dropdown-menu-right">
                    <li><a href="#/services/analysis#bulk-tap-density" onClick={() => setMobileOpen(false)}>Bulk density and tap density</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={`nav-item has-dropdown${expandedMenus["contact"] ? " mobile-dropdown-open" : ""}`}>
          <a href="#/contact" onClick={(e) => toggleTopMenu(e, "contact")}>{t("nav.contact")}</a>
          <ul className="dropdown-menu">
            <li className="mobile-only-link" style={{ display: "none" }}><a href="#/contact" onClick={() => setMobileOpen(false)}>Contact Overview</a></li>
            <li><a href="#contact-page-content" onClick={(e) => handleNavAndScroll(e, "contact", "contact-page-content")}>Contact Details</a></li>
          </ul>
        </div>
        
        {/* Language selector standard dropdown */}
        <div className={`nav-item has-dropdown${expandedMenus["lang"] ? " mobile-dropdown-open" : ""}`}>
          <a href="#" onClick={(e) => { e.preventDefault(); toggleTopMenu(e, "lang"); }}>
            {i18n.language ? i18n.language.toUpperCase().substring(0, 2) : "EN"}
          </a>
          <ul className="dropdown-menu" style={{ minWidth: "120px" }}>
            <li><a href="#" onClick={(e) => { e.preventDefault(); i18n.changeLanguage("en"); setMobileOpen(false); }}>EN</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); i18n.changeLanguage("gu"); setMobileOpen(false); }}>ગુજ (GU)</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); i18n.changeLanguage("it"); setMobileOpen(false); }}>IT</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); i18n.changeLanguage("fr"); setMobileOpen(false); }}>FR</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); i18n.changeLanguage("zh"); setMobileOpen(false); }}>中文 (ZH)</a></li>
          </ul>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <a href="#/contact" className="nav-cta">{t("nav.contactUs")}</a>
      </div>

      <button
        className={`nav-hamburger${mobileOpen ? " nav-hamburger--open" : ""}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Header;
