import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import logoSvg from "../logo.svg";
import { Link } from "./Router";

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
      <Link to="/" className="nav-logo">
        <img src={logoSvg} className="logo-svg" alt="Microtech India logo" />
      </Link>
      <div className={`nav-links${mobileOpen ? " nav-links--open" : ""}`}>
        <div className="nav-item">
          <Link to="/" onClick={() => setMobileOpen(false)}>{t("nav.home")}</Link>
        </div>
        
        <div className="nav-item">
          <Link to="/about" onClick={() => setMobileOpen(false)}>{t("nav.about")}</Link>
        </div>

        <div className="nav-item">
          <Link to="/facilities" onClick={() => setMobileOpen(false)}>{t("nav.facilities")}</Link>
        </div>
        
        <div className={`nav-item has-dropdown${expandedMenus["services"] ? " mobile-dropdown-open" : ""}`}>
          <Link to="/services" onClick={(e) => toggleTopMenu(e, "services")}>{t("nav.services")}</Link>
          <ul className="dropdown-menu">
            <li className="mobile-only-link" style={{ display: "none" }}><Link to="/services" onClick={() => setMobileOpen(false)}>{t("nav.servicesOverview")}</Link></li>
            <li>
              <Link to="/services/micronization" onClick={() => setMobileOpen(false)}>{t("nav.micronization")}</Link>
            </li>
            <li>
              <Link to="/services/milling" onClick={() => setMobileOpen(false)}>{t("nav.milling")}</Link>
            </li>
            <li>
              <Link to="/services/sieving" onClick={() => setMobileOpen(false)}>{t("nav.sievingClassification")}</Link>
            </li>
            <li>
              <Link to="/services/analysis" onClick={() => setMobileOpen(false)}>{t("nav.analysis")}</Link>
            </li>
          </ul>
        </div>

        <div className="nav-item">
          <Link to="/contact" onClick={() => setMobileOpen(false)}>{t("nav.contact")}</Link>
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
        <Link to="/contact" className="nav-cta">{t("nav.contactUs")}</Link>
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
