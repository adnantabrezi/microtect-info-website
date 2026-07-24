import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="fcontainer">
        <div className="f-logo">
          <img src="/logo-white.svg" className="logo-svg" alt="Microtech India logo" />
        </div>
        <div className="f-nav">
          <a href="#/">{t("nav.home")}</a>
          <a href="#/about">{t("nav.about")}</a>
          <a href="#/services">{t("nav.services")}</a>
          <a href="#/contact">{t("nav.contact")}</a>
        </div>
        <div className="f-text">
          © 2025 Microtech India · <span className="red">FDA Compliant · cGMP Standards</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
