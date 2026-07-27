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
          <div className="sqft-tree-dropdown">
            <svg className="sqft-tree-lines" width="300" height="40" viewBox="0 0 300 40" fill="none">
              <circle cx="150" cy="3" r="3.5" fill="#e02020" />
              <path d="M 150 3 L 150 14 C 150 24, 60 20, 60 37" stroke="#e02020" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M 150 3 L 150 14 C 150 24, 240 20, 240 37" stroke="#e02020" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="60" cy="37" r="3.5" fill="#e02020" />
              <circle cx="240" cy="37" r="3.5" fill="#e02020" />
            </svg>
            <div className="sqft-tree-nodes">
              <div className="tree-node left">
                <div className="n"><span className="red">45,000</span></div>
                <div className="l">Panoli Unit</div>
              </div>
              <div className="tree-node right">
                <div className="n"><span className="red">12,000</span></div>
                <div className="l">Ankleshwar (FDA Area)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-stat">
          <div className="n"><span className="red">2 Decades</span></div>
          <div className="l">{t("hero.years")}</div>
        </div>
        <div className="hero-stat">
          <div className="n"><span className="red">cGMP</span></div>
          <div className="l">{t("hero.cgmp")}</div>
        </div>
        <div className="hero-stat">
          <div className="n"><span className="red">ISO 9001:2015</span></div>
          <div className="l">{t("hero.iso")}</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
