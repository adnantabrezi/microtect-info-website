import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-eyebrow reveal">{t("hero.eyebrow")}</div>
      <h1 className="reveal" dangerouslySetInnerHTML={{ __html: t("hero.title") }} />
      <p className="lead reveal">
        {t("hero.lead")}
      </p>
      <div className="hero-actions reveal">
        <a href="#/contact" className="btn-primary">
          {t("hero.ctaContact")} <span className="arrow">→</span>
        </a>
        <button 
          onClick={() => document.getElementById('particle-size')?.scrollIntoView({ behavior: 'smooth' })} 
          className="btn-secondary"
        >
          {t("hero.ctaMesh")}
        </button>
      </div>

      <div className="hero-stats reveal">
        <div className="hero-stat">
          <div className="n"><span className="red">FDA</span></div>
          <div className="l">{t("hero.fda")}</div>
        </div>
        <div className="hero-stat sqft-tooltip-container">
          <div className="n"><span className="red">57,000</span></div>
          <div className="l">{t("hero.sqft")}</div>
          <div className="sqft-tooltip">
            <div className="tooltip-header">Facility Area Breakdown</div>
            <div className="tooltip-item">
              <span className="unit-name">Ankleshwar Unit (FDA Area)</span>
              <span className="unit-size">12,000 Sq. Ft.</span>
            </div>
            <div className="tooltip-item">
              <span className="unit-name">Panoli Unit</span>
              <span className="unit-size">45,000 Sq. Ft.</span>
            </div>
          </div>
        </div>
        <div className="hero-stat">
          <div className="n"><span className="red">2 Decade</span></div>
          <div className="l">{t("hero.years")}</div>
        </div>
        <div className="hero-stat">
          <div className="n"><span className="red">cGMP</span></div>
          <div className="l">{t("hero.cgmp")}</div>
        </div>
        <div className="hero-stat" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="n" style={{ textAlign: "center", lineHeight: 1.1 }}>
            <span className="red" style={{ display: "block", textAlign: "center" }}>
              ISO<br />9001..2015
            </span>
          </div>
          <div className="l" style={{ textAlign: "center" }}>{t("hero.iso")}</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
