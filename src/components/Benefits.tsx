import { useTranslation } from "react-i18next";
import { IconBioavailability, IconNoHeat, IconPurity, IconEfficiency, IconCleanAir } from "./Icons";

export function Benefits() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: IconBioavailability,
      num: "01",
      title: t("aboutPage.benefits.bio.title"),
      desc: t("aboutPage.benefits.bio.desc"),
      tag: t("aboutPage.benefits.bio.tag"),
    },
    {
      icon: IconNoHeat,
      num: "02",
      title: t("aboutPage.benefits.heat.title"),
      desc: t("aboutPage.benefits.heat.desc"),
      tag: t("aboutPage.benefits.heat.tag"),
    },
    {
      icon: IconPurity,
      num: "03",
      title: t("aboutPage.benefits.contam.title"),
      desc: t("aboutPage.benefits.contam.desc"),
      tag: t("aboutPage.benefits.contam.tag"),
    },
    {
      icon: IconEfficiency,
      num: "04",
      title: t("aboutPage.benefits.cost.title"),
      desc: t("aboutPage.benefits.cost.desc"),
      tag: t("aboutPage.benefits.cost.tag"),
    },
    {
      icon: IconCleanAir,
      num: "05",
      title: t("aboutPage.benefits.air.title"),
      desc: t("aboutPage.benefits.air.desc"),
      tag: t("aboutPage.benefits.air.tag"),
    },
  ];

  return (
    <section className="block" id="benefits">
      <div className="container">
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-label reveal">{t("aboutPage.whyLabel")}</div>
          <h2 className="section-h2 reveal" dangerouslySetInnerHTML={{ __html: t("aboutPage.whyTitle") }} />
        </div>

        <div className="benefits-grid">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div className="benefit-card reveal" key={i}>
                <div className="icon-circle">
                  <Icon />
                </div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
                <div className="tag">{b.tag}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
