import { useTranslation } from "react-i18next";
import { IconParticleSize, IconNitrogen, IconTechnology, IconGrinding, IconThroughput } from "./Icons";

export function Features() {
  const { t } = useTranslation();

  const features = [
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
  ];

  return (
    <section className="block" id="technology">
      <div className="container">
        <div className="section-label reveal">{t("aboutPage.capLabel")}</div>
        <h2 className="section-h2 reveal" dangerouslySetInnerHTML={{ __html: t("aboutPage.capTitle") }} />

        <div className="tech-grid">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div className="tech-card reveal" key={i}>
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
  );
}

export default Features;
