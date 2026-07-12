const steps = [
  {
    num: "01",
    title: "Clean Room Technology",
    desc: "State-of-the-Art Clean Room Technology including material and personal sluices.",
  },
  {
    num: "02",
    title: "Environmental Control",
    desc: "Dedicated HVAC Systems Provide Environmental Control for Storage & Processing areas.",
  },
  {
    num: "03",
    title: "Cleaning Verification",
    desc: "Cleaning verification program.",
  },
  {
    num: "04",
    title: "Laboratory Services",
    desc: "Laboratory services including Particle size testing on MALVERN Instrument.",
  },
  {
    num: "05",
    title: "Quality Management",
    desc: "Effective Quality Management System in compliance with cGMP Documentation system.",
  },
  {
    num: "06",
    title: "Dedicated Micronizers",
    desc: "We have numbers dedicated micronizers to serve you better.",
  },
];

export function Process() {
  return (
    <section className="block" id="process">
      <div className="container">
        <div className="section-label reveal">Facility</div>
        <h2 className="section-h2 reveal">
          Our modern <span className="red">facility</span> includes:
        </h2>

        <div className="process-row">
          {steps.map((s) => (
            <div className="process-step reveal" key={s.num}>
              <div className="pn">
                <span className="red">{s.num}</span>
              </div>
              <h5>{s.title}</h5>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
