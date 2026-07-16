import { useTranslation } from "react-i18next";
import { IconMicronization, IconGrinding, IconCleanAir, IconAnalysis } from "./Icons";

export function ServicesGrid() {
  const { t } = useTranslation();

  const services = [
    {
      id: "micronization",
      icon: <IconMicronization />,
      title: t("servicesGrid.micronization.title"),
      desc: t("servicesGrid.micronization.desc"),
      link: "#/services/micronization"
    },
    {
      id: "milling",
      icon: <IconGrinding />,
      title: t("servicesGrid.milling.title"),
      desc: t("servicesGrid.milling.desc"),
      link: "#/services/milling"
    },
    {
      id: "sieving",
      icon: <IconCleanAir />,
      title: t("servicesGrid.sieving.title"),
      desc: t("servicesGrid.sieving.desc"),
      link: "#/services/sieving"
    },
    {
      id: "analysis",
      icon: <IconAnalysis />,
      title: t("servicesGrid.analysis.title"),
      desc: t("servicesGrid.analysis.desc"),
      link: "#/services/analysis"
    }
  ];

  return (
    <section className="block services-grid-section" id="capabilities">
      <div className="container">
        <div className="section-label reveal">{t("servicesGrid.label")}</div>
        <h2 className="section-h2 reveal" dangerouslySetInnerHTML={{ __html: t("servicesGrid.title") }} />
        
        <div className="services-grid">
          {services.map((service, i) => (
            <a href={service.link} className="service-card reveal" key={service.id} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="service-card-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="service-card-link">
                {t("servicesGrid.learnMore")} 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
