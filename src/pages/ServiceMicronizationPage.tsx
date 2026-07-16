import { useTranslation } from "react-i18next";
import { EquipmentTabs } from "../components/EquipmentTabs";
import { SpecsTable } from "../components/SpecsTable";
import airJetMill from "../images/air-jet-mill-new.png";
import micronizerMachine from "../images/micronizer-machine.png";
import cbdMicronization from "../images/micronisation-cbd.jpg";

export function ServiceMicronizationPage() {
  const { t } = useTranslation();

  const tabs = [
    {
      id: "air-jet",
      label: t("serviceMicronization.airjet.title", "Air Jet Micronization"),
      title: t("serviceMicronization.airjet.title", "Air Jet Micronization"),
      desc: t("serviceMicronization.airjet.desc", "Utilizing high-velocity compressed air or nitrogen, particle-on-particle collisions reduce the active ingredient size without the use of grinding media. This guarantees zero metal contamination and extremely narrow particle size distributions."),
      features: [
        t("serviceMicronization.airjet.feature1", "No moving parts in milling zone"),
        t("serviceMicronization.airjet.feature2", "Oil-free, filtered processing air")
      ],
      image: airJetMill
    },
    {
      id: "cryo",
      label: t("serviceMicronization.cryo.title", "Cryo Micronization"),
      title: t("serviceMicronization.cryo.title", "Cryo Micronization"),
      desc: t("serviceMicronization.cryo.desc", "For highly heat-sensitive or thermolabile compounds, our cryo-micronization process uses liquid nitrogen cooling. This prevents heat degradation, melting, or morphological changes during particle size reduction."),
      features: [
        "Maintains temperatures below -40°C",
        "Prevents volatile loss in active compounds"
      ],
      image: micronizerMachine
    },
    {
      id: "co-micronization",
      label: t("serviceMicronization.co.title", "Co-Micronization"),
      title: t("serviceMicronization.co.title", "Co-Micronization"),
      desc: t("serviceMicronization.co.desc", "Co-micronization involves the simultaneous milling of multiple active ingredients or excipients. This ensures a perfectly homogeneous blend down to the micro-scale, eliminating segregation during subsequent manufacturing steps."),
      features: [
        "Perfect homogenous mixtures",
        "Improved bioavailability profiles"
      ],
      image: cbdMicronization
    }
  ];

  const specsRows = [
    { parameter: "Input Feed Size", value: "< 1mm - 2mm" },
    { parameter: "Target Final Particle Size (D90)", value: "< 5µm up to 10µm" },
    { parameter: "Processing Capacity", value: "50g to 500kg / batch" },
    { parameter: "Contamination Control", value: "Class 100,000 Cleanroom Environment" },
    { parameter: "Contact Parts", value: "SS 316L (Mirror Polished)" }
  ];

  return (
    <main>
      <section className="hero page-header" style={{ paddingBottom: "3rem" }}>
        <div className="hero-eyebrow reveal">
          {t("serviceMicronization.label", "Micronization Services")}
        </div>
        <h1 className="reveal" style={{ transitionDelay: "0.1s" }}>
          {t("serviceMicronization.title", "Precision Micronization")}
        </h1>
        <p className="lead reveal" style={{ transitionDelay: "0.2s", maxWidth: "80ch" }}>
          {t("serviceMicronization.lead", "Our advanced micronization processes dramatically alter the physical and chemical properties of active pharmaceutical ingredients, unlocking enhanced bioavailability and uniform distribution.")}
        </p>
      </section>

      <section className="block" id="technologies" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container">
          <div className="section-label reveal">Our Technologies</div>
          <h2 className="section-h2 reveal">Micronization Methods</h2>
          <EquipmentTabs tabs={tabs} />
        </div>
      </section>

      <section className="block" id="specifications">
        <div className="container">
          <div className="section-label reveal">Technical Data</div>
          <h2 className="section-h2 reveal">Process Specifications</h2>
          <p className="section-lead reveal" style={{ marginBottom: "2rem" }}>
            We guarantee tightly controlled particle size distributions using state-of-the-art analytical equipment.
          </p>
          <SpecsTable title="Micronization Capabilities" rows={specsRows} />
        </div>
      </section>
    </main>
  );
}

export default ServiceMicronizationPage;
