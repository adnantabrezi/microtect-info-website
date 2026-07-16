import { useTranslation } from "react-i18next";
import brownPowder from "../images/powder-brown.png";
import tanPowder from "../images/powder-tan.png";

export function ServiceMillingPage() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="hero page-header" style={{ paddingBottom: "3rem" }}>
        <div className="hero-eyebrow reveal">
          {t("serviceMilling.label", "Milling Services")}
        </div>
        <h1
          className="reveal"
          style={{ transitionDelay: "0.1s" }}
        >
          {t("serviceMilling.title", "Industrial Milling Solutions")}
        </h1>
        <p className="lead reveal" style={{ transitionDelay: "0.2s", maxWidth: "80ch" }}>
          {t("serviceMilling.lead", "Our versatile milling capabilities process a vast array of materials. From multi-mills to hammer mills, we offer standard and specialized milling equipped with cryogenic cooling and co-milling techniques.")}
        </p>
      </section>

      {/* Multi Mill */}
      <section className="block" id="multi-mill" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div>
            <div className="section-label">{t("serviceMilling.multi.label", "Variable Speed Granulation")}</div>
            <h2 className="section-h2" style={{ marginBottom: "1.2rem", lineHeight: "1.1" }}>{t("serviceMilling.multi.title", "Multi Mill")}</h2>
            <p className="section-lead" style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem", color: "var(--text-soft)" }}>
              {t("serviceMilling.multi.desc", "Multi milling uses variable force and screen variations to achieve optimal granulation and pulverization. It is widely applied for wet and dry granulation in pharmaceutical manufacturing.")}
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> <a href="#/services/milling#cryogenic-purging">{t("serviceMilling.multi.feature1", "Cryogenic purging available")}</a>
              </li>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> <a href="#/services/milling#standard-milling">{t("serviceMilling.multi.feature2", "Standard milling")}</a>
              </li>
              <li style={{ display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> <a href="#/services/milling#co-milling">{t("serviceMilling.multi.feature3", "Co-milling integrations")}</a>
              </li>
            </ul>
          </div>
          <div>
            <img src={brownPowder} alt="Multi Mill Results" style={{ width: "100%", borderRadius: "8px", objectFit: "cover", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }} />
          </div>
        </div>
      </section>

      {/* Hammer Mill */}
      <section className="block" id="hammer-mill">
        <div className="container reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div style={{ order: 2 }}>
            <img src={tanPowder} alt="Hammer Mill Process" style={{ width: "100%", borderRadius: "8px", objectFit: "cover", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }} />
          </div>
          <div style={{ order: 1 }}>
            <div className="section-label">{t("serviceMilling.hammer.label", "High Impact Crushing")}</div>
            <h2 className="section-h2" style={{ marginBottom: "1.2rem", lineHeight: "1.1" }}>{t("serviceMilling.hammer.title", "Hammer Mill")}</h2>
            <p className="section-lead" style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem", color: "var(--text-soft)" }}>
              {t("serviceMilling.hammer.desc", "Our hammer mills use high-speed rotating hammers to crush and shatter hard, crystalline, or fibrous materials. This process offers high throughput and robust size reduction.")}
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> <a href="#/services/milling#cryogenic-purging">{t("serviceMilling.hammer.feature1", "Cryogenic purging available")}</a>
              </li>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> <a href="#/services/milling#standard-milling">{t("serviceMilling.hammer.feature2", "Standard milling")}</a>
              </li>
              <li style={{ display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> <a href="#/services/milling#co-milling">{t("serviceMilling.hammer.feature3", "Co-milling integrations")}</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Detailed Techniques */}
      <section className="block" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container reveal">
          <h2 className="section-h2" style={{ textAlign: "center", marginBottom: "3rem" }}>{t("serviceMilling.techniques.title", "Advanced Techniques")}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            
            <div id="cryogenic-purging" style={{ background: "var(--bg)", padding: "2rem", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>{t("serviceMilling.tech.cryo.title", "Cryogenic Purging")}</h3>
              <p style={{ color: "var(--text-soft)", lineHeight: "1.6" }}>
                {t("serviceMilling.tech.cryo.desc", "Using liquid nitrogen to keep milling environments extremely cold, protecting active ingredients from degrading under heat friction.")}
              </p>
            </div>

            <div id="standard-milling" style={{ background: "var(--bg)", padding: "2rem", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>{t("serviceMilling.tech.standard.title", "Standard Milling")}</h3>
              <p style={{ color: "var(--text-soft)", lineHeight: "1.6" }}>
                {t("serviceMilling.tech.standard.desc", "Ambient temperature milling relying on efficient airflow and mechanical design to produce standardized powders rapidly.")}
              </p>
            </div>

            <div id="co-milling" style={{ background: "var(--bg)", padding: "2rem", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>{t("serviceMilling.tech.comill.title", "Co-Milling")}</h3>
              <p style={{ color: "var(--text-soft)", lineHeight: "1.6" }}>
                {t("serviceMilling.tech.comill.desc", "Simultaneous milling of multiple substances directly in the milling chamber to achieve perfect homogeneous mixtures.")}
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default ServiceMillingPage;
