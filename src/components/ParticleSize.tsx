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
const MAX_MICRONS = meshData[0]!.microns;

function dotSize(microns: number) {
  const ratio = microns / MAX_MICRONS;
  const d = MIN_DOT + (MAX_DOT - MIN_DOT) * Math.sqrt(ratio);
  return Math.max(MIN_DOT, d);
}

import { useTranslation } from "react-i18next";

export function ParticleSize() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";

  const getParagraphs = () => {
    switch (lang) {
      case "gu":
        return [
          "માઇક્રોનાઇઝેશન એ ઘન પદાર્થના કણોના સરેરાશ વ્યાસને ઘટાડવાની પ્રક્રિયા છે. ફાર્માસ્યુટિકલ્સમાં, નબળી દ્રાવ્ય દવાઓ ઓગળવાનો દર અને તેની જૈવઉપલબ્ધતા વધારવા માટે આ પ્રક્રિયા આવશ્યક છે.",
          "માઇક્રોટેક ઇન્ડિયા ખાતે, અમારા સ્પાયરલ જેટ મિલ્સ કડક ફાર્માસ્યુટિકલ ધોરણોને પૂર્ણ કરીને, થોડા મિલીમીટરથી લઈને ૧-૨ માઇક્રોન સુધીની ચોક્કસ કણોના કદના વિતરણ (PSD) પ્રાપ્ત કરવામાં સક્ષમ છે.",
          "અમે તમારી ચોક્કસ લક્ષ્ય મેશ સાઇઝ સાથે મેળ ખાવા માટે મિલિંગ પરિમાણો જેવા કે ફીડ રેટ, ગ્રાઇન્ડીંગ પ્રેશર અને નોઝલ ભૂમિતિને કસ્ટમાઇઝ કરીએ છીએ."
        ];
      case "it":
        return [
          "La micronizzazione è il processo di riduzione del diametro medio delle particelle di un materiale solido. Nei prodotti farmaceutici, questo processo è essenziale per migliorare la velocità di dissoluzione e la biodisponibilità di farmaci scarsamente solubili.",
          "Presso Microtech India, i nostri mulini a getto a spirale sono in grado di ottenere distribuzioni precise delle dimensioni delle particelle (PSD) che vanno da pochi millimetri fino a 1-2 micron, soddisfacendo i severi standard farmaceutici.",
          "Personalizziamo i parametri di macinazione, come la velocità di avanzamento, la pressione di macinazione e la geometria dell'ugello, per adattarli alle vostre precise dimensioni della mesh target."
        ];
      case "fr":
        return [
          "La micronisation est le processus consistant à réduire le diamètre moyen des particules d'un matériau solide. En pharmacie, ce processus est essentiel pour améliorer la vitesse de dissolution et la biodisponibilité des médicaments peu solubles.",
          "Chez Microtech India, nos broyeurs à jet d'air en spirale sont capables d'obtenir des distributions granulométriques (PSD) précises allant de quelques millimètres à 1 à 2 microns, répondant ainsi aux normes pharmaceutiques les plus strictes.",
          "Nous adaptons les paramètres de broyage, tels que le débit d'alimentation, la pression de broyage et la géométrie de la buse, pour correspondre exactement à la taille de mesh cible."
        ];
      case "zh":
        return [
          "超细微化是指减小固体物料颗粒平均直径的过程。在制药领域，这一工艺对于提高难溶性药物的溶解速率和生物利用度至关重要。",
          "在 Microtech India，我们的螺旋气流粉碎机能够实现从几毫米到 1-2 微米的精密颗粒粒径分布 (PSD)，满足严格的制药标准。",
          "我们为客户量身定制研磨参数——如进料速度、粉碎压力和喷嘴几何形状——以完美契合您的目标网目尺寸要求。"
        ];
      case "en":
      default:
        return [
          "Micronization is the process of reducing the average diameter of a solid material's particles. In pharmaceuticals, this process is essential for improving the dissolution rate and bioavailability of poorly soluble drugs.",
          "At Microtech India, our spiral jet mills are capable of achieving precise particle size distributions (PSD) ranging from a few millimeters down to 1-2 microns, meeting stringent pharmaceutical standards.",
          "We tailor the milling parameters—such as feed rate, grinding pressure, and nozzle geometry—to match your exact target mesh size."
        ];
    }
  };

  const paragraphs = getParagraphs();

  return (
    <section className="block" id="particle-size">
      <div className="container">
        <div className="ps-layout">
          <div className="ps-info reveal">
            <div className="section-label">{t("particleSize.label")}</div>
            <h2 className="section-h2" dangerouslySetInnerHTML={{ __html: t("particleSize.title") }} />
            <p className="section-lead">
              {t("particleSize.lead")}
            </p>
            <br />
            {paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
          <div className="reveal">
            <div className="ps-table-wrap">
              <table className="ps-table">
                <thead>
                  <tr>
                    <th>{t("particleSize.table.mesh")}</th>
                    <th>{t("particleSize.table.microns")}</th>
                    <th>{t("particleSize.table.inches")}</th>
                    <th className="th-visual">{t("particleSize.table.visual")}</th>
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
