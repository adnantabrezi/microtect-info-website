import { useTranslation } from "react-i18next";
import { IconParticleSize, IconNitrogen, IconTechnology, IconGrinding, IconThroughput } from "../components/Icons";
import airJetMillImg from "../images/air-jet-mill-new.png";

export function AboutPage() {
  const { t } = useTranslation();

  const capabilities = [
    {
      icon: IconParticleSize,
      title: t("aboutPage.caps.particle.title"),
      desc: t("aboutPage.caps.particle.desc"),
    },
    {
      icon: IconNitrogen,
      title: t("aboutPage.caps.nitrogen.title"),
      desc: t("aboutPage.caps.nitrogen.desc"),
    },
    {
      icon: IconTechnology,
      title: t("aboutPage.caps.ambient.title"),
      desc: t("aboutPage.caps.ambient.desc"),
    },
    {
      icon: IconGrinding,
      title: t("aboutPage.caps.parts.title"),
      desc: t("aboutPage.caps.parts.desc"),
    },
    {
      icon: IconThroughput,
      title: t("aboutPage.caps.throughput.title"),
      desc: t("aboutPage.caps.throughput.desc"),
    },
    {
      icon: IconThroughput,
      title: t("aboutPage.caps.capacity.title", "200 Metric Ton Monthly Capacity"),
      desc: t("aboutPage.caps.capacity.desc", "High-scale commercial processing capacity of up to 200 metric tons per month."),
    },
  ];

  const benefits = [
    {
      title: t("aboutPage.benefits.bio.title"),
      desc: t("aboutPage.benefits.bio.desc"),
      tag: t("aboutPage.benefits.bio.tag"),
    },
    {
      title: t("aboutPage.benefits.heat.title"),
      desc: t("aboutPage.benefits.heat.desc"),
      tag: t("aboutPage.benefits.heat.tag"),
    },
    {
      title: t("aboutPage.benefits.contam.title"),
      desc: t("aboutPage.benefits.contam.desc"),
      tag: t("aboutPage.benefits.contam.tag"),
    },
    {
      title: t("aboutPage.benefits.cost.title"),
      desc: t("aboutPage.benefits.cost.desc"),
      tag: t("aboutPage.benefits.cost.tag"),
    },
    {
      title: t("aboutPage.benefits.air.title"),
      desc: t("aboutPage.benefits.air.desc"),
      tag: t("aboutPage.benefits.air.tag"),
    },
    {
      title: t("aboutPage.benefits.validation.title", "Customer Specific Process & Cleaning Validation"),
      desc: t("aboutPage.benefits.validation.desc", "Customized process parameters and rigorous cleaning validation protocols as per SOP tailored to your specific product requirements."),
      tag: t("aboutPage.benefits.validation.tag", "Compliance"),
    },
  ];

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-label reveal">{t("aboutPage.label")}</div>
          <h1 className="page-hero-title reveal" dangerouslySetInnerHTML={{ __html: t("aboutPage.title") }} />
          <p className="page-hero-lead reveal">
            {t("aboutPage.lead")}
          </p>
        </div>
      </section>

      {/* ── At a Glance ── */}
      <section className="block" id="at-a-glance">
        <div className="container">
          <div className="section-label reveal">{t("aboutPage.whoLabel")}</div>
          <h2 className="section-h2 reveal" dangerouslySetInnerHTML={{ __html: t("aboutPage.whoTitle") }} />
          <div className="about-glance-content reveal">
            <p className="section-lead">
              {t("aboutPage.whoLead")}
            </p>
          </div>

          <div className="about-stats-row reveal">
            <div className="about-stat-card">
              <div className="about-stat-number"><span className="red">2 Decades</span></div>
              <div className="about-stat-label">{t("aboutPage.cardExp")}</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number"><span className="red">FDA</span></div>
              <div className="about-stat-label">{t("aboutPage.cardFDA")}</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number"><span className="red">cGMP</span></div>
              <div className="about-stat-label">{t("aboutPage.cardGMP")}</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number"><span className="red">CMO</span></div>
              <div className="about-stat-label">{t("aboutPage.cardCMO")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="block about-features-section" id="about-features">
        <div className="container">
          <div className="section-label reveal">{t("aboutPage.capLabel")}</div>
          <h2 className="section-h2 reveal" dangerouslySetInnerHTML={{ __html: t("aboutPage.capTitle") }} />
          <div className="about-features-grid">
            {capabilities.map((f, i) => {
              const Icon = f.icon;
              return (
                <div className="about-feature-card reveal" key={i}>
                  <div className="icon-circle">
                    <Icon />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="block" id="about-benefits">
        <div className="container">
          <div className="section-label reveal">{t("aboutPage.whyLabel")}</div>
          <h2 className="section-h2 reveal" dangerouslySetInnerHTML={{ __html: t("aboutPage.whyTitle") }} />
          <div className="about-benefits-list">
            {benefits.map((b, i) => (
              <div className="about-benefit-row reveal" key={i}>
                <div className="about-benefit-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="about-benefit-body">
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
                <div className="about-benefit-tag">{b.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Company ── */}
      <section className="block about-company-section" id="our-company">
        <div className="container">
          <div className="about-company-grid">
            <div className="about-company-text">
              <div className="section-label reveal">{t("aboutPage.companyLabel")}</div>
              <h2 className="section-h2 reveal" dangerouslySetInnerHTML={{ __html: t("aboutPage.companyTitle") }} />
              <p className="section-lead reveal">
                {t("aboutPage.companyLead")}
              </p>
              <div className="about-company-highlights reveal">
                <div className="about-highlight">
                  <span className="red">—</span> {t("aboutPage.highlights.batch")}
                </div>
                <div className="about-highlight">
                  <span className="red">—</span> {t("aboutPage.highlights.timeline")}
                </div>
                <div className="about-highlight">
                  <span className="red">—</span> {t("aboutPage.highlights.fda")}
                </div>
                <div className="about-highlight">
                  <span className="red">—</span> {t("aboutPage.highlights.trace")}
                </div>
              </div>
              <a href="#/contact" className="btn-primary reveal" style={{ marginTop: "2rem" }}>
                {t("aboutPage.partner")} <span className="arrow">→</span>
              </a>
            </div>
            <div className="about-company-image reveal">
              <img
                src={airJetMillImg}
                alt="Air Jet Mill Machine"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
