import { useTranslation } from "react-i18next";
import logoWhiteSvg from "../logo-white.svg";
import { Link } from "./Router";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="fcontainer">
        <div className="f-logo">
          <img src={logoWhiteSvg} className="logo-svg" alt="Microtech India logo" />
        </div>
        <div className="f-nav">
          <Link to="/">{t("nav.home")}</Link>
          <Link to="/about">{t("nav.about")}</Link>
          <Link to="/services">{t("nav.services")}</Link>
          <Link to="/contact">{t("nav.contact")}</Link>
        </div>
        <div className="f-text">
          © 2025 Microtech India · <span className="red">FDA Compliant · cGMP Standards</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
