import { useTranslation } from "react-i18next";
import { EquipmentTabs } from "../components/EquipmentTabs";
import { SpecsTable } from "../components/SpecsTable";
import brownPowder from "../images/powder-brown.png";
import tanPowder from "../images/powder-tan.png";

export function ServiceMillingPage() {
  const { t } = useTranslation();

  const tabs = [
    {
      id: "multi-mill",
      label: t("serviceMilling.multi.title", "Multi Mill"),
      title: t("serviceMilling.multi.title", "Multi Mill"),
      desc: t("serviceMilling.multi.desc", "Multi milling uses variable force and screen variations to achieve optimal granulation and pulverization. It is widely applied for wet and dry granulation in pharmaceutical manufacturing."),
      features: [
        t("serviceMilling.multi.feature1", "Cryogenic purging available"),
        t("serviceMilling.multi.feature2", "Standard milling"),
        t("serviceMilling.multi.feature3", "Co-milling integrations")
      ],
      image: brownPowder
    },
    {
      id: "hammer-mill",
      label: t("serviceMilling.hammer.title", "Hammer Mill"),
      title: t("serviceMilling.hammer.title", "Hammer Mill"),
      desc: t("serviceMilling.hammer.desc", "Our hammer mills use high-speed rotating hammers to crush and shatter hard, crystalline, or fibrous materials. This process offers high throughput and robust size reduction."),
      features: [
        "High impact crushing force",
        "Excellent for robust, fibrous materials",
        "Customizable screen sizes"
      ],
      image: tanPowder
    }
  ];

  const specsRows = [
    { parameter: "Input Feed Size", value: "< 50mm" },
    { parameter: "Target Final Particle Size (D90)", value: "10 - 20 Mesh" },
    { parameter: "Processing Capacity", value: "0.20g to 50 Metric Tons" },
    { parameter: "Cooling Options", value: "Liquid Nitrogen Purging (Cryogenic)" },
    { parameter: "Documentation", value: "Full cGMP Batch Records" }
  ];

  return (
    <main>
      <section className="hero page-header" style={{ paddingBottom: "3rem" }}>
        <div className="hero-eyebrow reveal">
          {t("serviceMilling.label", "Milling Services")}
        </div>
        <h1 className="reveal" style={{ transitionDelay: "0.1s" }}>
          {t("serviceMilling.title", "Industrial Milling Solutions")}
        </h1>
        <p className="lead reveal" style={{ transitionDelay: "0.2s", maxWidth: "80ch" }}>
          {t("serviceMilling.lead", "Our versatile milling capabilities process a vast array of materials. From multi-mills to hammer mills, we offer standard and specialized milling equipped with cryogenic cooling and co-milling techniques.")}
        </p>
      </section>

      <section className="block" id="technologies" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container">
          <div className="section-label reveal">Milling Systems</div>
          <h2 className="section-h2 reveal">Advanced Milling Technologies</h2>
          <EquipmentTabs tabs={tabs} />
        </div>
      </section>

      <section className="block" id="specifications">
        <div className="container">
          <div className="section-label reveal">Technical Data</div>
          <h2 className="section-h2 reveal">Milling Specifications</h2>
          <p className="section-lead reveal" style={{ marginBottom: "2rem" }}>
            We provide robust and scalable milling services capable of processing large volumes without sacrificing precision.
          </p>
          <SpecsTable title="Milling Capabilities" rows={specsRows} />
        </div>
      </section>
    </main>
  );
}

export default ServiceMillingPage;
