const benefits = [
  {
    num: "01",
    title: "Improved Bioavailability",
    desc: "Improved bioavailability and dissolution of poorly soluble API's.",
    tag: "Solubility",
  },
  {
    num: "02",
    title: "No Heat Degradation",
    desc: "No heat degradation for powder being milled.",
    tag: "Thermolabile",
  },
  {
    num: "03",
    title: "Less Contamination Risk",
    desc: "Less risk of metal contamination associated.",
    tag: "Purity",
  },
  {
    num: "04",
    title: "Cost Effective",
    desc: "High quality, cost effective milling approach.",
    tag: "Efficiency",
  },
  {
    num: "05",
    title: "High Pressure Air",
    desc: "Oil and Moisture free high pressure air and Nitrogen air also for sensitive products.",
    tag: "Clean Air",
  },
];

export function Benefits() {
  return (
    <section className="block" id="benefits">
      <div className="container">
        <div className="section-label reveal">Benefits</div>
        <h2 className="section-h2 reveal">
          Benefits of <span className="red">Micronization</span>
        </h2>

        <div className="benefits-grid">
          {benefits.map((b) => (
            <div className="benefit-card reveal" key={b.num}>
              <div className="b-num">{b.num}</div>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
              <div className="tag">{b.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
