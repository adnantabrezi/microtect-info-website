import { useTranslation } from "react-i18next";
import creamPowder from "../images/powder-cream.png";
import whitePowder from "../images/powder-white.png";
import greyPowder from "../images/powder-grey.png";
import white2Powder from "../images/powder-white-2.png";
import yellowPowder from "../images/powder-yellow.png";
import brownPowder from "../images/powder-brown.png";

export function PowderShowcase() {
  const { t } = useTranslation();

  const powders = [
    { src: creamPowder, label: t("showcase.materials.cream") },
    { src: whitePowder, label: t("showcase.materials.white") },
    { src: greyPowder, label: t("showcase.materials.grey") },
    { src: white2Powder, label: t("showcase.materials.white2", "Ultra-Fine White API") },
    { src: yellowPowder, label: t("showcase.materials.yellow") },
    { src: brownPowder, label: t("showcase.materials.brown") },
  ];

  return (
    <section className="block powder-section" id="powders">
      <div className="container">
        <div className="section-label reveal">{t("showcase.label")}</div>
        <h2 className="section-h2 reveal" dangerouslySetInnerHTML={{ __html: t("showcase.title") }} />
        <p className="section-lead reveal">
          {t("showcase.lead")}
        </p>
      </div>

      <div className="marquee reveal">
        <div className="marquee-track">
          {/* Duplicate the set for seamless infinite scroll */}
          {[...powders, ...powders].map((p, i) => (
            <div className="marquee-item" key={`${p.label}-${i}`}>
              <div className="marquee-hex">
                <img src={p.src} alt={p.label} />
              </div>
              <div className="marquee-label">{p.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PowderShowcase;
