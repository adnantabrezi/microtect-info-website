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
            <li className="mobile-only-link" style={{ display: "none" }}><a href="#/" onClick={() => setMobileOpen(false)}>{t("nav.homeOverview")}</a></li>
            <li><a href="#powders" onClick={(e) => handleNavAndScroll(e, "", "powders")}>{t("nav.powders")}</a></li>
            <li><a href="#particle-size" onClick={(e) => handleNavAndScroll(e, "", "particle-size")}>{t("nav.particleSize")}</a></li>
            <li><a href="#technology" onClick={(e) => handleNavAndScroll(e, "", "technology")}>{t("nav.technology")}</a></li>
            <li><a href="#benefits" onClick={(e) => handleNavAndScroll(e, "", "benefits")}>{t("nav.benefits")}</a></li>
            <li><a href="#process" onClick={(e) => handleNavAndScroll(e, "", "process")}>{t("nav.process")}</a></li>
          </ul>
        </div>
        
        <div className={`nav-item has-dropdown${expandedMenus["about"] ? " mobile-dropdown-open" : ""}`}>
          <a href="#/about" onClick={(e) => toggleTopMenu(e, "about")}>{t("nav.about")}</a>
          <ul className="dropdown-menu">
            <li className="mobile-only-link" style={{ display: "none" }}><a href="#/about" onClick={() => setMobileOpen(false)}>{t("nav.aboutOverview")}</a></li>
            <li><a href="#at-a-glance" onClick={(e) => handleNavAndScroll(e, "about", "at-a-glance")}>{t("nav.atAGlance")}</a></li>
            <li><a href="#about-features" onClick={(e) => handleNavAndScroll(e, "about", "about-features")}>{t("nav.features")}</a></li>
            <li><a href="#about-benefits" onClick={(e) => handleNavAndScroll(e, "about", "about-benefits")}>{t("nav.benefits")}</a></li>
            <li><a href="#our-company" onClick={(e) => handleNavAndScroll(e, "about", "our-company")}>{t("nav.ourCompany")}</a></li>
          </ul>
        </div>
        <div className={`nav-item has-dropdown${expandedMenus["facilities"] ? " mobile-dropdown-open" : ""}`}>
          <a href="#/facilities" onClick={(e) => toggleTopMenu(e, "facilities")}>{t("nav.facilities")}</a>
          <ul className="dropdown-menu">
            <li className="mobile-only-link" style={{ display: "none" }}><a href="#/facilities" onClick={() => setMobileOpen(false)}>{t("nav.facilitiesOverview")}</a></li>
            <li><a href="#ankleshwar-unit" onClick={(e) => handleNavAndScroll(e, "facilities", "ankleshwar-unit")}>{t("nav.ankleshwarUnit")}</a></li>
            <li><a href="#panoli-plant-1" onClick={(e) => handleNavAndScroll(e, "facilities", "panoli-plant-1")}>{t("nav.panoliPlant1")}</a></li>
            <li><a href="#panoli-plant-2" onClick={(e) => handleNavAndScroll(e, "facilities", "panoli-plant-2")}>{t("nav.panoliPlant2")}</a></li>
          </ul>
        </div>
        
        <div className={`nav-item has-dropdown${expandedMenus["services"] ? " mobile-dropdown-open" : ""}`}>
          <a href="#/services" onClick={(e) => toggleTopMenu(e, "services")}>{t("nav.services")}</a>
          <ul className="dropdown-menu">
            <li className="mobile-only-link" style={{ display: "none" }}><a href="#/services" onClick={() => setMobileOpen(false)}>{t("nav.servicesOverview")}</a></li>
            <li>
              <a href="#/services/micronization" onClick={() => setMobileOpen(false)}>{t("nav.micronization")}</a>
            </li>
            <li>
              <a href="#/services/milling" onClick={() => setMobileOpen(false)}>{t("nav.milling")}</a>
            </li>
            <li>
              <a href="#/services/sieving" onClick={() => setMobileOpen(false)}>{t("nav.sievingClassification")}</a>
            </li>
            <li>
              <a href="#/services/analysis" onClick={() => setMobileOpen(false)}>{t("nav.analysis")}</a>
            </li>
          </ul>
        </div>

        <div className={`nav-item has-dropdown${expandedMenus["contact"] ? " mobile-dropdown-open" : ""}`}>
          <a href="#/contact" onClick={(e) => toggleTopMenu(e, "contact")}>{t("nav.contact")}</a>
          <ul className="dropdown-menu">
            <li className="mobile-only-link" style={{ display: "none" }}><a href="#/contact" onClick={() => setMobileOpen(false)}>{t("nav.contactOverview")}</a></li>
            <li><a href="#contact-page-content" onClick={(e) => handleNavAndScroll(e, "contact", "contact-page-content")}>{t("nav.contactDetails")}</a></li>
          </ul>
        </div>
        
        {/* Language selector standard dropdown */}
        <div className={`nav-item has-dropdown${expandedMenus["lang"] ? " mobile-dropdown-open" : ""}`}>
          <a href="#" onClick={(e) => { e.preventDefault(); toggleTopMenu(e, "lang"); }}>
            {i18n.language ? i18n.language.toUpperCase().substring(0, 2) : "EN"}
          </a>
          <ul className="dropdown-menu" style={{ minWidth: "140px" }}>
            <li><a href="#" onClick={(e) => { e.preventDefault(); i18n.changeLanguage("en"); setMobileOpen(false); }}>English (EN)</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); i18n.changeLanguage("gu"); setMobileOpen(false); }}>ગુજરાતી (GU)</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); i18n.changeLanguage("it"); setMobileOpen(false); }}>Italiano (IT)</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); i18n.changeLanguage("fr"); setMobileOpen(false); }}>Français (FR)</a></li>
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
