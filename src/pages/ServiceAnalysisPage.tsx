import { useTranslation } from "react-i18next";
import { EquipmentTabs } from "../components/EquipmentTabs";
import { SpecsTable } from "../components/SpecsTable";
import mastersizer from "../images/Mastersizer-Mastersizer_+_Hydro_EV.png";
import sieveStack from "../images/sieve-analysis-stack.png";
import bulkDensityImg from "../images/bulk-tap-density.jpg";

export function ServiceAnalysisPage() {
  const { t } = useTranslation();

  const tabs = [
    {
      id: "laser-diffraction",
      label: t("serviceAnalysis.laser.title", "Laser Diffraction"),
      title: t("serviceAnalysis.laser.title", "Laser Diffraction"),
      desc: t("serviceAnalysis.laser.desc", "Using industry-standard Malvern Mastersizer instruments, we measure absolute particle size distributions across both dry powder dispersions and wet suspensions, catering to the unique physical properties of each active ingredient."),
      features: [
        t("serviceAnalysis.laser.feature1", "Sub-micron level accuracy"),
        t("serviceAnalysis.laser.feature2", "Automated dispersion units"),
        "Real-time D10, D50, D90 reporting"
      ],
      image: mastersizer
    },
    {
      id: "sieve-analysis",
      label: t("serviceAnalysis.tech.sieve.title", "Sieve Analysis"),
      title: t("serviceAnalysis.tech.sieve.title", "Sieve Analysis"),
      desc: t("serviceAnalysis.tech.sieve.desc", "Traditional and reliable physical screening to determine the granular particle size distribution of coarser materials."),
      features: [
        "Vibratory shaker analysis",
        "Calibrated mesh screens",
        "Ideal for granules > 100µm"
      ],
      image: sieveStack
    },
    {
      id: "bulk-tap-density",
      label: t("serviceAnalysis.tech.density.title", "Bulk & Tap Density"),
      title: t("serviceAnalysis.tech.density.title", "Bulk & Tap Density"),
      desc: t("serviceAnalysis.tech.density.desc", "Critical measurements for powder flowability, compressibility, and packaging requirements, ensuring optimal downstream processing for oral solid dosages."),
      features: [
        "Carr's Index calculation",
        "Hausner Ratio measurement",
        "Automated tap volume tracking"
      ],
      image: bulkDensityImg
    }
  ];

  const specsRows = [
    { parameter: "Measurement Range (Laser)", value: "0.1µm to 3000µm" },
    { parameter: "Dispersion Modes", value: "Aero (Dry) & Hydro (Wet)" },
    { parameter: "Compliance Level", value: "21 CFR Part 11 Compliant Software" },
    { parameter: "Analysis Time", value: "Fast turnaround (<24hrs for QA release)" },
    { parameter: "Reporting Format", value: "Detailed Certificates of Analysis (CoA)" }
  ];

  return (
    <main>
      <section className="hero page-header" style={{ paddingBottom: "3rem" }}>
        <div className="hero-eyebrow reveal">
          {t("serviceAnalysis.label", "Analysis & Quality Assurance")}
        </div>
        <h1 className="reveal" style={{ transitionDelay: "0.1s" }}>
          {t("serviceAnalysis.title", "Comprehensive Particle Analysis")}
        </h1>
        <p className="lead reveal" style={{ transitionDelay: "0.2s", maxWidth: "80ch" }}>
          {t("serviceAnalysis.lead", "To guarantee the highest quality and exact specifications, every batch undergoes strict analytical verification using state-of-the-art laser diffraction and physical testing methods.")}
        </p>
      </section>

      <section className="block" id="technologies" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container">
          <div className="section-label reveal">Laboratory Testing</div>
          <h2 className="section-h2 reveal">Analytical Instruments</h2>
          <EquipmentTabs tabs={tabs} />
        </div>
      </section>

      <section className="block" id="specifications">
        <div className="container">
          <div className="section-label reveal">Quality Assurance</div>
          <h2 className="section-h2 reveal">Testing Capabilities</h2>
          <p className="section-lead reveal" style={{ marginBottom: "2rem" }}>
            Our internal lab guarantees that product leaving our facility precisely matches your required particle size profile.
          </p>
          <SpecsTable title="QA / QC Specifications" rows={specsRows} />
        </div>
      </section>
    </main>
  );
}

export default ServiceAnalysisPage;
