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
        <div className="hero-stat">
          <div className="n"><span className="red">7000+</span></div>
          <div className="l">{t("hero.sqft")}</div>
        </div>
        <div className="hero-stat">
          <div className="n"><span className="red">20+</span></div>
          <div className="l">{t("hero.years")}</div>
        </div>
        <div className="hero-stat">
          <div className="n"><span className="red">cGMP</span></div>
          <div className="l">{t("hero.cgmp")}</div>
        </div>
        <div className="hero-stat">
          <div className="n"><span className="red">ISO 9001</span></div>
          <div className="l">{t("hero.iso")}</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
