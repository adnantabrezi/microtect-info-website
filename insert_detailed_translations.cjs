const fs = require('fs');
let content = fs.readFileSync('src/i18n.ts', 'utf8');

const englishAdditions = `
      serviceMicronization: {
        label: "Micronization Services",
        title: "Precision Micronization",
        lead: "Our advanced micronization processes dramatically alter the physical and chemical properties of active pharmaceutical ingredients, unlocking enhanced bioavailability and uniform distribution.",
        co: {
          label: "Specialized Process",
          title: "Co-Micronization",
          desc: "Co-micronization involves the simultaneous milling of multiple active ingredients or excipients. This ensures an intimate, micro-scale homogeneous blend, eliminating segregation during subsequent manufacturing steps."
        },
        cryo: {
          label: "Temperature Controlled",
          title: "Cryo Micronization",
          desc: "For highly heat-sensitive or thermolabile compounds, our cryo-micronization process uses liquid nitrogen cooling. This prevents heat degradation, melting, surface amorphization, and polymorphic conversion during particle size reduction."
        },
        airjet: {
          label: "Ultra-Fine Reduction",
          title: "Air Jet Micronization",
          desc: "Utilizing sonic or supersonic high-velocity compressed gas, particle-on-particle collisions (attrition) reduce the active ingredient size without the use of grinding media. This guarantees zero metal contamination and extremely narrow particle size distributions, ideal for BCS Class II and IV drugs.",
          feature1: "No moving parts in milling zone",
          feature2: "Oil-free, filtered processing air"
        }
      },
      serviceMilling: {
        label: "Milling Services",
        title: "Industrial Milling Solutions",
        lead: "Our versatile milling capabilities process a vast array of materials. From multi-mills to hammer mills, we offer standard and specialized milling equipped with cryogenic cooling and co-milling techniques.",
        multi: {
          label: "Variable Speed Granulation",
          title: "Multi Mill",
          desc: "Multi milling uses variable force (impact and shearing via knife edges) and screen variations to achieve optimal granulation. It is highly flexible for both wet and dry granulation, producing highly controlled, uniform particle size distributions.",
          feature1: "Cryogenic purging available",
          feature2: "Standard milling",
          feature3: "Co-milling integrations"
        },
        hammer: {
          label: "High Impact Crushing",
          title: "Hammer Mill",
          desc: "Our hammer mills use high-velocity rotating hammers to crush and shatter hard, crystalline, or brittle materials against a screen. This process offers immense raw power, high throughput, and robust size reduction.",
          feature1: "Cryogenic purging available",
          feature2: "Standard milling",
          feature3: "Co-milling integrations"
        },
        techniques: {
          title: "Advanced Techniques"
        },
        tech: {
          cryo: {
            title: "Cryogenic Purging",
            desc: "Using liquid nitrogen to keep milling environments extremely cold, protecting active ingredients from degrading under intense heat friction generated during impact milling."
          },
          standard: {
            title: "Standard Milling",
            desc: "Ambient temperature milling relying on efficient airflow and mechanical design to produce standardized powders rapidly."
          },
          comill: {
            title: "Co-Milling",
            desc: "Simultaneous milling of multiple substances directly in the milling chamber to achieve perfect homogeneous mixtures and integrated formulations."
          }
        }
      },
      serviceSieving: {
        label: "Sieving & Classification",
        title: "Precise Particle Classification",
        lead: "Ensuring accurate particle size distribution is critical. Our classification systems separate powders into tightly defined size ranges, guaranteeing consistency and eliminating oversized particles.",
        ultrafine: {
          label: "High Precision",
          title: "Ultra Fine Grinding Mill",
          desc: "Coupled with internal sieving mechanisms, our ultra-fine grinding mills achieve extremely tight particle size distributions while processing tough or resilient materials."
        },
        airclass: {
          label: "Dynamic Separation",
          title: "Air Classifier Mill",
          desc: "Air classifiers use centrifugal force and air currents to create a dynamic vortex. This allows fine particles to pass to the central outlet while rejecting and recirculating oversized particles to maintain strict top-size control.",
          feature1: "Continuous dynamic classification",
          feature2: "Strict top-size control"
        }
      },
      serviceAnalysis: {
        label: "Analysis & Quality Assurance",
        title: "Comprehensive Particle Analysis",
        lead: "To guarantee the highest quality and exact specifications, every batch undergoes strict analytical verification using state-of-the-art laser diffraction and physical testing methods.",
        laser: {
          label: "Laser Diffraction",
          title: "Dry and Wet Modes",
          desc: "Using industry-standard Malvern Mastersizer instruments, we measure absolute particle size distributions. Wet mode utilizes sonication and liquid dispersion to break down cohesive agglomerates gently, while Dry mode uses venturi dispersion (compressed air), perfectly mimicking dry powder inhaler conditions for water-soluble materials.",
          feature1: "Sub-micron level accuracy",
          feature2: "Automated dispersion units"
        },
        physical: {
          title: "Physical Characterization"
        },
        tech: {
          sieve: {
            title: "Sieve Analysis",
            desc: "Traditional and reliable physical screening to determine the granular particle size distribution of coarser materials."
          },
          density: {
            title: "Bulk & Tap Density",
            desc: "Critical measurements assessing powder flowability, compressibility, and packaging requirements—ensuring optimal downstream processing for oral solid dosages and capsule filling."
          }
        }
      },
`;

// Remove the existing service dictionaries if they are there, to avoid duplicates.
// We'll just replace `en: { translation: {` with our content.
content = content.replace(/en: \{\s*translation: \{/, 'en: {\n    translation: {\n' + englishAdditions);
fs.writeFileSync('src/i18n.ts', content);
