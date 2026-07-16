import { useTranslation } from "react-i18next";
import { IconPharma, IconFood, IconCosmetics, IconChemical } from "./Icons";

export function Industries() {
  const { t } = useTranslation();

  const industries = [
    {
      id: "pharma",
      icon: <IconPharma />,
      title: t("industries.pharma.title"),
      desc: t("industries.pharma.desc")
    },
    {
      id: "food",
      icon: <IconFood />,
      title: t("industries.food.title"),
      desc: t("industries.food.desc")
    },
    {
      id: "cosmetics",
      icon: <IconCosmetics />,
      title: t("industries.cosmetics.title"),
      desc: t("industries.cosmetics.desc")
    },
    {
      id: "chemical",
      icon: <IconChemical />,
      title: t("industries.chemical.title"),
      desc: t("industries.chemical.desc")
    }
  ];

  return (
    <section className="block industries-section" id="industries">
      <div className="container">
        <div className="section-label reveal">{t("industries.label")}</div>
        <h2 className="section-h2 reveal" dangerouslySetInnerHTML={{ __html: t("industries.title") }} />
        
        <div className="industries-grid">
          {industries.map((ind, i) => (
            <div className="industry-card reveal" key={ind.id} style={{ transitionDelay: `${i * 100}ms` }}>
              {ind.icon}
              <h4>{ind.title}</h4>
              <p>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
