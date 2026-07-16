import { useTranslation } from "react-i18next";
import airJetMill from "../images/air jet mill.png";
import micronizerMachine from "../images/micronizer-machine.png";
import cbdMicronization from "../images/micronisation-cbd.jpg";

export function ServiceMicronizationPage() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="hero page-header" style={{ paddingBottom: "3rem" }}>
        <div className="hero-eyebrow reveal">
          {t("serviceMicronization.label", "Micronization Services")}
        </div>
        <h1
          className="reveal"
          style={{ transitionDelay: "0.1s" }}
        >
          {t("serviceMicronization.title", "Precision Micronization")}
        </h1>
        <p className="lead reveal" style={{ transitionDelay: "0.2s", maxWidth: "80ch" }}>
          {t("serviceMicronization.lead", "Our advanced micronization processes dramatically alter the physical and chemical properties of active pharmaceutical ingredients, unlocking enhanced bioavailability and uniform distribution.")}
        </p>
      </section>

      {/* Co-Micronization */}
      <section className="block" id="co-micronization" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div>
            <div className="section-label">{t("serviceMicronization.co.label", "Specialized Process")}</div>
            <h2 className="section-h2" style={{ marginBottom: "1.2rem", lineHeight: "1.1" }}>{t("serviceMicronization.co.title", "Co-Micronization")}</h2>
            <p className="section-lead" style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem", color: "var(--text-soft)" }}>
              {t("serviceMicronization.co.desc", "Co-micronization involves the simultaneous milling of multiple active ingredients or excipients. This ensures a perfectly homogeneous blend down to the micro-scale, eliminating segregation during subsequent manufacturing steps.")}
            </p>
          </div>
          <div>
            <img src={cbdMicronization} alt="Co-Micronization Process" style={{ width: "100%", borderRadius: "8px", objectFit: "cover", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }} />
          </div>
        </div>
      </section>

      {/* Cryo Micronization */}
      <section className="block" id="cryo-micronization">
        <div className="container reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div style={{ order: 2 }}>
            <img src={micronizerMachine} alt="Cryo Micronization Equipment" style={{ width: "100%", borderRadius: "8px", objectFit: "cover", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }} />
          </div>
          <div style={{ order: 1 }}>
            <div className="section-label">{t("serviceMicronization.cryo.label", "Temperature Controlled")}</div>
            <h2 className="section-h2" style={{ marginBottom: "1.2rem", lineHeight: "1.1" }}>{t("serviceMicronization.cryo.title", "Cryo Micronization")}</h2>
            <p className="section-lead" style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem", color: "var(--text-soft)" }}>
              {t("serviceMicronization.cryo.desc", "For highly heat-sensitive or thermolabile compounds, our cryo-micronization process uses liquid nitrogen cooling. This prevents heat degradation, melting, or morphological changes during particle size reduction.")}
            </p>
          </div>
        </div>
      </section>

      {/* Air Jet Micronization */}
      <section className="block" id="air-jet-micronization" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div>
            <div className="section-label">{t("serviceMicronization.airjet.label", "Ultra-Fine Reduction")}</div>
            <h2 className="section-h2" style={{ marginBottom: "1.2rem", lineHeight: "1.1" }}>{t("serviceMicronization.airjet.title", "Air Jet Micronization")}</h2>
            <p className="section-lead" style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem", color: "var(--text-soft)" }}>
              {t("serviceMicronization.airjet.desc", "Utilizing high-velocity compressed air or nitrogen, particle-on-particle collisions reduce the active ingredient size without the use of grinding media. This guarantees zero metal contamination and extremely narrow particle size distributions.")}
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> {t("serviceMicronization.airjet.feature1", "No moving parts in milling zone")}
              </li>
              <li style={{ display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> {t("serviceMicronization.airjet.feature2", "Oil-free, filtered processing air")}
              </li>
            </ul>
          </div>
          <div>
            <img src={airJetMill} alt="Air Jet Mill" style={{ width: "100%", borderRadius: "8px", objectFit: "cover", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServiceMicronizationPage;
