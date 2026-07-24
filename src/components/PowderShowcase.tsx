import { useTranslation } from "react-i18next";

export function PowderShowcase() {
  const { t } = useTranslation();

  const powders = [
    { src: "/images/powder-cream.png", label: t("showcase.materials.cream") },
    { src: "/images/powder-white.png", label: t("showcase.materials.white") },
    { src: "/images/powder-grey.png", label: t("showcase.materials.grey") },
    { src: "/images/powder-white-2.png", label: t("showcase.materials.white2", "Ultra-Fine White API") },
    { src: "/images/powder-yellow.png", label: t("showcase.materials.yellow") },
    { src: "/images/powder-brown.png", label: t("showcase.materials.brown") },
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
