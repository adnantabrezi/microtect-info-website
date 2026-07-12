const features = [
  {
    num: "01 / PARTICLE SIZE",
    title: "Any Ranges",
    desc: "Average particle size any ranges microns oil and moisture free high pressure filtered air.",
  },
  {
    num: "02 / NITROGEN AIR",
    title: "Sensitive Products",
    desc: "Nitrogen air is also available for air sensitive products.",
  },
  {
    num: "03 / TECHNOLOGY",
    title: "Ambient Process",
    desc: "Ambient process with latest technologies.",
  },
  {
    num: "04 / GRINDING",
    title: "No Moving Parts",
    desc: "Stationary grinding chamber with no moving parts.",
  },
  {
    num: "05 / THROUGHPUT",
    title: "Reproducible",
    desc: "Reproducible & High throughput process.",
  },
];

export function Features() {
  return (
    <section className="block" id="technology">
      <div className="container">
        <div className="section-label reveal">Features</div>
        <h2 className="section-h2 reveal">
          Features of <span className="red">Micronization</span>
        </h2>

        <div className="tech-grid">
          {features.map((f) => (
            <div className="tech-card reveal" key={f.num}>
              <div className="num">{f.num}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
