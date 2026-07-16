import { useTranslation } from "react-i18next";
import { EquipmentTabs } from "../components/EquipmentTabs";
import { SpecsTable } from "../components/SpecsTable";
import creamPowder from "../images/powder-cream.png";
import greyPowder from "../images/powder-grey.png";

export function ServiceSievingPage() {
  const { t } = useTranslation();

  const tabs = [
    {
      id: "ultra-fine",
      label: t("serviceSieving.ultrafine.title", "Ultra Fine Grinding Mill"),
      title: t("serviceSieving.ultrafine.title", "Ultra Fine Grinding Mill"),
      desc: t("serviceSieving.ultrafine.desc", "Coupled with internal sieving mechanisms, our ultra-fine grinding mills achieve extremely tight particle size distributions while processing tough or resilient materials."),
      features: [
        "Internal sieving technology",
        "High precision particle cuts",
        "Continuous closed-loop processing"
      ],
      image: creamPowder
    },
    {
      id: "air-classifier",
      label: t("serviceSieving.airclass.title", "Air Classifier Mill"),
      title: t("serviceSieving.airclass.title", "Air Classifier Mill"),
      desc: t("serviceSieving.airclass.desc", "Air classifiers use centrifugal force and air currents to separate fine particles from coarse ones instantly during the milling process. Oversized particles are rejected and recirculated for further grinding."),
      features: [
        t("serviceSieving.airclass.feature1", "Continuous dynamic classification"),
        t("serviceSieving.airclass.feature2", "Strict top-size control")
      ],
      image: greyPowder
    }
  ];

  const specsRows = [
    { parameter: "Sieve Mesh Range", value: "20 Mesh (841µm) to 400 Mesh (37µm)" },
    { parameter: "Classification Precision", value: "98% accuracy on top-cut size" },
    { parameter: "Processing Volume", value: "Pilot scale to 5000kg/day" },
    { parameter: "Anti-Blinding Tech", value: "Ultrasonic deblinding, mechanical tappers" },
    { parameter: "Compliance", value: "FDA Compliant, GMP environment" }
  ];

  return (
    <main>
      <section className="hero page-header" style={{ paddingBottom: "3rem" }}>
        <div className="hero-eyebrow reveal">
          {t("serviceSieving.label", "Sieving & Classification")}
        </div>
        <h1 className="reveal" style={{ transitionDelay: "0.1s" }}>
          {t("serviceSieving.title", "Precise Particle Classification")}
        </h1>
        <p className="lead reveal" style={{ transitionDelay: "0.2s", maxWidth: "80ch" }}>
          {t("serviceSieving.lead", "Ensuring accurate particle size distribution is critical. Our classification systems separate powders into tightly defined size ranges, guaranteeing consistency and eliminating oversized particles.")}
        </p>
      </section>

      <section className="block" id="technologies" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container">
          <div className="section-label reveal">Separation Systems</div>
          <h2 className="section-h2 reveal">Sieving & Classification Equipment</h2>
          <EquipmentTabs tabs={tabs} />
        </div>
      </section>

      <section className="block" id="specifications">
        <div className="container">
          <div className="section-label reveal">Technical Data</div>
          <h2 className="section-h2 reveal">Classification Specs</h2>
          <p className="section-lead reveal" style={{ marginBottom: "2rem" }}>
            We guarantee exact sizing profiles to match your material flow and solubility requirements.
          </p>
          <SpecsTable title="Sieving Capabilities" rows={specsRows} />
        </div>
      </section>
    </main>
  );
}

export default ServiceSievingPage;
