const powders = [
  { src: "/images/powder-white.png", label: "Ultra-fine API" },
  { src: "/images/powder-tan.png", label: "Coarse Granules" },
  { src: "/images/powder-yellow.png", label: "Medium-fine" },
  { src: "/images/powder-brown.png", label: "Herbal Extract" },
  { src: "/images/powder-cream.png", label: "Micronized API" },
  { src: "/images/powder-grey.png", label: "Mineral Powder" },
];

export function PowderShowcase() {
  return (
    <section className="block powder-section" id="powders">
      <div className="container">
        <div className="section-label reveal">Materials We Process</div>
        <h2 className="section-h2 reveal">
          Micronized <span className="red">powders</span> across particle sizes
        </h2>
        <p className="section-lead reveal">
          From ultra-fine API micronization to coarse grinding, we handle a wide range of pharmaceutical
          and chemical powders to meet your exact specifications.
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
