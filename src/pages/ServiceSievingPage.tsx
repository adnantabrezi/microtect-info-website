import { useTranslation } from "react-i18next";
import creamPowder from "../images/powder-cream.png";
import greyPowder from "../images/powder-grey.png";

export function ServiceSievingPage() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="hero page-header" style={{ paddingBottom: "3rem" }}>
        <div className="hero-eyebrow reveal">
          {t("serviceSieving.label", "Sieving & Classification")}
        </div>
        <h1
          className="reveal"
          style={{ transitionDelay: "0.1s" }}
        >
          {t("serviceSieving.title", "Precise Particle Classification")}
        </h1>
        <p className="lead reveal" style={{ transitionDelay: "0.2s", maxWidth: "80ch" }}>
          {t("serviceSieving.lead", "Ensuring accurate particle size distribution is critical. Our classification systems separate powders into tightly defined size ranges, guaranteeing consistency and eliminating oversized particles.")}
        </p>
      </section>

      {/* Ultra Fine Grinding Mill */}
      <section className="block" id="ultra-fine" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div>
            <div className="section-label">{t("serviceSieving.ultrafine.label", "High Precision")}</div>
            <h2 className="section-h2" style={{ marginBottom: "1.2rem", lineHeight: "1.1" }}>{t("serviceSieving.ultrafine.title", "Ultra Fine Grinding Mill")}</h2>
            <p className="section-lead" style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem", color: "var(--text-soft)" }}>
              {t("serviceSieving.ultrafine.desc", "Coupled with internal sieving mechanisms, our ultra-fine grinding mills achieve extremely tight particle size distributions while processing tough or resilient materials.")}
            </p>
          </div>
          <div>
            <img src={creamPowder} alt="Ultra Fine Ground Powder" style={{ width: "100%", borderRadius: "8px", objectFit: "cover", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }} />
          </div>
        </div>
      </section>

      {/* Air Classifier Mill */}
      <section className="block" id="air-classifier">
        <div className="container reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div style={{ order: 2 }}>
            <img src={greyPowder} alt="Air Classified Powder" style={{ width: "100%", borderRadius: "8px", objectFit: "cover", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }} />
          </div>
          <div style={{ order: 1 }}>
            <div className="section-label">{t("serviceSieving.airclass.label", "Dynamic Separation")}</div>
            <h2 className="section-h2" style={{ marginBottom: "1.2rem", lineHeight: "1.1" }}>{t("serviceSieving.airclass.title", "Air Classifier Mill")}</h2>
            <p className="section-lead" style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem", color: "var(--text-soft)" }}>
              {t("serviceSieving.airclass.desc", "Air classifiers use centrifugal force and air currents to separate fine particles from coarse ones instantly during the milling process. Oversized particles are rejected and recirculated for further grinding.")}
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> {t("serviceSieving.airclass.feature1", "Continuous dynamic classification")}
              </li>
              <li style={{ display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> {t("serviceSieving.airclass.feature2", "Strict top-size control")}
              </li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}

export default ServiceSievingPage;
