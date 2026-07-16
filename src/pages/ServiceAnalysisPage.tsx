import { useTranslation } from "react-i18next";
import mastersizer from "../images/Mastersizer-Mastersizer_+_Hydro_EV.png";

export function ServiceAnalysisPage() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="hero page-header" style={{ paddingBottom: "3rem" }}>
        <div className="hero-eyebrow reveal">
          {t("serviceAnalysis.label", "Analysis & Quality Assurance")}
        </div>
        <h1
          className="reveal"
          style={{ transitionDelay: "0.1s" }}
        >
          {t("serviceAnalysis.title", "Comprehensive Particle Analysis")}
        </h1>
        <p className="lead reveal" style={{ transitionDelay: "0.2s", maxWidth: "80ch" }}>
          {t("serviceAnalysis.lead", "To guarantee the highest quality and exact specifications, every batch undergoes strict analytical verification using state-of-the-art laser diffraction and physical testing methods.")}
        </p>
      </section>

      {/* Laser Diffraction (Dry/Wet) */}
      <section className="block" id="dry-wet-modes" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div>
            <div className="section-label">{t("serviceAnalysis.laser.label", "Laser Diffraction")}</div>
            <h2 className="section-h2" style={{ marginBottom: "1.2rem", lineHeight: "1.1" }}>{t("serviceAnalysis.laser.title", "Dry and Wet Modes")}</h2>
            <p className="section-lead" style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem", color: "var(--text-soft)" }}>
              {t("serviceAnalysis.laser.desc", "Using industry-standard Malvern Mastersizer instruments, we measure absolute particle size distributions across both dry powder dispersions and wet suspensions, catering to the unique physical properties of each active ingredient.")}
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> {t("serviceAnalysis.laser.feature1", "Sub-micron level accuracy")}
              </li>
              <li style={{ display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> {t("serviceAnalysis.laser.feature2", "Automated dispersion units")}
              </li>
            </ul>
          </div>
          <div>
            <img src={mastersizer} alt="Malvern Mastersizer Laser Diffraction" style={{ width: "100%", borderRadius: "8px", objectFit: "cover", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }} />
          </div>
        </div>
      </section>

      {/* Sieve Analysis */}
      <section className="block" id="sieve-analysis">
        <div className="container reveal">
          <h2 className="section-h2" style={{ textAlign: "center", marginBottom: "3rem" }}>{t("serviceAnalysis.physical.title", "Physical Characterization")}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            
            <div style={{ background: "var(--bg)", padding: "2rem", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>{t("serviceAnalysis.tech.sieve.title", "Sieve Analysis")}</h3>
              <p style={{ color: "var(--text-soft)", lineHeight: "1.6" }}>
                {t("serviceAnalysis.tech.sieve.desc", "Traditional and reliable physical screening to determine the granular particle size distribution of coarser materials.")}
              </p>
            </div>

            <div id="bulk-tap-density" style={{ background: "var(--bg)", padding: "2rem", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>{t("serviceAnalysis.tech.density.title", "Bulk & Tap Density")}</h3>
              <p style={{ color: "var(--text-soft)", lineHeight: "1.6" }}>
                {t("serviceAnalysis.tech.density.desc", "Critical measurements for powder flowability, compressibility, and packaging requirements, ensuring optimal downstream processing for oral solid dosages.")}
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default ServiceAnalysisPage;
