import { useTranslation } from "react-i18next";
import ankleshwarImg from "../images/ankleshwar_unit.png";
import panoliPlant1Img from "../images/panoli_plant1.png";
import panoliPlant2Img from "../images/panoli_plant2.png";

export function FacilitiesPage() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="hero page-header" style={{ paddingBottom: "3rem" }}>
        <div className="hero-eyebrow reveal">
          {t("facilitiesPage.label")}
        </div>
        <h1
          className="reveal"
          style={{ transitionDelay: "0.1s" }}
          dangerouslySetInnerHTML={{ __html: t("facilitiesPage.title") }}
        />
        <p className="lead reveal" style={{ transitionDelay: "0.2s", maxWidth: "80ch" }}>
          {t("facilitiesPage.lead")}
        </p>
      </section>

      <section style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Ankleshwar Unit */}
        <div id="ankleshwar-unit" className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", marginBottom: "8rem", alignItems: "center" }}>
          <div>
            <img src={ankleshwarImg} alt="Ankleshwar Unit" style={{ width: "100%", borderRadius: "8px", objectFit: "cover", aspectRatio: "4/3", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }} />
          </div>
          <div>
            <div className="hero-eyebrow">{t("facilitiesPage.ankleshwar.label")}</div>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1.2rem", lineHeight: "1.1" }} dangerouslySetInnerHTML={{ __html: t("facilitiesPage.ankleshwar.title") }} />
            <p style={{ color: "var(--text-soft)", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem" }}>
              {t("facilitiesPage.ankleshwar.desc")}
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> {t("facilitiesPage.ankleshwar.feature1")}
              </li>
              <li style={{ display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> {t("facilitiesPage.ankleshwar.feature2")}
              </li>
            </ul>
          </div>
        </div>

        {/* Panoli Plant 1 */}
        <div id="panoli-plant-1" className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", marginBottom: "8rem", alignItems: "center" }}>
          <div style={{ order: 2 }}>
            <img src={panoliPlant1Img} alt="Panoli Plant 1" style={{ width: "100%", borderRadius: "8px", objectFit: "cover", aspectRatio: "4/3", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }} />
          </div>
          <div style={{ order: 1 }}>
            <div className="hero-eyebrow">{t("facilitiesPage.panoli1.label")}</div>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1.2rem", lineHeight: "1.1" }} dangerouslySetInnerHTML={{ __html: t("facilitiesPage.panoli1.title") }} />
            <p style={{ color: "var(--text-soft)", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem" }}>
              {t("facilitiesPage.panoli1.desc")}
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> {t("facilitiesPage.panoli1.feature1")}
              </li>
              <li style={{ display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> {t("facilitiesPage.panoli1.feature2")}
              </li>
            </ul>
          </div>
        </div>

        {/* Panoli Plant 2 */}
        <div id="panoli-plant-2" className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", marginBottom: "4rem", alignItems: "center" }}>
          <div>
            <img src={panoliPlant2Img} alt="Panoli Plant 2" style={{ width: "100%", borderRadius: "8px", objectFit: "cover", aspectRatio: "4/3", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }} />
          </div>
          <div>
            <div className="hero-eyebrow">{t("facilitiesPage.panoli2.label")}</div>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1.2rem", lineHeight: "1.1" }} dangerouslySetInnerHTML={{ __html: t("facilitiesPage.panoli2.title") }} />
            <p style={{ color: "var(--text-soft)", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem" }}>
              {t("facilitiesPage.panoli2.desc")}
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> {t("facilitiesPage.panoli2.feature1")}
              </li>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> {t("facilitiesPage.panoli2.feature2")}
              </li>
              <li style={{ display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.05rem", fontWeight: 500 }}>
                <span style={{ color: "var(--red)", fontSize: "1.2rem" }}>✓</span> {t("facilitiesPage.panoli2.feature3")}
              </li>
            </ul>
          </div>
        </div>

      </section>
    </main>
  );
}
