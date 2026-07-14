const meshData = [
  { mesh: "10", microns: 2000, inches: "0.0787" },
  { mesh: "12", microns: 1680, inches: "0.0661" },
  { mesh: "14", microns: 1410, inches: "0.0555" },
  { mesh: "16", microns: 1190, inches: "0.0469" },
  { mesh: "18", microns: 1000, inches: "0.0394" },
  { mesh: "20", microns: 841, inches: "0.0331" },
  { mesh: "25", microns: 707, inches: "0.0280" },
  { mesh: "30", microns: 595, inches: ".0232" },
  { mesh: "35", microns: 500, inches: ".0197" },
  { mesh: "40", microns: 420, inches: ".165", highlight: true },
  { mesh: "45", microns: 354, inches: "0.138" },
  { mesh: "50", microns: 297, inches: "0.117" },
  { mesh: "60", microns: 250, inches: ".0098" },
  { mesh: "70", microns: 210, inches: ".0083" },
  { mesh: "80", microns: 177, inches: ".0070" },
  { mesh: "100", microns: 149, inches: ".0059" },
  { mesh: "120", microns: 125, inches: ".0049" },
  { mesh: "140", microns: 105, inches: ".0041" },
  { mesh: "170", microns: 88, inches: ".0035" },
  { mesh: "200", microns: 74, inches: ".0029" },
  { mesh: "230", microns: 63, inches: ".0024" },
  { mesh: "270", microns: 53, inches: ".0021" },
  { mesh: "325", microns: 44, inches: ".0017" },
  { mesh: "400", microns: 37, inches: ".0015" },
  { mesh: "550", microns: 25, inches: ".00099" },
  { mesh: "625", microns: 20, inches: ".00079" },
  { mesh: "1250", microns: 10, inches: ".000394", highlight: true },
  { mesh: "1750", microns: 8, inches: ".000315" },
  { mesh: "2500", microns: 5, inches: ".000197", highlight: true },
  { mesh: "5000", microns: 2.5, inches: ".000099" },
  { mesh: "12000", microns: 1, inches: ".0000394" },
];

const MAX_DOT = 36; // px – largest dot diameter (for mesh 10 / 2000μm)
const MIN_DOT = 3;  // px – smallest dot diameter
const MAX_MICRONS = meshData[0].microns;

function dotSize(microns: number) {
  const ratio = microns / MAX_MICRONS;
  const d = MIN_DOT + (MAX_DOT - MIN_DOT) * Math.sqrt(ratio);
  return Math.max(MIN_DOT, d);
}

export function ParticleSize() {
  return (
    <section className="block" id="particle-size">
      <div className="container">
        <div className="ps-layout">
          <div className="ps-info reveal">
            <div className="section-label">Comparative Particle Size</div>
            <h2 className="section-h2">
              Standard US Mesh <span className="red">Conversion</span> Chart
            </h2>
            <p className="section-lead">
              Below is a reference table for standard particle size conversions used in our
              micronization processes.
            </p>
            <br />
            <p>
              Micronization is the process of reducing the average diameter of a solid material's particles. In
              pharmaceuticals, this process is essential for improving the dissolution rate and bioavailability of poorly
              soluble drugs.
            </p>
            <p>
              At Microtech India, our spiral jet mills are capable of achieving precise particle size distributions (PSD)
              ranging from a few millimeters down to 1-2 microns, meeting stringent pharmaceutical standards.
            </p>
            <p>
              We tailor the milling parameters—such as feed rate, grinding pressure, and nozzle geometry—to match your
              exact target mesh size.
            </p>
          </div>
          <div className="reveal">
            <div className="ps-table-wrap">
              <table className="ps-table">
                <thead>
                  <tr>
                    <th>U.S. Mesh</th>
                    <th>Microns (μm)</th>
                    <th>Inches</th>
                    <th className="th-visual">Visual</th>
                  </tr>
                </thead>
                <tbody>
                  {meshData.map((row) => {
                    const d = dotSize(row.microns);
                    return (
                      <tr key={row.mesh} className={row.highlight ? "highlight" : undefined}>
                        <td>{row.mesh}</td>
                        <td>{row.microns}</td>
                        <td>{row.inches}</td>
                        <td className="td-visual">
                          <span
                            className="ps-dot"
                            style={{ width: d, height: d }}
                            title={`${row.microns} μm`}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParticleSize;
