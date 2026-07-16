import { useTranslation } from "react-i18next";
import { IconCertificate } from "./Icons";

export function Certifications() {
  const { t } = useTranslation();

  return (
    <section className="block certifications-banner" id="certifications">
      <div className="container">
        <div className="cert-item reveal">
          <IconCertificate />
          <span>{t("certifications.cgmp")}</span>
        </div>
        <div className="cert-item reveal">
          <IconCertificate />
          <span>{t("certifications.fda")}</span>
        </div>
        <div className="cert-item reveal">
          <IconCertificate />
          <span>{t("certifications.iso")}</span>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
