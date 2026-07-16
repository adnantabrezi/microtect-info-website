import { useTranslation } from "react-i18next";
import { IconMicronization, IconAPI, IconAnalysis, IconRnD, IconNitrogenMilling, IconQA } from "../components/Icons";
import { ProcessFlow } from "../components/ProcessFlow";

export function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
      icon: IconMicronization,
      title: t("servicesPage.list.contract.title"),
      desc: t("servicesPage.list.contract.desc"),
      features: t("servicesPage.list.contract.features", { returnObjects: true }) as string[],
    },
    {
      icon: IconAPI,
      title: t("servicesPage.list.api.title"),
      desc: t("servicesPage.list.api.desc"),
      features: t("servicesPage.list.api.features", { returnObjects: true }) as string[],
    },
    {
      icon: IconAnalysis,
      title: t("servicesPage.list.analysis.title"),
      desc: t("servicesPage.list.analysis.desc"),
      features: t("servicesPage.list.analysis.features", { returnObjects: true }) as string[],
    },
    {
      icon: IconRnD,
      title: t("servicesPage.list.rnd.title"),
      desc: t("servicesPage.list.rnd.desc"),
      features: t("servicesPage.list.rnd.features", { returnObjects: true }) as string[],
    },
    {
      icon: IconNitrogenMilling,
      title: t("servicesPage.list.nitrogen.title"),
      desc: t("servicesPage.list.nitrogen.desc"),
      features: t("servicesPage.list.nitrogen.features", { returnObjects: true }) as string[],
    },
    {
      icon: IconQA,
      title: t("servicesPage.list.qa.title"),
      desc: t("servicesPage.list.qa.desc"),
      features: t("servicesPage.list.qa.features", { returnObjects: true }) as string[],
    },
  ];

  const processNodes = [
    { title: t("servicesPage.steps.step1.title"), desc: t("servicesPage.steps.step1.desc") },
    { title: t("servicesPage.steps.step2.title"), desc: t("servicesPage.steps.step2.desc") },
    { title: t("servicesPage.steps.step3.title"), desc: t("servicesPage.steps.step3.desc") },
    { title: t("servicesPage.steps.step4.title"), desc: t("servicesPage.steps.step4.desc") },
  ];

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-label reveal">{t("servicesPage.label")}</div>
          <h1 className="page-hero-title reveal" dangerouslySetInnerHTML={{ __html: t("servicesPage.title") }} />
          <p className="page-hero-lead reveal">
            {t("servicesPage.lead")}
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="block" id="services-grid">
        <div className="container">
          <div className="section-label reveal">{t("servicesPage.gridLabel")}</div>
          <h2 className="section-h2 reveal" dangerouslySetInnerHTML={{ __html: t("servicesPage.gridTitle") }} />
          <p className="section-lead reveal" style={{ marginBottom: "3rem" }}>
            {t("servicesPage.gridLead")}
          </p>

          <div className="services-grid">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div className="service-card reveal" key={i}>
                  <div className="icon-circle">
                    <Icon />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="service-card-features">
                    {Array.isArray(s.features) && s.features.map((f, j) => (
                      <li key={j}>
                        <span className="red">—</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="block services-process-section" id="our-process" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container">
          <div className="section-label reveal">{t("servicesPage.processLabel")}</div>
          <h2 className="section-h2 reveal" dangerouslySetInnerHTML={{ __html: t("servicesPage.processTitle") }} />
          <ProcessFlow nodes={processNodes} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="block services-cta-section">
        <div className="container">
          <div className="about-company-grid">
            <div className="services-cta-content reveal" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 className="section-h2" dangerouslySetInnerHTML={{ __html: t("servicesPage.ready") }} />
              <p className="section-lead">
                {t("servicesPage.readyLead")}
              </p>
              <div className="hero-actions" style={{ marginTop: "2rem", justifyContent: 'flex-start' }}>
                <a href="#/contact" className="btn-primary">
                  {t("nav.contactUs")} <span className="arrow">→</span>
                </a>
                 <a href="mailto:info@microtechindia.com" className="btn-secondary">
                  {t("servicesPage.emailUs")}
                </a>
              </div>
            </div>
            <div className="about-company-image reveal">
              <img
                src="/images/research.jpeg"
                alt="Pharmaceutical research and development"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
