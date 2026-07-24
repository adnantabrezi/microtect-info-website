import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      certifications: {
        cgmp: "cGMP Compliant",
        fda: "FDA Inspected",
        iso: "ISO 9001..2015 Certified"
      },
      servicesGrid: {
        label: "Our Capabilities",
        title: "Comprehensive <em>Processing</em> Solutions",
        micronization: {
          title: "Micronization",
          desc: "Ultra-fine particle reduction utilizing advanced air jet milling for APIs and excipients."
        },
        milling: {
          title: "Mechanical Milling",
          desc: "High-impact sizing and granulation for robust, consistent particle size distributions."
        },
        sieving: {
          title: "Sieving & Classification",
          desc: "Dynamic separation and tight top-size control to ensure product uniformity."
        },
        analysis: {
          title: "Analytical Services",
          desc: "State-of-the-art laser diffraction and physical characterization to verify quality."
        },
        particleReduction: {
          title: "Particle Size Reduction, BD & TD Facility",
          desc: "Specialized particle size reduction coupled with Bulk Density (BD) & Tapped Density (TD) testing facility."
        },
        learnMore: "Learn More"
      },
      scaleTimeline: {
        label: "End-to-End Scalability",
        title: "From R&D to <em>Commercial</em> Supply",
        rnd: {
          title: "Lab / R&D Scale",
          desc: "Feasibility studies, small batch trials, and precise process development."
        },
        pilot: {
          title: "Pilot Scale",
          desc: "Process optimization, clinical trial material, and scalable engineering runs."
        },
        commercial: {
          title: "Commercial Production",
          desc: "High-throughput, multi-ton manufacturing under strict cGMP protocols."
        }
      },
      industries: {
        label: "Industries Served",
        title: "Tailored Solutions for <em>Every Sector</em>",
        pharma: {
          title: "Pharmaceuticals",
          desc: "Enhancing bioavailability of poorly soluble APIs with strict cGMP compliance."
        },
        food: {
          title: "Food & Nutrition",
          desc: "Precise milling for supplements, functional foods, and sensitive nutraceuticals."
        },
        cosmetics: {
          title: "Cosmetics",
          desc: "Achieving luxurious textures and uniform dispersion for premium beauty products."
        },
        chemical: {
          title: "Specialty Chemicals",
          desc: "Custom size reduction for advanced materials, catalysts, and engineered polymers."
        }
      },
      stats: {
        experience: {
          value: "2 Decade",
          label: "Experience"
        },
        projects: {
          value: "1,500+",
          label: "Successful Projects"
        },
        precision: {
          value: "1 µm",
          label: "Size Precision"
        },
        capacity: {
          value: "2,000+",
          label: "Tons Annually"
        }
      },

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
          desc: "For highly heat-sensitive or thermolabile compounds, our cryo-micronization process uses liquid nitrogen cooling. This prevents heat degradation, melting, surface amorphization, and polymorphic conversion during particle size reduction.",
          feature1: "Microbial control point"
        },
        airjet: {
          label: "Ultra-Fine Reduction",
          title: "Air Jet Micronization",
          desc: "Utilizing sonic or supersonic high-velocity compressed gas, particle-on-particle collisions (attrition) reduce the active ingredient size without the use of grinding media. This guarantees zero metal contamination and extremely narrow particle size distributions, ideal for BCS drugs.",
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
          feature1: "Liquid nitrogen purging available",
          feature2: "Standard milling",
          feature3: "Co-milling integrations"
        },
        hammer: {
          label: "High Impact Crushing",
          title: "Hammer Mill",
          desc: "Our hammer mills use high-velocity rotating hammers to crush and shatter hard, crystalline, or brittle materials against a screen. This process offers immense raw power, high throughput, and robust size reduction.",
          feature1: "Liquid nitrogen purging available",
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
          title: "Malvern Mastersizer 3000 + ultra",
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

      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        facilities: "Facilities",
        contact: "Contact",
        contactUs: "Contact Us",
        homeOverview: "Home Overview",
        powders: "Powders",
        particleSize: "Particle Size",
        technology: "Technology",
        benefits: "Benefits",
        process: "Process",
        aboutOverview: "About Overview",
        atAGlance: "At a Glance",
        features: "Features",
        ourCompany: "Our Company",
        facilitiesOverview: "Facilities Overview",
        ankleshwarUnit: "Ankleshwar Unit",
        panoliPlant1: "Panoli Plant 1",
        panoliPlant2: "Panoli Plant 2",
        servicesOverview: "Services Overview",
        micronization: "Micronization",
        coMicronization: "Co micronization",
        cryoMicronization: "Cryo micronization",
        airJetMicronization: "Air jet micronization",
        milling: "Milling",
        multiMill: "Multi mill",
        cryogenicPurging: "Cryogenic purging",
        standardMilling: "Standard milling",
        coMilling: "Co-milling",
        hammerMill: "Hammer mill",
        sievingClassification: "Sieving / Classification",
        ultraFineGrindingMill: "Ultra fine grinding mill",
        airClassifierMill: "Air classifier mill",
        analysis: "Analysis",
        dryAndWetModes: "Malvern Mastersizer 3000 + ultra",
        sieveAnalysis: "Sieve analysis",
        bulkDensityTapDensity: "Bulk density and tap density",
        contactOverview: "Contact Overview",
        contactDetails: "Contact Details"
      },
      hero: {
        eyebrow: "MicroTech India · Your Trusted Independent CMO",
        title: "Your M<span class=\"exclaim\">!</span>cro partner<br />for <span class=\"red\">micronization</span> work<br />APIs, pharmaceuticals,<br />chemicals.",
        lead: "MicroTech (INDIA) is one of the most trusted leaders of Micronisation Services for APIs, Bulk Drugs, Excipients, Inorganic APIs, Chemicals, Specialty Chemicals, and Cosmetics. Located at Ankleshwar and Panoli (Asia's largest industrial area) in Gujarat, INDIA, our state-of-the-art FDA-approved facilities span over 7000 sqft. We leverage advanced Air Jet Milling, Multi Milling, and Cryogenic technologies to deliver precise particle size reduction. Supported by dedicated ISO-certified cleanrooms and advanced analytical laboratories, our team brings over two decades of expertise to provide unparalleled quality to our clientele.",
        ctaContact: "Contact Us",
        ctaMesh: "View Mesh Sizes",
        fda: "FDA Approved Facility",
        sqft: "Sqft. Facility",
        years: "Experience",
        cgmp: "Standard Practices",
        iso: "Certified Company"
      },
      showcase: {
        label: "Visual Demonstration",
        title: "Micronization <span class=\"red\">Effect</span>",
        lead: "See how our precision particle size reduction changes coarse active pharmaceutical ingredients into highly fine powders.",
        coarse: "Coarse Particle",
        fine: "Micronized Powder",
        materials: {
          white: "White Crystalline API",
          white2: "Ultra-Fine White API",
          yellow: "Yellow Excipient",
          brown: "Brown Herbal Powder",
          cream: "Cream API Powder",
          grey: "Grey Mineral Compound"
        }
      },
      particleSize: {
        label: "Comparative Particle Size",
        title: "Standard US Mesh <span class=\"red\">Conversion</span> Chart",
        lead: "Below is a reference table for standard particle size conversions used in our micronization processes.",
        table: {
          mesh: "US Mesh",
          microns: "Microns (µm)",
          inches: "Inches",
          visual: "Relative Size"
        }
      },
      features: {
        label: "Why Particle Size Matters",
        title: "Unlocking <span class=\"red\">Bioavailability</span> & Performance",
        desc: "Particle size reduction is a critical step in the formulation of modern pharmaceuticals. By reducing particle size to the micron level, we dramatically alter the physical and chemical properties of your active ingredients.",
        items: {
          bio: {
            title: "Enhanced Bioavailability",
            desc: "Smaller particles mean a significantly higher surface-to-volume ratio, resulting in accelerated dissolution rates and vastly improved absorption inside the body."
          },
          uniformity: {
            title: "Perfect Blend Uniformity",
            desc: "Achieve consistent mixing with excipients. Eliminating size segregation ensures that every dose contains the exact required ratio of active pharmaceutical ingredients."
          },
          delivery: {
            title: "Advanced Drug Delivery",
            desc: "Crucial for inhalation, ophthalmic, and injectable formulations. Precise control of the particle distribution allows targeted delivery to the respiratory tract or sensitive tissues."
          }
        }
      },
      benefits: {
        label: "Technical Advantages",
        title: "State-of-the-Art <span class=\"red\">Spiral Jet Mill</span> Technology",
        desc: "Our processing utilizes advanced fluid energy jet mills, leveraging high-velocity compressed air or nitrogen gas streams to collide particles against each other.",
        items: {
          noHeat: {
            title: "No Heat Degradation",
            desc: "Fluid expansion creates a cooling effect. Ideal for thermolabile and heat-sensitive organic compounds."
          },
          noContam: {
            title: "Zero Metal Contamination",
            desc: "No mechanical grinding media or moving parts. Particle-on-particle collision ensures extreme purity."
          },
          narrow: {
            title: "Narrow Particle Distribution",
            desc: "Advanced classification controls ensure uniform particle distribution without oversized grains."
          }
        }
      },
      process: {
        label: "Our Operational Standards",
        title: "Quality <span class=\"red\">Assured</span> Operations",
        desc: "We follow strict guidelines to ensure that all processes run safely, efficiently, and meet global standards.",
        items: {
          traceability: {
            title: "Batch Traceability",
            desc: "Complete traceability of every single gram processed, with full documentation of parameters and environment."
          },
          room: {
            title: "Classified Cleanrooms",
            desc: "Milling is executed in positive-pressure ISO-classified rooms to completely prevent external cross-contamination."
          },
          malvern: {
            title: "Malvern Laser Analysis",
            desc: "Every batch is verified using state-of-the-art Malvern Mastersizer instruments for absolute verification."
          }
        }
      },
      contactSec: {
        label: "Partner with Us",
        title: "Discuss Your <span class=\"red\">Project</span>",
        lead: "Whether you need a small trial or high-volume commercial production, our technical team is here to assist you.",
        cta: "Contact Our Technical Team",
        quick: "Quick Contact",
        response: "We respond to all valuable inquiries within 24 hours.",
        persons: "Contact Persons"
      },
      footer: {
        rights: "All Rights Reserved.",
        designed: "Designed with precision for pharmaceutical excellence."
      },
      aboutPage: {
        label: "About Microtech India",
        title: "2 Decade of <span class=\"red\">Pharmaceutical</span> Excellence",
        lead: "A family-owned Contract Manufacturing Organization dedicated to precision micronization.",
        whoLabel: "At a Glance",
        whoTitle: "Who we <span class=\"red\">are</span>",
        whoLead: "MICROTECH INDIA is a family-owned, independent Contract Manufacturing Organization (CMO) with over two decades of experience in milling and micronization. We process Active Pharmaceutical Ingredients (APIs), Bulk Drugs, Excipients, Specialty Chemicals, Inorganic Salts, Herbal Products, Cosmetics, and Battery Powders with extreme precision, fully compliant with current FDA standards. Our modern facilities and long-standing experience enable us to deliver accurate, high-quality, and reliable solutions to our clients.",
        cardExp: "Experience",
        cardFDA: "Compliant Facility",
        cardGMP: "Standard Practices",
        cardCMO: "Contract Manufacturing",
        capLabel: "Features",
        capTitle: "Our <span class=\"red\">capabilities</span>",
        caps: {
          particle: {
            title: "Particle Size Range",
            desc: "Particle size range up to D100 to 5 microns using oil and moisture-free high pressure filtered air."
          },
          nitrogen: {
            title: "Nitrogen Available",
            desc: "Nitrogen is also available for air sensitive products."
          },
          ambient: {
            title: "Ambient Process",
            desc: "Ambient process with latest technologies."
          },
          parts: {
            title: "No Moving Parts",
            desc: "Stationary grinding chamber with no moving parts."
          },
          throughput: {
            title: "Reproducible & High Throughput",
            desc: "Reproducible and high-throughput process with monthly processing capacity of up to 200 metric tons."
          },
          capacity: {
            title: "200 Metric Ton Monthly Capacity",
            desc: "High-scale commercial processing capacity of up to 200 metric tons per month."
          }
        },
        whyLabel: "Benefits",
        whyTitle: "Why choose <span class=\"red\">Microtech</span>",
        benefits: {
          bio: {
            title: "Improved Bioavailability",
            desc: "Improved bioavailability and dissolution of poorly soluble API's.",
            tag: "Solubility"
          },
          heat: {
            title: "No Heat Degradation",
            desc: "No heat degradation for powder being milled.",
            tag: "Thermolabile"
          },
          contam: {
            title: "Less Contamination Risk",
            desc: "Less risk of metal contamination associated.",
            tag: "Purity"
          },
          cost: {
            title: "Cost Effective Milling",
            desc: "High quality, cost effective milling approach.",
            tag: "Efficiency"
          },
          air: {
            title: "Clean Air Processing",
            desc: "Oil and Moisture free high pressure air and Nitrogen also for sensitive products.",
            tag: "Clean Air"
          },
          validation: {
            title: "Customer Specific Process & Cleaning Validation",
            desc: "Customized process parameters and rigorous cleaning validation protocols as per SOP tailored to your specific product requirements.",
            tag: "Compliance"
          }
        },
        companyLabel: "Our Company",
        companyTitle: "Fast Growing <span class=\"red\">Pharma</span> Company",
        companyLead: "We offer consistent, reliable and cost-effective contract micronization services for your SMALL QUANTITY (0.20 GRAMS) TO LARGE VOLUME ROUTINE PRODUCTIONS (50 METRIC TONS). We will help you to reduce \"TIME TO MARKET\" for your R&D projects.",
        highlights: {
          batch: "Small to large batch processing",
          timeline: "Accelerated R&D timelines",
          fda: "FDA-approved facilities",
          trace: "Complete batch traceability"
        },
        partner: "Partner with Us"
      },
      servicesPage: {
        label: "What We Offer",
        title: "Complete Services with Unwavering <span class=\"red\">Commitment</span>",
        lead: "We offer comprehensive, single-source solution for all micronization requirements, backed by a steady and fast dedication to quality and precision.",
        gridLabel: "Our Services",
        gridTitle: "End-to-end <span class=\"red\">solutions</span>",
        gridLead: "Our expertise spans across various industries, ensuring tailored services that meet the highest standards. We deliver reliable, efficient, and end-to-end solutions designed to support your specific requirements with utmost commitment.",
        list: {
          contract: {
            title: "Contract Micronization",
            desc: "Precision particle size reduction of APIs, excipients, and pharmaceutical powders using advanced spiral jet mill technology. We achieve consistent, reproducible results from sub-micron to coarse particle ranges.",
            features: ["Spiral jet milling", "Sub-micron capability", "Batch & continuous processing"]
          },
          api: {
            title: "API Processing",
            desc: "Specialized processing of active pharmaceutical ingredients with full FDA compliance. Our clean room facilities ensure zero cross-contamination and complete batch traceability.",
            features: ["FDA-compliant processing", "Clean room technology", "Full traceability"]
          },
          analysis: {
            title: "Particle Size Analysis",
            desc: "Comprehensive particle size testing and analysis using MALVERN instruments. We provide detailed PSD reports to ensure your product meets exact specifications.",
            features: ["MALVERN instrumentation", "PSD reports", "D10, D50, D90 analysis"]
          },
          rnd: {
            title: "R&D Support",
            desc: "From small quantity trials (as low as 0.20 grams) to full-scale production runs (up to 50 metric tons), we support your R&D journey and help reduce your time-to-market.",
            features: ["Small batch trials", "Scale-up support", "Fast turnaround"]
          },
          nitrogen: {
            title: "Nitrogen Milling",
            desc: "Inert atmosphere milling using nitrogen for oxygen-sensitive, moisture-sensitive, or thermolabile pharmaceutical compounds. Zero degradation guaranteed.",
            features: ["Inert atmosphere", "Moisture-free", "Temperature controlled"]
          },
          qa: {
            title: "Quality Assurance",
            desc: "End-to-end quality management compliant with cGMP documentation standards. Every batch undergoes rigorous quality checks with cleaning validation as per SOP.",
            features: ["cGMP compliance", "Cleaning validation as per SOP", "Quality documentation"]
          }
        },
        processLabel: "Our Process",
        processTitle: "How we <span class=\"red\">work</span>",
        steps: {
          step1: {
            title: "Inquiry & Consultation",
            desc: "Share your requirements — material type, target particle size, and batch volume. Our technical team reviews feasibility."
          },
          step2: {
            title: "Trial & Feasibility",
            desc: "We conduct small-scale trial runs to establish optimal milling parameters and validate your target PSD."
          },
          step3: {
            title: "Production Run",
            desc: "Full-scale micronization with real-time quality monitoring, environmental controls, and complete batch documentation."
          },
          step4: {
            title: "QC & Delivery",
            desc: "Rigorous quality checks with MALVERN PSD analysis, cleaning validation as per SOP, and secure packaging for delivery."
          }
        },
        ready: "Ready to <span class=\"red\">get started?</span>",
        readyLead: "Contact our technical team to discuss your micronization requirements, request a feasibility trial, or get a quote.",
        emailUs: "Email Us Directly"
      },
      contactPage: {
        label: "Contact Us",
        title: "Let's <span class=\"red\">connect</span>",
        lead: "Reach out to our technical team to discuss your micronization needs, request a feasibility trial, or schedule a facility tour.",
        sendLabel: "Send a Message",
        sendTitle: "Get in <span class=\"red\">touch</span>",
        fields: {
          name: "Full Name",
          namePl: "Your full name",
          email: "Email Address",
          emailPl: "your@email.com",
          subject: "Subject",
          subjectPl: "Select a subject",
          subjects: {
            quote: "Contract Micronization Quote",
            trial: "Feasibility Trial Request",
            tour: "Facility Tour",
            rnd: "R&D Consultation",
            general: "General Inquiry"
          },
          message: "Message",
          messagePl: "Tell us about your requirements...",
          sending: "Opening Email Client…",
          sendBtn: "Send Message"
        },
        info: {
          email: "Email",
          persons: "Contact Persons",
          office: "Office & Works",
          responseTime: "Response Time",
          responseLead: "We respond to all valuable inquiries within 24 hours."
        }
      },
      facilitiesPage: {
        label: "Our Facilities",
        title: "World-Class <span class=\"red\">Manufacturing</span> Units",
        lead: "State-of-the-art micronization plants located at Ankleshwar and Panoli in Gujarat, equipped with advanced FDA-compliant machinery.",
        ankleshwar: {
          label: "Ankleshwar Unit",
          title: "Dedicated <span class=\"red\">Micronization</span> Hub",
          desc: "Our Ankleshwar facility is a highly specialized plant focused on precision micronization with a dedicated and experienced team of professionals.",
          feature1: "4 Dedicated Air Jet Mills",
          feature2: "Dedicated operational staff and technical team"
        },
        panoli1: {
          label: "Panoli Unit · Plant 1",
          title: "Pharmaceutical <span class=\"red\">Excellence</span>",
          desc: "Plant 1 in Panoli is our primary pharmaceutical manufacturing hub, designed specifically for FDA-compliant API processing.",
          feature1: "10 Dedicated Air Jet Mills for Pharma",
          feature2: "Dedicated pharmaceutical operational staff"
        },
        panoli2: {
          label: "Panoli Unit · Plant 2",
          title: "Chemical & <span class=\"red\">Specialty</span> Processing",
          desc: "Plant 2 is tailored for robust industrial processing, handling chemicals and speciality chemicals with high throughput capacity.",
          feature1: "7 Heavy-duty Air Jet Mills",
          feature2: "4 Advanced Air Classifier Mills",
          feature3: "Dedicated specialty chemical processing staff"
        }
      }
    }
  },
  gu: {
    translation: {
      servicesGrid: {
        label: "અમારી ક્ષમતાઓ",
        title: "વ્યાપક <em>પ્રોસેસિંગ</em> સોલ્યુશન્સ",
        micronization: {
          title: "માઇક્રોનાઇઝેશન",
          desc: "APIs અને એક્સિપિયન્ટ્સ માટે અદ્યતન એર જેટ મિલિંગનો ઉપયોગ કરીને અલ્ટ્રા-ફાઇન કણોમાં ઘટાડો."
        },
        milling: {
          title: "મિકેનિકલ મિલિંગ",
          desc: "મજબૂત અને સુસંગત કણોના કદના વિતરણ માટે ઉચ્ચ-અસરકારક સાઇઝિંગ અને ગ્રાન્યુલેશન."
        },
        sieving: {
          title: "ચાળવું અને વર્ગીકરણ",
          desc: "ઉત્પાદનની એકરૂપતા સુનિશ્ચિત કરવા માટે ગતિશીલ વિભાજન અને સખત ટોપ-સાઇઝ નિયંત્રણ."
        },
        analysis: {
          title: "વિશ્લેષણાત્મક સેવાઓ",
          desc: "ગુણવત્તા ચકાસવા માટે અત્યાધુનિક લેસર ડિફ્રેક્શન અને ભૌતિક લાક્ષણિકતા."
        },
        learnMore: "વધુ જાણો"
      },
      scaleTimeline: {
        label: "એન્ડ-ટુ-એન્ડ સ્કેલેબિલિટી",
        title: "R&D થી <em>કોમર્શિયલ</em> સપ્લાય સુધી",
        rnd: {
          title: "લેબ / R&D સ્કેલ",
          desc: "ફિઝિબિલિટી અભ્યાસ, નાના બેચ ટ્રાયલ્સ અને ચોક્કસ પ્રક્રિયા વિકાસ."
        },
        pilot: {
          title: "પાયલોટ સ્કેલ",
          desc: "પ્રક્રિયા ઑપ્ટિમાઇઝેશન, ક્લિનિકલ ટ્રાયલ સામગ્રી અને સ્કેલેબલ એન્જિનિયરિંગ રન."
        },
        commercial: {
          title: "વ્યાપારી ઉત્પાદન",
          desc: "સખત cGMP પ્રોટોકોલ હેઠળ ઉચ્ચ-ક્ષમતા ધરાવતું મલ્ટિ-ટન ઉત્પાદન."
        }
      },
      industries: {
        label: "અમે સેવા આપીએ છીએ તે ઉદ્યોગો",
        title: "<em>દરેક ક્ષેત્ર</em> માટે અનુકૂલિત સોલ્યુશન્સ",
        pharma: {
          title: "ફાર્માસ્યુટિકલ્સ",
          desc: "સખત cGMP પાલન સાથે નબળી દ્રાવ્ય APIs ની બાયોએવેલેબિલિટી વધારવી."
        },
        food: {
          title: "ખોરાક અને પોષણ",
          desc: "પૂરક, કાર્યાત્મક ખોરાક અને સંવેદનશીલ ન્યુટ્રાસ્યુટિકલ્સ માટે ચોક્કસ મિલિંગ."
        },
        cosmetics: {
          title: "કોસ્મેટિક્સ",
          desc: "પ્રીમિયમ સૌંદર્ય ઉત્પાદનો માટે વૈભવી ટેક્સચર અને સમાન વિક્ષેપ પ્રાપ્ત કરવો."
        },
        chemical: {
          title: "સ્પેશિયાલિટી કેમિકલ્સ",
          desc: "અદ્યતન સામગ્રી, ઉત્પ્રેરક અને એન્જિનિયર્ડ પોલિમર માટે કસ્ટમ કદ ઘટાડો."
        }
      },

      serviceMicronization: {
        label: "માઇક્રોનાઇઝેશન સેવાઓ",
        title: "ચોકસાઇ માઇક્રોનાઇઝેશન",
        lead: "અમારી અદ્યતન માઇક્રોનાઇઝેશન પ્રક્રિયાઓ સક્રિય ફાર્માસ્યુટિકલ ઘટકોના ભૌતિક અને રાસાયણિક ગુણધર્મોને નાટકીય રીતે બદલી નાખે છે.",
        co: {
          label: "વિશિષ્ટ પ્રક્રિયા",
          title: "કો-માઇક્રોનાઇઝેશન",
          desc: "કો-માઇક્રોનાઇઝેશનમાં બહુવિધ સક્રિય ઘટકો અથવા એક્સિપિયન્ટ્સનું એકસાથે મિલિંગ શામેલ છે. આ ઘનિષ્ઠ, સૂક્ષ્મ-સ્કેલ સમાન મિશ્રણની ખાતરી કરે છે."
        },
        cryo: {
          label: "તાપમાન નિયંત્રિત",
          title: "ક્રાયો માઇક્રોનાઇઝેશન",
          desc: "અત્યંત ગરમી-સંવેદનશીલ સંયોજનો માટે, અમારી ક્રાયો-માઇક્રોનાઇઝેશન પ્રક્રિયા પ્રવાહી નાઇટ્રોજન કૂલિંગનો ઉપયોગ કરે છે."
        },
        airjet: {
          label: "અલ્ટ્રા-ફાઇન ઘટાડો",
          title: "એર જેટ માઇક્રોનાઇઝેશન",
          desc: "કોમ્પ્રેસ્ડ ગેસનો ઉપયોગ કરીને, કણો પર કણોની અથડામણ મિલિંગ મીડિયાના ઉપયોગ વિના સક્રિય ઘટકના કદને ઘટાડે છે.",
          feature1: "મિલિંગ ઝોનમાં કોઈ ફરતા ભાગો નથી",
          feature2: "તેલ મુક્ત, ફિલ્ટર કરેલ પ્રક્રિયા હવા"
        }
      },
      serviceMilling: {
        label: "મિલિંગ સેવાઓ",
        title: "ઔદ્યોગિક મિલિંગ સોલ્યુશન્સ",
        lead: "અમારી બહુમુખી મિલિંગ ક્ષમતાઓ સામગ્રીની વિશાળ શ્રેણી પર પ્રક્રિયા કરે છે.",
        multi: {
          label: "ચલ ગતિ ગ્રાન્યુલેશન",
          title: "મલ્ટી મિલ",
          desc: "મલ્ટી મિલિંગ શ્રેષ્ઠ ગ્રાન્યુલેશન પ્રાપ્ત કરવા માટે ચલ બળનો ઉપયોગ કરે છે. તે ભીના અને સૂકા બંને ગ્રાન્યુલેશન માટે અત્યંત લવચીક છે.",
          feature1: "ક્રાયોજેનિક શુદ્ધિકરણ ઉપલબ્ધ",
          feature2: "પ્રમાણભૂત મિલિંગ",
          feature3: "કો-મિલિંગ એકીકરણ"
        },
        hammer: {
          label: "હાઇ ઇમ્પેક્ટ ક્રશિંગ",
          title: "હેમર મિલ",
          desc: "અમારી હેમર મિલો સખત, સ્ફટિકીય અથવા બરડ સામગ્રીને કચડી નાખવા માટે ઉચ્ચ-વેગવાળા ફરતા હેમરનો ઉપયોગ કરે છે.",
          feature1: "ક્રાયોજેનિક શુદ્ધિકરણ ઉપલબ્ધ",
          feature2: "પ્રમાણભૂત મિલિંગ",
          feature3: "કો-મિલિંગ એકીકરણ"
        },
        techniques: {
          title: "અદ્યતન તકનીકો"
        },
        tech: {
          cryo: {
            title: "ક્રાયોજેનિક શુદ્ધિકરણ",
            desc: "મિલિંગ વાતાવરણને અત્યંત ઠંડુ રાખવા માટે પ્રવાહી નાઇટ્રોજનનો ઉપયોગ કરવો."
          },
          standard: {
            title: "પ્રમાણભૂત મિલિંગ",
            desc: "ઝડપથી પ્રમાણિત પાવડર બનાવવા માટે કાર્યક્ષમ હવાના પ્રવાહ અને યાંત્રિક ડિઝાઇન પર આધારિત."
          },
          comill: {
            title: "કો-મિલિંગ",
            desc: "સંપૂર્ણ સમાન મિશ્રણ પ્રાપ્ત કરવા માટે મિલિંગ ચેમ્બરમાં સીધા જ બહુવિધ પદાર્થોનું એકસાથે મિલિંગ."
          }
        }
      },
      serviceSieving: {
        label: "ચાળવું અને વર્ગીકરણ",
        title: "ચોક્કસ કણોનું વર્ગીકરણ",
        lead: "ચોક્કસ કણોના કદનું વિતરણ સુનિશ્ચિત કરવું મહત્વપૂર્ણ છે.",
        ultrafine: {
          label: "ઉચ્ચ ચોકસાઇ",
          title: "અલ્ટ્રા ફાઇન ગ્રાઇન્ડીંગ મિલ",
          desc: "આંતરિક ચાળવાની પદ્ધતિઓ સાથે જોડાયેલ, અમારી અલ્ટ્રા-ફાઇન ગ્રાઇન્ડીંગ મિલો અત્યંત કડક કણોના કદના વિતરણને પ્રાપ્ત કરે છે."
        },
        airclass: {
          label: "ગતિશીલ વિભાજન",
          title: "એર ક્લાસિફાયર મિલ",
          desc: "એર ક્લાસિફાયર્સ ગતિશીલ વમળ બનાવવા માટે કેન્દ્રત્યાગી બળ અને હવાના પ્રવાહોનો ઉપયોગ કરે છે.",
          feature1: "સતત ગતિશીલ વર્ગીકરણ",
          feature2: "કડક ટોપ-સાઇઝ નિયંત્રણ"
        }
      },
      serviceAnalysis: {
        label: "વિશ્લેષણ અને ગુણવત્તા ખાતરી",
        title: "વ્યાપક કણોનું વિશ્લેષણ",
        lead: "ઉચ્ચ ગુણવત્તા અને ચોક્કસ વિશિષ્ટતાઓની બાંયધરી આપવા માટે, દરેક બેચ કડક વિશ્લેષણાત્મક ચકાસણીમાંથી પસાર થાય છે.",
        laser: {
          label: "લેસર વિવર્તન",
          title: "ડ્રાય અને વેટ મોડ્સ",
          desc: "ઉદ્યોગ-માનક માલ્વર્ન માસ્ટરસાઇઝર સાધનોનો ઉપયોગ કરીને, અમે સંપૂર્ણ કણોના કદના વિતરણને માપીએ છીએ.",
          feature1: "સબ-માઇક્રોન સ્તરની ચોકસાઈ",
          feature2: "સ્વચાલિત વિક્ષેપ એકમો"
        },
        physical: {
          title: "ભૌતિક લાક્ષણિકતા"
        },
        tech: {
          sieve: {
            title: "ચાળણી વિશ્લેષણ",
            desc: "બરછટ સામગ્રીના દાણાદાર કદના વિતરણને નિર્ધારિત કરવા માટે પરંપરાગત અને વિશ્વસનીય ભૌતિક સ્ક્રિનિંગ."
          },
          density: {
            title: "બલ્ક અને ટેપ ઘનતા",
            desc: "પાવડરની પ્રવાહક્ષમતા, સંકોચનક્ષમતા અને પેકેજિંગ આવશ્યકતાઓનું મૂલ્યાંકન કરતા જટિલ માપન."
          }
        }
      },

      nav: {
        home: "હોમ",
        about: "અમારા વિશે",
        services: "સેવાઓ",
        facilities: "સુવિધાઓ",
        contact: "સંપર્ક",
        contactUs: "અમારો સંપર્ક કરો",
        homeOverview: "હોમ ઝાંખી",
        powders: "પાવડર",
        particleSize: "કણોનું કદ",
        technology: "ટેકનોલોજી",
        benefits: "ફાયદાઓ",
        process: "પ્રક્રિયા",
        aboutOverview: "અમારા વિશે ઝાંખી",
        atAGlance: "એક નજરમાં",
        features: "વિશેષતાઓ",
        ourCompany: "અમારી કંપની",
        facilitiesOverview: "સુવિધાઓ ઝાંખી",
        ankleshwarUnit: "અંકલેશ્વર યુનિટ",
        panoliPlant1: "પાનોલી પ્લાન્ટ ૧",
        panoliPlant2: "પાનોલી પ્લાન્ટ ૨",
        servicesOverview: "સેવાઓ ઝાંખી",
        micronization: "માઇક્રોનાઇઝેશન",
        coMicronization: "કો-માઇક્રોનાઇઝેશન",
        cryoMicronization: "ક્રાયો-માઇક્રોનાઇઝેશન",
        airJetMicronization: "એર જેટ માઇક્રોનાઇઝેશન",
        milling: "મિલિંગ",
        multiMill: "મલ્ટી મિલ",
        cryogenicPurging: "ક્રાયોજેનિક શુદ્ધિકરણ",
        standardMilling: "પ્રમાણભૂત મિલિંગ",
        coMilling: "કો-મિલિંગ",
        hammerMill: "હેમર મિલ",
        sievingClassification: "ચાળવું / વર્ગીકરણ",
        ultraFineGrindingMill: "અલ્ટ્રા ફાઇન ગ્રાઇન્ડીંગ મિલ",
        airClassifierMill: "એર ક્લાસિફાયર મિલ",
        analysis: "વિશ્લેષણ",
        dryAndWetModes: "ડ્રાય અને વેટ મોડ્સ",
        sieveAnalysis: "ચાળણી વિશ્લેષણ",
        bulkDensityTapDensity: "બલ્ક અને ટેપ ઘનતા",
        contactOverview: "સંપર્ક ઝાંખી",
        contactDetails: "સંપર્ક વિગતો"
      },
      hero: {
        eyebrow: "માઇક્રોટેક ઇન્ડિયા · તમારી વિશ્વાસુ સ્વતંત્ર CMO",
        title: "તમારો M<span class=\"exclaim\">!</span>cro પાર્ટનર<br /><span class=\"red\">માઇક્રોનાઇઝેશન</span> વર્ક માટે<br />APIs, ફાર્માસ્યુટિકલ્સ,<br />કેમિકલ્સ.",
        lead: "માઇક્રોટેક (ઇન્ડિયા) એ API અને બલ્ક ડ્રગ્સ માટે માઇક્રોનાઇઝેશન સેવા પ્રદાતા તરીકે સૌથી વધુ વિશ્વસનીય કંપની છે. ગુજરાત, ભારતમાં અંકલેશ્વર અને પાનોલી (એશિયાનો સૌથી મોટો ઔદ્યોગિક વિસ્તાર) ખાતે આવેલી આ સુવિધાઓ 7000 ચોરસ ફૂટથી વધુ જગ્યા સાથે માન્ય FDA ધોરણો ધરાવે છે. અમારી ટીમ અમારી પ્રદાન કરેલી સેવાઓમાં ૨ દાયકાથી વધુનો અનુભવ ધરાવે છે.",
        ctaContact: "અમારો સંપર્ક કરો",
        ctaMesh: "મેશ કદ જુઓ",
        fda: "FDA મંજૂર સુવિધા",
        sqft: "ચોરસ ફૂટ સુવિધા",
        years: "અનુભવ",
        cgmp: "માનક પદ્ધતિઓ"
      },
      showcase: {
        label: "દ્રશ્ય પ્રદર્શન",
        title: "માઇક્રોનાઇઝેશનની <span class=\"red\">અસર</span>",
        lead: "જુઓ કે કેવી રીતે આપણી ચોક્કસ કણોના કદમાં ઘટાડો કરવાની પદ્ધતિ બરછટ એક્ટિવ ફાર્માસ્યુટિકલ ઘટકોને અત્યંત ઝીણા પાવડરમાં ફેરવે છે.",
        coarse: "બરછટ કણ (કોર્સ પાર્ટિકલ)",
        fine: "માઇક્રોનાઇઝ્ડ પાવડર",
        materials: {
          white: "સફેદ સ્ફટિકીય API",
          white2: "અલ્ટ્રા-ફાઇન સફેદ API",
          yellow: "પીળો એક્સિપિયન્ટ",
          brown: "બ્રાઉન હર્બલ પાવડર",
          cream: "ક્રીમ API પાવડર",
          grey: "ગ્રે મિનરલ કમ્પાઉન્ડ"
        }
      },
      particleSize: {
        label: "તુલનાત્મક કણોનું કદ",
        title: "સ્ટાન્ડર્ડ યુએસ મેશ <span class=\"red\">કન્વર્ઝન</span> ચાર્ટ",
        lead: "નીચે આપણી માઇક્રોનાઇઝેશન પ્રક્રિયાઓમાં ઉપયોગમાં લેવાતા પ્રમાણભૂત કણોના કદના રૂપાંતરણ માટેનું સંદર્ભ કોષ્ટક છે.",
        table: {
          mesh: "યુએસ મેશ",
          microns: "માઇક્રોન્સ (µm)",
          inches: "ઇંચ",
          visual: "સાપેક્ષ કદ"
        }
      },
      features: {
        label: "કણોનું કદ શા માટે મહત્વનું છે",
        title: "<span class=\"red\">બાયોએવેલેબિલિટી</span> અને કાર્યક્ષમતા વધારવી",
        desc: "કણોના કદમાં ઘટાડો એ આધુનિક ફાર્માસ્યુટિકલ્સના નિર્માણનું એક મહત્વપૂર્ણ પગલું છે. કણોના કદને માઇક્રોન સ્તર સુધી ઘટાડીને, અમે તમારા સક્રિય ઘટકોના ભૌતિક અને રાસાયણિક ગુણધર્મોને મોટા પ્રમાણમાં બદલીએ છીએ.",
        items: {
          bio: {
            title: "ઉન્નત બાયોએવેલેબિલિટી",
            desc: "નાના કણો એટલે સપાટીથી કદનો નોંધપાત્ર પ્રમાણ ઊંચો ગુણોત્તર, જેના પરિણામે શરીરમાં ઝડપથી ઓગળવાની પ્રક્રિયા અને સુધારેલ શોષણ થાય છે."
          },
          uniformity: {
            title: "આદર્શ મિશ્રણ સમાનતા",
            desc: "એક્સિપિયન્ટ્સ સાથે સુસંગત મિશ્રણ મેળવો. કદનું વિભાજન દૂર કરવાથી એ સુનિશ્ચિત થાય છે કે દરેક ડોઝમાં સક્રિય ઘટકોનું ચોક્કસ પ્રમાણ જળવાય."
          },
          delivery: {
            title: "અદ્યતન દવા વિતરણ",
            desc: "ઇન્હેલેશન, ઓપ્થેલ્મિક અને ઇન્જેક્ટેબલ ફોર્મ્યુલેશન માટે અત્યંત મહત્વપૂર્ણ. કણોના વિતરણ પર ચોક્કસ નિયંત્રણ શ્વસન માર્ગ અથવા સંવેદનશીલ પેશીઓ સુધી લક્ષિત વિતરણની મંજૂરી આપે છે."
          }
        }
      },
      benefits: {
        label: "તકનીકી ફાયદા",
        title: "અત્યાધુનિક <span class=\"red\">સ્પાયરલ જેટ મિલ</span> ટેકનોલોજી",
        desc: "અમારી પ્રક્રિયા અદ્યતન ફ્લુઇડ એનર્જી જેટ મિલ્સનો ઉપયોગ કરે છે, જેમાં હાઇ-વેલોસિટી કોમ્પ્રેસ્ડ એર અથવા નાઇટ્રોજન ગેસ સ્ટ્રીમ્સનો ઉપયોગ કણોને એકબીજા સાથે અથડાવવા માટે થાય છે.",
        items: {
          noHeat: {
            title: "ગરમીથી બગાડ નહિ",
            desc: "પ્રવાહીના વિસ્તરણથી ઠંડકની અસર થાય છે. ગરમીથી બગડી શકે તેવા કાર્બનિક પદાર્થો માટે આદર્શ."
          },
          noContam: {
            title: "શૂન્ય ધાતુ પ્રદૂષણ",
            desc: "કોઈ યાંત્રિક ગ્રાઇન્ડીંગ મીડિયા અથવા હલનચલન કરતા ભાગો નથી. કણ-થી-કણ અથડામણ અતિશય શુદ્ધતાની ખાતરી આપે છે."
          },
          narrow: {
            title: "સાંકડું કણોનું વિતરણ",
            desc: "અદ્યતન વર્ગીકરણ નિયંત્રણો મોટા કદના અનાજ વગર સમાન કણોનું વિતરણ સુનિશ્ચિત કરે છે."
          }
        }
      },
      process: {
        label: "અમારા ઓપરેશનલ ધોરણો",
        title: "ગુણવત્તા <span class=\"red\">સુનિશ્ચિત</span> કામગીરી",
        desc: "બધી પ્રક્રિયાઓ સુરક્ષિત રીતે, અસરકારક રીતે ચાલે અને વૈશ્વિક ધોરણોને પૂર્ણ કરે તે સુનિશ્ચિત કરવા માટે અમે કડક માર્ગદર્શિકાનું પાલન કરીએ છીએ.",
        items: {
          traceability: {
            title: "બેચ ટ્રેસેબિલિટી",
            desc: "પ્રક્રિયા કરેલા દરેક એક ગ્રામની સંપૂર્ણ ટ્રેસેબિલિટી, તમામ પરિમાણો અને પર્યાવરણના દસ્તાવેજીકરણ સાથે."
          },
          room: {
            title: "વર્ગીકૃત ક્લીનરૂમ્સ",
            desc: "બાહ્ય પ્રદૂષણને સંપૂર્ણપણે રોકવા માટે પોઝિટિવ-પ્રેશર ISO-ક્લાસિફાઇડ રૂમમાં પ્રક્રિયા ચલાવવામાં આવે છે."
          },
          malvern: {
            title: "માલવર્ન લેઝર વિશ્લેષણ",
            desc: "સંપૂર્ણ ચકાસણી માટે અત્યાધુનિક માલવર્ન માસ્ટરસાઈઝર સાધનોનો ઉપયોગ કરીને દરેક બેચની ચકાસણી કરવામાં આવે છે."
          }
        }
      },
      contactSec: {
        label: "અમારી સાથે ભાગીદારી કરો",
        title: "તમારા <span class=\"red\">પ્રોજેક્ટ</span> વિશે ચર્ચા કરો",
        lead: "તમારે નાના ૧૦ ગ્રામના ટ્રાયલની જરૂર હોય કે મોટા જથ્થાના વ્યાપારી ઉત્પાદનની, અમારી ઇજનેરી ટીમ તમને મદદ કરવા તૈયાર છે.",
        cta: "અમારા એન્જિનિયર્સનો સંપર્ક કરો",
        quick: "ઝડપી સંપર્ક",
        response: "અમે ૨૪ કલાકની અંદર તમામ તકનીકી પૂછપરછનો જવાબ આપીએ છીએ.",
        persons: "સંપર્ક વ્યક્તિઓ"
      },
      footer: {
        rights: "સર્વાધિકાર સુરક્ષિત.",
        designed: "ફાર્માસ્યુટિકલ ઉત્કૃષ્ટતા માટે ચોકસાઇ સાથે રચાયેલ."
      },
      aboutPage: {
        label: "માઇક્રોટેક ઇન્ડિયા વિશે",
        title: "૨ દાયકાની <span class=\"red\">ફાર્માસ્યુટિકલ</span> ઉત્કૃષ્ટતા",
        lead: "ચોક્કસ માઇક્રોનાઇઝેશન માટે સમર્પિત કૌટુંબિક માલિકીની કોન્ટ્રાક્ટ મેન્યુફેક્ચરિંગ ઓર્ગેનાઇઝેશન.",
        whoLabel: "એક નજરમાં",
        whoTitle: "આપણે <span class=\"red\">કોણ</span> છીએ",
        whoLead: "માઇક્રોટેક ઇન્ડિયા એ ફાર્માસ્યુટિકલ સામગ્રીના મિલિંગ અને માઇક્રોનાઇઝિંગમાં ૨ દાયકાનો અનુભવ ધરાવતી કૌટુંબિક માલિકીની, સ્વતંત્ર કોન્ટ્રાક્ટ મેન્યુફેક્ચરિંગ ઓર્ગેનાઇઝેશન (CMO) છે. અમે વર્તમાન FDA ધોરણો સાથે સંપૂર્ણ સુસંગત રહીને એક્ટિવ ફાર્માસ્યુટિકલ ઘટકો (APIs), એક્સિપિયન્ટ્સ અને અન્ય પાવડર પદાર્થો પર પ્રક્રિયા કરીએ છીએ. અમારી આધુનિક સુવિધાઓ અને લાંબા ગાળાનો અનુભવ અમને અમારા ગ્રાહકોને સચોટ, ઉચ્ચ ગુણવત્તાવાળા અને વિશ્વસનીય ઉકેલો પહોંચાડવા સક્ષમ બનાવે છે.",
        cardExp: "દાયકાનો અનુભવ",
        cardFDA: "સુસંગત સુવિધા",
        cardGMP: "માનક પદ્ધતિઓ",
        cardCMO: "કોન્ટ્રાક્ટ મેન્યુફેક્ચરિંગ",
        capLabel: "ક્ષમતાઓ",
        capTitle: "અમારી <span class=\"red\">ક્ષમતાઓ</span>",
        caps: {
          particle: {
            title: "કોપણ કણોની શ્રેણી",
            desc: "તેલ અને ભેજ મુક્ત ઉચ્ચ દબાણવાળી ફિલ્ટર કરેલી હવા સાથે સરેરાશ કણોનું કદ કોઈપણ શ્રેણીમાં માઇક્રોન."
          },
          nitrogen: {
            title: "નાઇટ્રોજન ઉપલબ્ધ",
            desc: "હવા પ્રત્યે સંવેદનશીલ ઉત્પાદનો માટે નાઇટ્રોજન પણ ઉપલબ્ધ છે."
          },
          ambient: {
            title: "એમ્બિયન્ટ પ્રક્રિયા",
            desc: "નવીનતમ તકનીકો સાથે એમ્બિયન્ટ પ્રક્રિયા."
          },
          parts: {
            title: "કોઈ ફરતા ભાગો નથી",
            desc: "કોઈ ફરતા ભાગો વગરની સ્થિર ગ્રાઇન્ડીંગ ચેમ્બર."
          },
          throughput: {
            title: "પુનરાવર્તિત અને ઉચ્ચ થ્રુપુટ",
            desc: "પુનરાવર્તિત અને ઉચ્ચ થ્રુપુટ પ્રક્રિયા."
          }
        },
        whyLabel: "લાભો",
        whyTitle: "શા માટે <span class=\"red\">માઇક્રોટેક</span> પસંદ કરો",
        benefits: {
          bio: {
            title: "સુધારેલી જૈવઉપલબ્ધતા",
            desc: "નબળા દ્રાવ્ય API ની સુધારેલી જૈવઉપલબ્ધતા અને વિસર્જન.",
            tag: "દ્રાવ્યતા"
          },
          heat: {
            title: "ગરમીથી બગાડ નહિ",
            desc: "મિલ્ડ કરવામાં આવતા પાવડર માટે કોઈ ગરમીનું બગાડ થતું નથી.",
            tag: "થર્મોલેબાઇલ"
          },
          contam: {
            title: "ઓછું પ્રદૂષણ જોખમ",
            desc: "ધાતુના પ્રદૂષણનું ઓછું જોખમ.",
            tag: "શુદ્ધતા"
          },
          cost: {
            title: "ખર્ચ અસરકારક મિલિંગ",
            desc: "ઉચ્ચ ગુણવત્તાવાળી, ખર્ચ અસરકારક મિલિંગ પદ્ધતિ.",
            tag: "કાર્યક્ષમતા"
          },
          air: {
            title: "સ્વચ્છ હવા પ્રક્રિયા",
            desc: "તેલ અને ભેજ મુક્ત ઉચ્ચ દબાણવાળી હવા અને સંવેદનશીલ ઉત્પાદનો માટે નાઇટ્રોજન.",
            tag: "સ્વચ્છ હવા"
          }
        },
        companyLabel: "અમારી કંપની",
        companyTitle: "ઝડપથી વિકસતી <span class=\"red\">ફાર્મા</span> કંપની",
        companyLead: "અમે તમારા નાના જથ્થા (૧૦ ગ્રામ) થી લઈ મોટા જથ્થાના રૂટિન પ્રોડક્શન માટે સુસંગત, વિશ્વસનીય અને ખર્ચ-અસરકારક કોન્ટ્રાક્ટ માઇક્રોનાઇઝેશન સેવાઓ પ્રદાન કરીએ છીએ. અમે તમારા આર એન્ડ ડી પ્રોજેક્ટ્સ માટે \"માર્કેટ સુધીનો સમય\" ઘટાડવામાં મદદ કરીશું.",
        highlights: {
          batch: "નાનીથી મોટી બેચ પ્રોસેસિંગ",
          timeline: "ઝડપી આર એન્ડ ડી સમયરેખા",
          fda: "FDA મંજૂર સુવિધાઓ",
          trace: "સંપૂર્ણ બેચ ટ્રેસેબિલિટી"
        },
        partner: "અમારી સાથે જોડાઓ"
      },
      servicesPage: {
        label: "અમે શું ઓફર કરીએ છીએ",
        title: "અતુટ <span class=\"red\">પ્રતિબદ્ધતા</span> સાથે સંપૂર્ણ સેવાઓ",
        lead: "અમે ગુણવત્તા અને ચોકસાઇ પ્રત્યે સતત અને ઝડપી સમર્પણ દ્વારા સમર્થિત, બધી માઇક્રોનાઇઝેશન આવશ્યકતાઓ માટે વ્યાપક, સિંગલ-સોર્સ સોલ્યુશન પ્રદાન કરીએ છીએ.",
        gridLabel: "અમારી સેવાઓ",
        gridTitle: "સંપૂર્ણ <span class=\"red\">ઉકેલો</span>",
        gridLead: "અમારી કુશળતા વિવિધ ઉદ્યોગોમાં ફેલાયેલી છે, જે ઉચ્ચતમ ધોરણોને પૂર્ણ કરતી અનુરૂપ સેવાઓની ખાતરી આપે છે. અમે તમારી વિશિષ્ટ આવશ્યકતાઓને ટેકો આપવા માટે રચાયેલ વિશ્વસનીય, કાર્યક્ષમ અને સંપૂર્ણ ઉકેલો પ્રદાન કરીએ છીએ.",
        list: {
          contract: {
            title: "કોન્ટ્રાક્ટ માઇક્રોનાઇઝેશન",
            desc: "અદ્યતન સ્પાયરલ જેટ મિલ ટેકનોલોજીનો ઉપયોગ કરીને API, એક્સિપિયન્ટ્સ અને ફાર્માસ્યુટિકલ પાવડરના કણોના કદમાં ચોક્કસ ઘટાડો. અમે સબ-માઇક્રોનથી બરછટ કણોની શ્રેણી સુધી સુસંગત પરિણામો પ્રાપ્ત કરીએ છીએ.",
            features: ["સ્પાયરલ જેટ મિલિંગ", "સબ-માઇક્રોન ક્ષમતા", "બેચ અને સતત પ્રક્રિયા"]
          },
          api: {
            title: "API પ્રોસેસિંગ",
            desc: "સંપૂર્ણ FDA પાલન સાથે સક્રિય ફાર્માસ્યુટિકલ ઘટકોની વિશિષ્ટ પ્રક્રિયા. અમારા ક્લીન રૂમ શૂન્ય ક્રોસ-પ્રદૂષણ અને સંપૂર્ણ બેચ ટ્રેસેબિલિટીની ખાતરી આપે છે.",
            features: ["FDA-સુસંગત પ્રોસેસિંગ", "ક્લીન રૂમ ટેકનોલોજી", "સંપૂર્ણ ટ્રેસેબિલિટી"]
          },
          analysis: {
            title: "કણોના કદનું વિશ્લેષણ",
            desc: "માલવર્ન સાધનોનો ઉપયોગ કરીને વ્યાપક કણોના કદનું પરીક્ષણ અને વિશ્લેષણ. તમારું ઉત્પાદન ચોક્કસ વિશિષ્ટતાઓને પૂર્ણ કરે છે તેની ખાતરી કરવા માટે અમે વિગતવાર PSD અહેવાલો પ્રદાન કરીએ છીએ.",
            features: ["માલવર્ન ઇન્સ્ટ્રુમેન્ટેશન", "PSD અહેવાલો", "D10, D50, D90 વિશ્લેષણ"]
          },
          rnd: {
            title: "આર એન્ડ ડી સપોર્ટ",
            desc: "નાના જથ્થાના અજમાયશથી (૧૦ ગ્રામ જેટલા ઓછા) થી મોટા પાયે ઉત્પાદન સુધી, અમે તમારી આર એન્ડ ડી યાત્રાને ટેકો આપીએ છીએ અને બજારમાં તમારો સમય ઘટાડવામાં મદદ કરીએ છીએ.",
            features: ["નાની બેચ ટ્રાયલ્સ", "સ્કેલ-અપ સપોર્ટ", "ઝડપી ટર્નઅરાઉન્ડ"]
          },
          nitrogen: {
            title: "નાઇટ્રોજન મિલિંગ",
            desc: "ઓક્સિજન-સંવેદનશીલ, ભેજ-સંવેદનશીલ અથવા થર્મોલેબાઇલ ફાર્માસ્યુટિકલ સંયોજનો માટે નાઇટ્રોજનનો ઉપયોગ કરીને નિષ્ક્રિય વાતાવરણ મિલિંગ. શૂન્ય બગાડની ખાતરી.",
            features: ["નિષ્ક્રિય વાતાવરણ", "ભેજ-મુક્ત", "તાપમાન નિયંત્રિત"]
          },
          qa: {
            title: "ગુણવત્તા ખાતરી",
            desc: "cGMP દસ્તાવેજીકરણ ધોરણોને સુસંગત એન્ડ-ટુ-એન્ડ ગુણવत्ता વ્યવસ્થાપન. સફાઈ વેરિફિકેશન પ્રોટોકોલ સાથે દરેક બેચ કડક ગુણવત્તા તપાસમાંથી પસાર થાય છે.",
            features: ["cGMP પાલન", "સફાઈ ચકાસણી", "ગુણવત્તા દસ્તાવેજીકરણ"]
          }
        },
        processLabel: "અમારી પ્રક્રિયા",
        processTitle: "આપણે કેવી રીતે <span class=\"red\">કામ કરીએ</span> છીએ",
        steps: {
          step1: {
            title: "પૂછપરછ અને પરામર્શ",
            desc: "તમારી આવશ્યકતાઓ શેર કરો — સામગ્રીનો પ્રકાર, લક્ષ્ય કણોનું કદ અને બેચ વોલ્યુમ. અમારી તકનીકી ટીમ શક્યતાની સમીક્ષા કરે છે."
          },
          step2: {
            title: "ટ્રાયલ અને શક્યતા",
            desc: "અમે શ્રેષ્ઠ મિલિંગ પરિમાણો સ્થાપિત કરવા અને તમારા લક્ષ્ય PSD ને માન્ય કરવા માટે નાના પાયે ટ્રાયલ રન કરીએ છીએ."
          },
          step3: {
            title: "ઉત્પાદન રન",
            desc: "રીઅલ-ટાઇમ ગુણવત્તા દેખરેખ, પર્યાવરણીય નિયંત્રણો અને સંપૂર્ણ બેચ દસ્તાવેજીકરણ સાથે પૂર્ણ-સ્કેલ માઇક્રોનાઇઝેશન."
          },
          step4: {
            title: "QC અને ડિલિવરી",
            desc: "માલવર્ન PSD વિશ્લેષણ, સફાઈ ચકાસણી અને ડિલિવરી માટે સુરક્ષિત પેકેજિંગ સાથે સખત ગુણવત્તા તપાસ."
          }
        },
        ready: "શરૂ કરવા માટે <span class=\"red\">તૈયાર છો?</span>",
        readyLead: "તમારી માઇક્રોનાઇઝેશન આવશ્યકતાઓ પર ચર્ચા કરવા, શક્યતા ટ્રાયલની વિનંતી કરવા અથવા ક્વોટ મેળવવા માટે અમારી તકનીકી ટીમનો સંપર્ક કરો.",
        emailUs: "અમને સીધો ઈમેલ કરો"
      },
      contactPage: {
        label: "સંપર્ક કરો",
        title: "ચાલો <span class=\"red\">જોડાઈએ</span>",
        lead: "તમારી માઇક્રોનાઇઝેશનની જરૂરિયાતો પર ચર્ચા કરવા, શક્યતા ટ્રાયલની વિનંતી કરવા અથવા સુવિધા પ્રવાસનું આયોજન કરવા માટે અમારી તકનીકી ટીમનો સંપર્ક કરો.",
        sendLabel: "સંદેશ મોકલો",
        sendTitle: "સંપર્કમાં <span class=\"red\">રહો</span>",
        fields: {
          name: "પૂરું નામ",
          namePl: "તમારૂં પૂરું નામ",
          email: "ઈમેલ સરનામું",
          emailPl: "your@email.com",
          subject: "વિષય",
          subjectPl: "વિષય પસંદ કરો",
          subjects: {
            quote: "કોન્ટ્રાક્ટ માઇક્રોનાઇઝેશન ક્વોટ",
            trial: "શક્યતા ટ્રાયલ વિનંતી",
            tour: "સુવિધા પ્રવાસ",
            rnd: "આર એન્ડ ડી પરામર્શ",
            general: "સામાન્ય પૂછપરછ"
          },
          message: "સંદેશ",
          messagePl: "તમારી આવશ્યકતાઓ વિશે જણાવો...",
          sending: "ઈમેલ ક્લાયંટ ખોલી રહ્યું છે...",
          sendBtn: "સંદેશ મોકલો"
        },
        info: {
          email: "ઈમેલ",
          persons: "સંપર્ક વ્યક્તિઓ",
          office: "ઓફિસ અને ફેક્ટરી",
          responseTime: "પ્રતિસાદ સમય",
          responseLead: "અમે ૨૪ કલાકની અંદર તમામ તકનીકી પૂછપરછનો જવાબ આપીએ છીએ."
        }
      },
      facilitiesPage: {
        label: "અમારી સુવિધાઓ",
        title: "વર્લ્ડ-ક્લાસ <span class=\"red\">મેન્યુફેક્ચરિંગ</span> યુનિટ્સ",
        lead: "ગુજરાતમાં અંકલેશ્વર અને પાનોલી ખાતે આવેલા અત્યાધુનિક માઇક્રોનાઇઝેશન પ્લાન્ટ, જે અદ્યતન FDA-સુસંગત મશીનરીથી સજ્જ છે.",
        ankleshwar: {
          label: "અંકલેશ્વર યુનિટ",
          title: "સમર્પિત <span class=\"red\">માઇક્રોનાઇઝેશન</span> હબ",
          desc: "અમારી અંકલેશ્વર સુવિધા એક અત્યંત વિશિષ્ટ પ્લાન્ટ છે જે વ્યાવસાયિકોની સમર્પિત અને અનુભવી ટીમ સાથે ચોક્કસ માઇક્રોનાઇઝેશન પર કેન્દ્રિત છે.",
          feature1: "૪ સમર્પિત એર જેટ મિલ્સ",
          feature2: "સમર્પિત ઓપરેશનલ સ્ટાફ અને એન્જિનિયરિંગ ટીમ"
        },
        panoli1: {
          label: "પાનોલી યુનિટ · પ્લાન્ટ ૧",
          title: "ફાર્માસ્યુટિકલ <span class=\"red\">ઉત્કૃષ્ટતા</span>",
          desc: "પાનોલીમાં આવેલ પ્લાન્ટ ૧ અમારું પ્રાથમિક ફાર્માસ્યુટિકલ મેન્યુફેક્ચરિંગ હબ છે, જે ખાસ કરીને FDA-સુસંગત API પ્રોસેસિંગ માટે રચાયેલ છે.",
          feature1: "ફાર્મા માટે ૧૦ સમર્પિત એર જેટ મિલ્સ",
          feature2: "સમર્પિત ફાર્માસ્યુટિકલ ઓપરેશનલ સ્ટાફ"
        },
        panoli2: {
          label: "પાનોલી યુનિટ · પ્લાન્ટ ૨",
          title: "કેમિકલ અને <span class=\"red\">સ્પેશિયાલિટી</span> પ્રોસેસિંગ",
          desc: "પ્લાન્ટ ૨ ઔદ્યોગિક પ્રક્રિયા માટે તૈયાર કરવામાં આવ્યો છે, જે ઉચ્ચ ક્ષમતા સાથે રસાયણો અને સ્પેશિયાલિટી કેમિકલ્સનું સંચાલન કરે છે.",
          feature1: "૭ હેવી-ડ્યુટી એર જેટ મિલ્સ",
          feature2: "૪ એડવાન્સ્ડ એર ક્લાસિફાયર મિલ્સ",
          feature3: "સમર્પિત સ્પેશિયાલિટી કેમિકલ પ્રોસેસિંગ સ્ટાફ"
        }
      }
    }
  },
  it: {
    translation: {
      servicesGrid: {
        label: "Le Nostre Capacità",
        title: "Soluzioni di <em>Lavorazione</em> Complete",
        micronization: {
          title: "Micronizzazione",
          desc: "Riduzione ultra-fine delle particelle tramite fresatura avanzata a getto d'aria per API ed eccipienti."
        },
        milling: {
          title: "Fresatura Meccanica",
          desc: "Dimensionamento e granulazione ad alto impatto per distribuzioni granulometriche robuste e coerenti."
        },
        sieving: {
          title: "Setacciatura e Classificazione",
          desc: "Separazione dinamica e rigoroso controllo della dimensione massima per garantire l'uniformità del prodotto."
        },
        analysis: {
          title: "Servizi Analitici",
          desc: "Diffrazione laser all'avanguardia e caratterizzazione fisica per verificare la qualità."
        },
        learnMore: "Scopri di più"
      },
      scaleTimeline: {
        label: "Scalabilità End-to-End",
        title: "Dalla R&S alla Fornitura <em>Commerciale</em>",
        rnd: {
          title: "Scala Laboratorio / R&S",
          desc: "Studi di fattibilità, prove su piccoli lotti e sviluppo preciso del processo."
        },
        pilot: {
          title: "Scala Pilota",
          desc: "Ottimizzazione del processo, materiale per studi clinici e cicli di ingegneria scalabili."
        },
        commercial: {
          title: "Produzione Commerciale",
          desc: "Produzione multi-tonnellata ad alto rendimento sotto rigorosi protocolli cGMP."
        }
      },
      industries: {
        label: "Settori Serviti",
        title: "Soluzioni su Misura per <em>Ogni Settore</em>",
        pharma: {
          title: "Farmaceutico",
          desc: "Miglioramento della biodisponibilità degli API scarsamente solubili in conformità con cGMP."
        },
        food: {
          title: "Alimentare e Nutrizione",
          desc: "Fresatura precisa per integratori, alimenti funzionali e nutraceutici sensibili."
        },
        cosmetics: {
          title: "Cosmetici",
          desc: "Ottenimento di texture lussuose e dispersione uniforme per prodotti di bellezza premium."
        },
        chemical: {
          title: "Prodotti Chimici Speciali",
          desc: "Riduzione delle dimensioni personalizzata per materiali avanzati, catalizzatori e polimeri ingegnerizzati."
        }
      },

      serviceMicronization: {
        label: "Servizi di Micronizzazione",
        title: "Micronizzazione di Precisione",
        lead: "I nostri processi di micronizzazione avanzati alterano notevolmente le proprietà di ingredienti attivi farmaceutici.",
        co: {
          label: "Processo Specializzato",
          title: "Co-Micronizzazione",
          desc: "La co-micronizzazione prevede la macinazione simultanea di più ingredienti attivi. Questo assicura una miscela omogenea."
        },
        cryo: {
          label: "Temperatura Controllata",
          title: "Crio-Micronizzazione",
          desc: "Per i composti altamente termosensibili, il nostro processo di crio-micronizzazione utilizza il raffreddamento ad azoto liquido."
        },
        airjet: {
          label: "Riduzione Ultra-Fine",
          title: "Micronizzazione a Getto d'Aria",
          desc: "Utilizzando gas compresso ad alta velocità, le collisioni particella-particella riducono le dimensioni senza l'uso di mezzi di macinazione.",
          feature1: "Nessuna parte in movimento",
          feature2: "Aria di processo filtrata senza olio"
        }
      },
      serviceMilling: {
        label: "Servizi di Macinazione",
        title: "Soluzioni di Macinazione Industriale",
        lead: "Le nostre versatili capacità elaborano una vasta gamma di materiali.",
        multi: {
          label: "Granulazione a Velocità Variabile",
          title: "Multi Mulino",
          desc: "Utilizza forza variabile per ottenere una granulazione ottimale, sia umida che secca.",
          feature1: "Spurgo criogenico disponibile",
          feature2: "Macinazione standard",
          feature3: "Integrazioni co-macinazione"
        },
        hammer: {
          label: "Frantumazione ad Alto Impatto",
          title: "Mulino a Martelli",
          desc: "I nostri mulini a martelli usano martelli rotanti ad alta velocità per frantumare materiali duri o fragili.",
          feature1: "Spurgo criogenico disponibile",
          feature2: "Macinazione standard",
          feature3: "Integrazioni co-macinazione"
        },
        techniques: {
          title: "Tecniche Avanzate"
        },
        tech: {
          cryo: {
            title: "Spurgo Criogenico",
            desc: "Uso di azoto liquido per proteggere gli ingredienti attivi."
          },
          standard: {
            title: "Macinazione Standard",
            desc: "Macinazione a temperatura ambiente per produrre polveri rapidamente."
          },
          comill: {
            title: "Co-Macinazione",
            desc: "Macinazione simultanea per miscele perfette."
          }
        }
      },
      serviceSieving: {
        label: "Setacciatura e Classificazione",
        title: "Classificazione Precisa",
        lead: "Garantire un'accurata distribuzione delle dimensioni è fondamentale.",
        ultrafine: {
          label: "Alta Precisione",
          title: "Mulino per Macinazione Ultra Fine",
          desc: "Abbinati a meccanismi di setacciatura, ottengono distribuzioni granulometriche estremamente strette."
        },
        airclass: {
          label: "Separazione Dinamica",
          title: "Mulino Classificatore ad Aria",
          desc: "Usano forza centrifuga e correnti d'aria per creare un vortice dinamico.",
          feature1: "Classificazione dinamica continua",
          feature2: "Controllo rigoroso della dimensione massima"
        }
      },
      serviceAnalysis: {
        label: "Analisi e Controllo Qualità",
        title: "Analisi Completa delle Particelle",
        lead: "Per garantire la massima qualità, ogni lotto è sottoposto a rigorose verifiche.",
        laser: {
          label: "Diffrazione Laser",
          title: "Modalità a Secco e a Umido",
          desc: "Misuriamo le distribuzioni assolute utilizzando strumenti standard di settore.",
          feature1: "Precisione sub-micron",
          feature2: "Unità di dispersione automatizzate"
        },
        physical: {
          title: "Caratterizzazione Fisica"
        },
        tech: {
          sieve: {
            title: "Analisi al Setaccio",
            desc: "Vagliatura fisica per materiali più grossolani."
          },
          density: {
            title: "Densità Bulk e Tap",
            desc: "Misurazioni critiche per valutare fluidità e comprimibilità."
          }
        }
      },

      nav: {
        home: "Home",
        about: "Chi Siamo",
        services: "Servizi",
        facilities: "Strutture",
        contact: "Contatti",
        contactUs: "Contattaci",
        homeOverview: "Panoramica Home",
        powders: "Polveri",
        particleSize: "Dimensione Particelle",
        technology: "Tecnologia",
        benefits: "Vantaggi",
        process: "Processo",
        aboutOverview: "Panoramica Chi Siamo",
        atAGlance: "In Sintesi",
        features: "Caratteristiche",
        ourCompany: "La Nostra Azienda",
        facilitiesOverview: "Panoramica Strutture",
        ankleshwarUnit: "Unità di Ankleshwar",
        panoliPlant1: "Impianto Panoli 1",
        panoliPlant2: "Impianto Panoli 2",
        servicesOverview: "Panoramica Servizi",
        micronization: "Micronizzazione",
        coMicronization: "Co-micronizzazione",
        cryoMicronization: "Crio-micronizzazione",
        airJetMicronization: "Micronizzazione a getto d'aria",
        milling: "Fresatura",
        multiMill: "Multi mulino",
        cryogenicPurging: "Spurgo criogenico",
        standardMilling: "Fresatura standard",
        coMilling: "Co-fresatura",
        hammerMill: "Mulino a martelli",
        sievingClassification: "Setacciatura / Classificazione",
        ultraFineGrindingMill: "Mulino di macinazione ultra fine",
        airClassifierMill: "Mulino classificatore ad aria",
        analysis: "Analisi",
        dryAndWetModes: "Modalità a secco e a umido",
        sieveAnalysis: "Analisi al setaccio",
        bulkDensityTapDensity: "Densità apparente e impaccata",
        contactOverview: "Panoramica Contatti",
        contactDetails: "Dettagli di contatto"
      },
      hero: {
        eyebrow: "MicroTech India · La tua CMO indipendente di fiducia",
        title: "Il tuo partner M<span class=\"exclaim\">!</span>cro<br />per lavori di <span class=\"red\">micronizzazione</span><br />API, prodotti farmaceutici,<br />prodotti chimici.",
        lead: "MicroTech (INDIA) è uno dei leader più affidabili nei servizi di micronizzazione per API e farmaci sfusi. Situate ad Ankleshwar e Panoli (la più grande area industriale dell'Asia) nel Gujarat, INDIA, le strutture sono conformi agli standard FDA con oltre 7000 piedi quadrati di spazio. Il nostro team ha più di 2 decenni di esperienza.",
        ctaContact: "Contattaci",
        ctaMesh: "Vedi Dimensioni Mesh",
        fda: "Struttura Approvata FDA",
        sqft: "Struttura di oltre 7000 Mqft.",
        years: "Esperienza",
        cgmp: "Pratiche Standard cGMP"
      },
      showcase: {
        label: "Dimostrazione Visiva",
        title: "Effetto della <span class=\"red\">Micronizzazione</span>",
        lead: "Scopri come la nostra riduzione di precisione della dimensione delle particelle trasforma i principi attivi farmaceutici grezzi in polveri finissime.",
        coarse: "Particella Grezza",
        fine: "Polvere Micronizzata",
        materials: {
          white: "API Cristallino Bianco",
          white2: "API Bianco Ultra-Fine",
          yellow: "Eccipiente Giallo",
          brown: "Polvere Erboristica Marrone",
          cream: "Polvere API Crema",
          grey: "Composto Minerale Grigio"
        }
      },
      particleSize: {
        label: "Dimensione Relativa delle Particelle",
        title: "Tabella di Conversione <span class=\"red\">Standard US Mesh</span>",
        lead: "Di seguito è riportata la tabella di riferimento per le conversioni delle dimensioni delle particelle utilizzate nei nostri processi di micronizzazione.",
        table: {
          mesh: "Mesh US",
          microns: "Micron (µm)",
          inches: "Pollici",
          visual: "Dimensione Relativa"
        }
      },
      features: {
        label: "Perché la Dimensione Conta",
        title: "Sbloccare la <span class=\"red\">Biodisponibilità</span> e le Prestazioni",
        desc: "La riduzione della dimensione delle particelle è una fase critica nella formulazione dei moderni prodotti farmaceutici. Riducendo la dimensione a livello di micron, modifichiamo drasticamente le proprietà fisiche e chimiche dei vostri principi attivi.",
        items: {
          bio: {
            title: "Maggiore Biodisponibilità",
            desc: "Particelle più piccole significano un rapporto superficie/volume significativamente più elevato, con conseguente accelerazione dei tassi di dissoluzione e un assorbimento notevolmente migliorato all'interno dell'organismo."
          },
          uniformity: {
            title: "Uniformità di Miscelazione Perfetta",
            desc: "Ottenete una miscelazione coerente con gli eccipienti. L'eliminazione della segregazione dimensionale garantisce che ogni dose contenga l'esatto rapporto richiesto di ingredienti farmaceutici attivi."
          },
          delivery: {
            title: "Rilascio Avanzato dei Farmaci",
            desc: "Cruciale per formulazioni inalatorie, oftalmiche e iniettabili. Il controllo preciso della distribuzione delle particelle consente un rilascio mirato alle vie respiratorie o ai tessuti sensibili."
          }
        }
      },
      benefits: {
        label: "Vantaggi Tecnici",
        title: "Tecnologia all'Avanguardia <span class=\"red\">Spiral Jet Mill</span>",
        desc: "Il nostro processo utilizza mulini a getto di fluido avanzati, sfruttando flussi di aria compressa o azoto ad alta velocità per far collidere le particelle tra loro.",
        items: {
          noHeat: {
            title: "Nessuna Degradazione Termica",
            desc: "L'espansione del fluido crea un effetto di raffreddamento. Ideale per composti organici termolabili e sensibili al calore."
          },
          noContam: {
            title: "Zero Contaminazione da Metalli",
            desc: "Nessun mezzo di macinazione meccanico o parti in movimento. La collisione particella contro particella garantisce un'estrema purezza."
          },
          narrow: {
            title: "Distribuzione Stretta delle Particelle",
            desc: "I controlli di classificazione avanzati assicurano una distribuzione uniforme delle particelle senza grani fuori misura."
          }
        }
      },
      process: {
        label: "Nostri Standard Operativi",
        title: "Operazioni con <span class=\"red\">Qualità Garantita</span>",
        desc: "Seguiamo linee guida rigorose per garantire che tutti i processi si svolgano in modo sicuro, efficiente e soddisfino gli standard globali.",
        items: {
          traceability: {
            title: "Tracciabilità del Lotto",
            desc: "Tracciabilità completa di ogni singolo grammo lavorato, con documentazione completa dei parametri e dell'ambiente."
          },
          room: {
            title: "Camere Bianche Classificate",
            desc: "La macinazione viene eseguita in stanze a pressione positiva classificate ISO per prevenire completamente la contaminazione incrociata esterna."
          },
          malvern: {
            title: "Analisi Laser Malvern",
            desc: "Ogni lotto viene verificato con strumenti Malvern Mastersizer all'avanguardia per una verifica assoluta."
          }
        }
      },
      contactSec: {
        label: "Collabora con Noi",
        title: "Discuti il Tuo <span class=\"red\">Progetto</span>",
        lead: "Sia che tu abbia bisogno di una piccola prova da 10g o di una produzione commerciale ad alto volume, il nostro team di ingegneri è qui per aiutarti.",
        cta: "Contatta i Nostri Ingegneri",
        quick: "Contatto Rapido",
        response: "Rispondiamo a tutte le richieste tecniche entro 24 ore.",
        persons: "Persone di Contatto"
      },
      footer: {
        rights: "Tutti i Diritti Riservati.",
        designed: "Progettato con precisione per l'eccellenza farmaceutica."
      },
      aboutPage: {
        label: "Informazioni su Microtech India",
        title: "2 Decenni di Eccellenza <span class=\"red\">Farmaceutica</span>",
        lead: "Un'organizzazione di produzione a contratto a conduzione familiare dedicata alla micronizzazione di precisione.",
        whoLabel: "In Sintesi",
        whoTitle: "Chi <span class=\"red\">Siamo</span>",
        whoLead: "MICROTECH INDIA è una Contract Manufacturing Organization (CMO) indipendente e a conduzione familiare con 2 decenni di esperienza nella macinazione e micronizzazione di materiali farmaceutici. Lavoriamo principi attivi farmaceutici (API), eccipienti e altre sostanze in polvere con alta precisione, in piena conformità con gli standard FDA attuali. Le nostre strutture moderne e la lunga esperienza ci consentono di fornire soluzioni accurate, di alta qualità e affidabili ai nostri clienti.",
        cardExp: "Decenni di Esperienza",
        cardFDA: "Struttura Conforme FDA",
        cardGMP: "Pratiche Standard",
        cardCMO: "Produzione a Contratto",
        capLabel: "Caratteristiche",
        capTitle: "Le Nostre <span class=\"red\">Capacità</span>",
        caps: {
          particle: {
            title: "Qualsiasi Gamma di Particelle",
            desc: "Dimensione media delle particelle in qualsiasi intervallo di micron con aria filtrata ad alta pressione priva di olio e umidità."
          },
          nitrogen: {
            title: "Disponibilità di Azoto",
            desc: "L'azoto gassoso è disponibile anche per prodotti sensibili all'aria."
          },
          ambient: {
            title: "Processo a Temperatura Ambiente",
            desc: "Processo a temperatura ambiente con le ultime tecnologie."
          },
          parts: {
            title: "Senza Parti in Movimento",
            desc: "Camera di macinazione stazionaria senza parti in movimento."
          },
          throughput: {
            title: "Riproducibile e ad Alta Resa",
            desc: "Processo riproducibile e ad alta resa."
          }
        },
        whyLabel: "Vantaggi",
        whyTitle: "Perché Scegliere <span class=\"red\">Microtech</span>",
        benefits: {
          bio: {
            title: "Migliore Biodisponibilità",
            desc: "Migliore biodisponibilità e dissoluzione di API scarsamente solubili.",
            tag: "Solubilità"
          },
          heat: {
            title: "Nessuna Degradazione Termica",
            desc: "Nessuna degradazione termica per la polvere macinata.",
            tag: "Termolabile"
          },
          contam: {
            title: "Minor Rischio di Contaminazione",
            desc: "Minor rischio di contaminazione da metalli associato.",
            tag: "Purezza"
          },
          cost: {
            title: "Macinazione Conveniente",
            desc: "Approccio di macinazione di alta qualità ed economico.",
            tag: "Efficienza"
          },
          air: {
            title: "Trattamento dell'Aria Pulita",
            desc: "Aria ad alta pressione priva di olio e umidità, e azoto anche per prodotti sensibili.",
            tag: "Aria Pulita"
          }
        },
        companyLabel: "La Nostra Azienda",
        companyTitle: "Azienda Farmaceutica in <span class=\"red\">Rapida Crescita</span>",
        companyLead: "Offriamo servizi di micronizzazione a contratto coerenti, affidabili ed economici per produzioni di routine DA PICCOLE QUANTITÀ (10 GRAMMI) A GRANDI VOLUMI. Ti aiuteremo a ridurre il \"TIME TO MARKET\" per i tuoi progetti di R&S.",
        highlights: {
          batch: "Lavorazione di lotti da piccoli a grandi",
          timeline: "Tempi di R&S accelerati",
          fda: "Strutture approvate dalla FDA",
          trace: "Tracciabilità completa del lotto"
        },
        partner: "Collabora con Noi"
      },
      servicesPage: {
        label: "Cosa Offriamo",
        title: "Servizi Completi con Impegno <span class=\"red\">Costante</span>",
        lead: "Offriamo una soluzione completa e unica per tutte le esigenze di micronizzazione, supportata da una costante e rapida dedizione alla qualità e alla precisione.",
        gridLabel: "I Nostri Servizi",
        gridTitle: "Soluzioni <span class=\"red\">End-to-End</span>",
        gridLead: "La nostra esperienza spazia in vari settori, garantendo servizi su misura che soddisfano gli standard più elevati. Forniamo soluzioni affidabili, efficienti ed end-to-end progettate per supportare le vostre esigenze specifiche.",
        list: {
          contract: {
            title: "Micronizzazione a Contratto",
            desc: "Riduzione di precisione delle dimensioni delle particelle di API, eccipienti e polveri farmaceutiche mediante tecnologia avanzata a getto a spirale. Otteniamo risultati coerenti e riproducibili.",
            features: ["Fresatura a getto a spirale", "Capacità sub-micronica", "Elaborazione a lotti e continua"]
          },
          api: {
            title: "Lavorazione API",
            desc: "Lavorazione specializzata di principi attivi farmaceutici in piena conformità FDA. Le nostre camere bianche garantiscono zero contaminazioni incrociate e tracciabilità completa.",
            features: ["Conformità FDA", "Tecnologia camera bianca", "Tracciabilità totale"]
          },
          analysis: {
            title: "Analisi Dimensionale delle Particelle",
            desc: "Test e analisi completi della dimensione delle particelle mediante strumenti MALVERN. Forniamo report PSD dettagliati per garantire la conformità del prodotto.",
            features: ["Strumentazione MALVERN", "Report PSD", "Analisi D10, D50, D90"]
          },
          rnd: {
            title: "Supporto R&S",
            desc: "Dalle prove su piccole quantità (fino a 10 grammi) ai cicli di produzione su scala reale, supportiamo il vostro percorso di R&S e riduciamo il time-to-market.",
            features: ["Prove su piccoli lotti", "Supporto allo scale-up", "Tempi di consegna rapidi"]
          },
          nitrogen: {
            title: "Fresatura ad Azoto",
            desc: "Macinazione in atmosfera inerte con azoto per composti farmaceutici sensibili all'ossigeno, all'umidità o termolabili. Degradazione zero garantita.",
            features: ["Atmosfera inerte", "Privo di umidità", "Temperatura controllata"]
          },
          qa: {
            title: "Assicurazione Qualità",
            desc: "Gestione della qualità end-to-end conforme agli standard di documentazione cGMP. Ogni lotto viene sottoposto a rigorosi controlli con protocolli di verifica della pulizia.",
            features: ["Conformità cGMP", "Verifica della pulizia", "Documentazione di qualità"]
          }
        },
        processLabel: "Il Nostro Processo",
        processTitle: "Come <span class=\"red\">Lavoriamo</span>",
        steps: {
          step1: {
            title: "Richiesta e Consulenza",
            desc: "Condividi le tue esigenze: tipo di materiale, dimensione delle particelle target e volume del lotto. Il nostro team tecnico esamina la fattibilità."
          },
          step2: {
            title: "Prova e Fattibilità",
            desc: "Conduciamo prove su piccola scala per stabilire i parametri di macinazione ottimali e convalidare la PSD target."
          },
          step3: {
            title: "Ciclo di Produzione",
            desc: "Micronizzazione su scala reale con monitoraggio della qualità in tempo reale, controlli ambientali e documentazione completa del lotto."
          },
          step4: {
            title: "QC e Consegna",
            desc: "Rigorosi controlli di qualità con analisi PSD MALVERN, verifica della pulizia e imballaggio sicuro per la consegna."
          }
        },
        ready: "Pronto per <span class=\"red\">Iniziare?</span>",
        readyLead: "Contatta il nostro team tecnico per discutere le tue esigenze di micronizzazione, richiedere una prova di fattibilità o ottenere un preventivo.",
        emailUs: "Inviaci un'E-mail Direttamente"
      },
      contactPage: {
        label: "Contattaci",
        title: "Mettiamoci in <span class=\"red\">Contatto</span>",
        lead: "Contatta il nostro team tecnico per discutere delle tue esigenze di micronizzazione, richiedere una prova di fattibilità o pianificare una visita alla struttura.",
        sendLabel: "Invia un Messaggio",
        sendTitle: "Resta in <span class=\"red\">Contatto</span>",
        fields: {
          name: "Nome Completo",
          namePl: "Il tuo nome completo",
          email: "Indirizzo E-mail",
          emailPl: "tua@email.com",
          subject: "Oggetto",
          subjectPl: "Seleziona un oggetto",
          subjects: {
            quote: "Preventivo Micronizzazione a Contratto",
            trial: "Richiesta Prova di Fattibilità",
            tour: "Visita della Struttura",
            rnd: "Consulenza R&S",
            general: "Richiesta Generale"
          },
          message: "Messaggio",
          messagePl: "Raccontaci le tue esigenze...",
          sending: "Apertura del client di posta...",
          sendBtn: "Invia Messaggio"
        },
        info: {
          email: "E-mail",
          persons: "Persone di Contatto",
          office: "Ufficio e Stabilimento",
          responseTime: "Tempo di Risposta",
          responseLead: "Rispondiamo a tutte le richieste tecniche entro 24 ore."
        }
      },
      facilitiesPage: {
        label: "Le Nostre Strutture",
        title: "Unità Produttive <span class=\"red\">all'Avanguardia</span>",
        lead: "Impianti di micronizzazione all'avanguardia situati ad Ankleshwar e Panoli nel Gujarat, dotati di macchinari avanzati conformi alle norme FDA.",
        ankleshwar: {
          label: "Unità di Ankleshwar",
          title: "Polo Dedicato alla <span class=\"red\">Micronizzazione</span>",
          desc: "La nostra struttura di Ankleshwar è un impianto altamente specializzato focalizzato sulla micronizzazione di precisione con un team di professionisti dedicato ed esperto.",
          feature1: "4 Mulini a Getto d'Aria Dedicati",
          feature2: "Personale operativo e team di ingegneria dedicati"
        },
        panoli1: {
          label: "Unità di Panoli · Impianto 1",
          title: "<span class=\"red\">Eccellenza</span> Farmaceutica",
          desc: "L'Impianto 1 a Panoli è il nostro principale polo di produzione farmaceutica, progettato specificamente per l'elaborazione API conforme alla FDA.",
          feature1: "10 Mulini a Getto d'Aria Dedicati per il settore farmaceutico",
          feature2: "Personale operativo farmaceutico dedicato"
        },
        panoli2: {
          label: "Unità di Panoli · Impianto 2",
          title: "Lavorazione Chimica e <span class=\"red\">Specialistica</span>",
          desc: "L'Impianto 2 è studiato per processi industriali robusti, in grado di gestire sostanze chimiche e prodotti chimici di specialità ad alta capacità.",
          feature1: "7 Mulini a Getto d'Aria per impieghi gravosi",
          feature2: "4 Mulini Classificatori ad Aria Avanzati",
          feature3: "Personale dedicato alla lavorazione chimica speciale"
        }
      }
    }
  },
  fr: {
    translation: {
      servicesGrid: {
        label: "Nos Capacités",
        title: "Solutions de <em>Traitement</em> Complètes",
        micronization: {
          title: "Micronisation",
          desc: "Réduction ultra-fine des particules à l'aide d'un broyage à jet d'air avancé pour les API et les excipients."
        },
        milling: {
          title: "Broyage Mécanique",
          desc: "Dimensionnement et granulation à fort impact pour des distributions granulométriques robustes et cohérentes."
        },
        sieving: {
          title: "Tamisage et Classification",
          desc: "Séparation dynamique et contrôle strict de la taille maximale pour assurer l'uniformité du produit."
        },
        analysis: {
          title: "Services Analytiques",
          desc: "Diffraction laser de pointe et caractérisation physique pour vérifier la qualité."
        },
        learnMore: "En Savoir Plus"
      },
      scaleTimeline: {
        label: "Évolutivité de Bout en Bout",
        title: "De la R&D à l'Approvisionnement <em>Commercial</em>",
        rnd: {
          title: "Échelle Laboratoire / R&D",
          desc: "Études de faisabilité, essais sur petits lots et développement de processus précis."
        },
        pilot: {
          title: "Échelle Pilote",
          desc: "Optimisation de processus, matériel d'essais cliniques et cycles d'ingénierie évolutifs."
        },
        commercial: {
          title: "Production Commerciale",
          desc: "Fabrication multi-tonnes à haut rendement sous de stricts protocoles cGMP."
        }
      },
      industries: {
        label: "Industries Desservies",
        title: "Des Solutions sur Mesure pour <em>Chaque Secteur</em>",
        pharma: {
          title: "Produits Pharmaceutiques",
          desc: "Amélioration de la biodisponibilité des API peu solubles dans le strict respect des BPFc."
        },
        food: {
          title: "Alimentation et Nutrition",
          desc: "Broyage précis pour les suppléments, les aliments fonctionnels et les nutraceutiques sensibles."
        },
        cosmetics: {
          title: "Cosmétiques",
          desc: "Obtention de textures luxueuses et d'une dispersion uniforme pour les produits de beauté haut de gamme."
        },
        chemical: {
          title: "Produits Chimiques de Spécialité",
          desc: "Réduction de taille personnalisée pour les matériaux avancés, les catalyseurs et les polymères techniques."
        }
      },

      serviceMicronization: {
        label: "Services de Micronisation",
        title: "Micronisation de Précision",
        lead: "Nos processus avancés modifient considérablement les propriétés des ingrédients actifs.",
        co: {
          label: "Processus Spécialisé",
          title: "Co-Micronisation",
          desc: "Implique le broyage simultané de plusieurs ingrédients. Cela assure un mélange intime et homogène."
        },
        cryo: {
          label: "Température Contrôlée",
          title: "Cryo Micronisation",
          desc: "Pour les composés très sensibles à la chaleur, nous utilisons un refroidissement à l'azote liquide."
        },
        airjet: {
          label: "Réduction Ultra-Fine",
          title: "Micronisation à Jet d'Air",
          desc: "Utilisant un gaz compressé, les collisions entre particules réduisent la taille sans média de broyage.",
          feature1: "Aucune pièce mobile",
          feature2: "Air filtré sans huile"
        }
      },
      serviceMilling: {
        label: "Services de Broyage",
        title: "Solutions Industrielles",
        lead: "Nos capacités polyvalentes traitent une vaste gamme de matériaux.",
        multi: {
          label: "Granulation à Vitesse Variable",
          title: "Multi Moulin",
          desc: "Utilise une force variable pour une granulation optimale, humide ou sèche.",
          feature1: "Purge cryogénique disponible",
          feature2: "Broyage standard",
          feature3: "Intégrations de co-broyage"
        },
        hammer: {
          label: "Concassage à Fort Impact",
          title: "Broyeur à Marteaux",
          desc: "Nos broyeurs utilisent des marteaux pour concasser des matériaux durs ou fragiles.",
          feature1: "Purge cryogénique disponible",
          feature2: "Broyage standard",
          feature3: "Intégrations de co-broyage"
        },
        techniques: {
          title: "Techniques Avancées"
        },
        tech: {
          cryo: {
            title: "Purge Cryogénique",
            desc: "Utilisation d'azote liquide pour protéger les ingrédients actifs."
          },
          standard: {
            title: "Broyage Standard",
            desc: "Conçu pour produire des poudres rapidement à température ambiante."
          },
          comill: {
            title: "Co-Broyage",
            desc: "Broyage simultané pour obtenir des mélanges parfaits."
          }
        }
      },
      serviceSieving: {
        label: "Tamisage et Classification",
        title: "Classification Précise",
        lead: "Assurer une distribution granulométrique exacte est essentiel.",
        ultrafine: {
          label: "Haute Précision",
          title: "Broyeur Ultra Fin",
          desc: "Couplés à des mécanismes de tamisage internes, ils obtiennent des distributions très serrées."
        },
        airclass: {
          label: "Séparation Dynamique",
          title: "Broyeur Classificateur d'Air",
          desc: "Utilise la force centrifuge et des courants d'air pour créer un vortex dynamique.",
          feature1: "Classification dynamique",
          feature2: "Contrôle strict de la taille"
        }
      },
      serviceAnalysis: {
        label: "Analyse & Qualité",
        title: "Analyse Complète des Particelle",
        lead: "Chaque lot est soumis à une vérification analytique stricte.",
        laser: {
          label: "Diffraction Laser",
          title: "Modes Sec et Humide",
          desc: "Mesure de la distribution granulométrique absolue.",
          feature1: "Précision submicronique",
          feature2: "Unités automatisées"
        },
        physical: {
          title: "Caractérisation Physique"
        },
        tech: {
          sieve: {
            title: "Analyse par Tamis",
            desc: "Criblage physique traditionnel pour les matériaux plus grossiers."
          },
          density: {
            title: "Densité Apparente et Tassée",
            desc: "Mesures critiques évaluant la coulabilité et la compressibilité."
          }
        }
      },

      nav: {
        home: "Accueil",
        about: "À Propos",
        services: "Services",
        facilities: "Installations",
        contact: "Contact",
        contactUs: "Contactez-nous",
        homeOverview: "Aperçu de l'Accueil",
        powders: "Poudres",
        particleSize: "Taille des Particules",
        technology: "Technologie",
        benefits: "Avantages",
        process: "Processus",
        aboutOverview: "Aperçu À Propos",
        atAGlance: "En un coup d'œil",
        features: "Caractéristiques",
        ourCompany: "Notre Entreprise",
        facilitiesOverview: "Aperçu des Installations",
        ankleshwarUnit: "Unité d'Ankleshwar",
        panoliPlant1: "Usine Panoli 1",
        panoliPlant2: "Usine Panoli 2",
        servicesOverview: "Aperçu des Services",
        micronization: "Micronisation",
        coMicronization: "Co-micronisation",
        cryoMicronization: "Cryo-micronisation",
        airJetMicronization: "Micronisation à jet d'air",
        milling: "Broyage",
        multiMill: "Multi moulin",
        cryogenicPurging: "Purge cryogénique",
        standardMilling: "Broyage standard",
        coMilling: "Co-broyage",
        hammerMill: "Broyeur à marteaux",
        sievingClassification: "Tamisage / Classification",
        ultraFineGrindingMill: "Broyeur ultra fin",
        airClassifierMill: "Broyeur classificateur d'air",
        analysis: "Analyse",
        dryAndWetModes: "Modes sec et humide",
        sieveAnalysis: "Analyse par tamis",
        bulkDensityTapDensity: "Masse volumique apparente et tassée",
        contactOverview: "Aperçu Contact",
        contactDetails: "Coordonnées"
      },
      hero: {
        eyebrow: "MicroTech India · Votre CMO indépendant de confiance",
        title: "Votre partenaire M<span class=\"exclaim\">!</span>cro<br />pour les travaux de <span class=\"red\">micronisation</span><br />API, produits pharmaceutiques,<br />produits chimiques.",
        lead: "MicroTech (INDIA) est l'un des leaders les plus fiables en matière de services de micronisation pour les API et les médicaments en vrac. Situées à Ankleshwar et Panoli (la grande zone industrielle d'Asie) dans le Gujarat, en INDE, les installations respectent les normes FDA avec plus de 7000 pieds carrés d'espace. Notre équipe possède plus de 2 decennies d'expérience.",
        ctaContact: "Contactez-nous",
        ctaMesh: "Voir les Tailles de Mesh",
        fda: "Installation Approuvée par la FDA",
        sqft: "Installation de 7000+ Sqft.",
        years: "Expérience",
        cgmp: "Pratiques Standard cGMP"
      },
      showcase: {
        label: "Démonstration Visuelle",
        title: "Effet de la <span class=\"red\">Micronisation</span>",
        lead: "Découvrez comment notre réduction de précision de la taille des particules transforme les ingrédients pharmaceutiques actifs grossiers en poudres très fines.",
        coarse: "Particule Grossière",
        fine: "Poudre Micronisée",
        materials: {
          white: "API Cristallin Blanc",
          white2: "API Blanc Ultra-Fin",
          yellow: "Excipient Jaune",
          brown: "Poudre d'Herbe Brune",
          cream: "Poudre API Crème",
          grey: "Composé Minéral Gris"
        }
      },
      particleSize: {
        label: "Taille Relative des Particules",
        title: "Tableau de Conversion <span class=\"red\">Standard US Mesh</span>",
        lead: "Vous trouverez ci-dessous le tableau de référence pour les conversions de tailles de particules standard utilisées dans nos processus de micronisation.",
        table: {
          mesh: "Mesh US",
          microns: "Microns (µm)",
          inches: "Pouces",
          visual: "Taille Relative"
        }
      },
      features: {
        label: "Pourquoi la Taille des Particules Compte",
        title: "Libérer la <span class=\"red\">Biodisponibilité</span> & la Performance",
        desc: "La réduction de la taille des particules est une étape critique dans la formulation des produits pharmaceutiques modernes. En réduisant la taille des particules au niveau du micron, nous modifions radicalement les propriétés physiques et chimiques de vos ingrédients actifs.",
        items: {
          bio: {
            title: "Biodisponibilité Accrue",
            desc: "Des particules plus petites signifient un rapport surface/volume nettement plus élevé, ce qui entraîne des taux de dissolution accélérés et une absorption grandement améliorée dans l'organisme."
          },
          uniformity: {
            title: "Mélange Parfaitement Uniforme",
            desc: "Obtenez un mélange cohérent avec les excipients. L'élimination de la ségrégation par taille garantit que chaque dose contient le rapport exact requis d'ingrédients pharmaceutiques actifs."
          },
          delivery: {
            title: "Administration Avancée des Médicaments",
            desc: "Crucial pour les formulations d'inhalation, ophtalmiques et injectables. Le contrôle précis de la distribution des particules permet une administration ciblée vers les voies respiratoires ou les tissus sensibles."
          }
        }
      },
      benefits: {
        label: "Avantages Techniques",
        title: "Technologie de Pointe <span class=\"red\">Spiral Jet Mill</span>",
        desc: "Notre processus utilise des broyeurs à jet de fluide avancés, tirant parti de flux d'air comprimé ou d'azote à haute vitesse pour faire entrer les particules en collision.",
        items: {
          noHeat: {
            title: "Aucune Dégradation par la Chaleur",
            desc: "L'expansion du fluide crée un effet de refroidissement. Idéal pour les composés organiques thermolabiles et sensibles à la chaleur."
          },
          noContam: {
            title: "Zéro Contamination Métallique",
            desc: "Pas de média de broyage mécanique ni de pièces mobiles. La collision particule contre particule garantit une pureté extrême."
          },
          narrow: {
            title: "Distribution Étroite des Particules",
            desc: "Les commandes de classification avancées garantissent une distribution uniforme des particules sans grains surdimensionnés."
          }
        }
      },
      process: {
        label: "Nos Normes Opérationnelles",
        title: "Opérations à <span class=\"red\">Qualité Garantie</span>",
        desc: "Nous suivons des directives strictes pour garantir que tous les processus se déroulent de manière sûre, efficace et respectent les normes mondiales.",
        items: {
          traceability: {
            title: "Traçabilité des Lots",
            desc: "Traçabilité complète de chaque gramme traité, avec une documentation complète des paramètres et de l'environnement."
          },
          room: {
            title: "Salles Blanches Classées",
            desc: "Le broyage est exécuté dans des salles à pression positive classées ISO pour empêcher complètement toute contamination croisée externe."
          },
          malvern: {
            title: "Analyse Laser Malvern",
            desc: "Chaque lot est vérifié à l'aide d'instruments de pointe Malvern Mastersizer pour une vérification absolue."
          }
        }
      },
      contactSec: {
        label: "Devenez Partenaire",
        title: "Discutez de Votre <span class=\"red\">Projet</span>",
        lead: "Que vous ayez besoin d'un petit essai de 10g ou d'une production commerciale à grand volume, notre équipe d'ingénieurs est là pour vous aider.",
        cta: "Contacter Nos Ingénieurs",
        quick: "Contact Rapide",
        response: "Nous répondons à toutes les demandes techniques dans les 24 heures.",
        persons: "Personnes de Contact"
      },
      footer: {
        rights: "Tous Droits Réservés.",
        designed: "Conçu avec précision pour l'excellence pharmaceutique."
      },
      aboutPage: {
        label: "À Propos de Microtech India",
        title: "2 Décennies d'Excellence <span class=\"red\">Pharmaceutique</span>",
        lead: "Une organisation de fabrication sous contrat familiale dédiée à la micronisation de précision.",
        whoLabel: "En un Coup d'Œil",
        whoTitle: "Qui nous <span class=\"red\">sommes</span>",
        whoLead: "MICROTECH INDIA est une organisation de fabrication sous contrat (CMO) familiale et indépendante, forte de 2 décennies d'expérience dans le broyage et la micronisation de matériaux pharmaceutiques. We traitons des ingrédients pharmaceutiques actifs (API), des excipients et d'autres substances en poudre avec une grande précision, en totale conformité avec les normes FDA actuelles. Nos installations modernes et notre longue expérience nous permettent de fournir des solutions précises, de haute qualité et fiables à nos clients.",
        cardExp: "Décennies d'Expérience",
        cardFDA: "Installation Conforme FDA",
        cardGMP: "Pratiques Standard",
        cardCMO: "Fabrication sous Contrat",
        capLabel: "Capacités",
        capTitle: "Nos <span class=\"red\">capacités</span>",
        caps: {
          particle: {
            title: "Toutes Gammes de Particules",
            desc: "Taille moyenne des particules dans toutes les plages de microns avec de l'air filtré haute pression exempt d'huile et d'humidité."
          },
          nitrogen: {
            title: "Azote Disponible",
            desc: "L'azote gazeux est également disponible pour les produits sensibles à l'air."
          },
          ambient: {
            title: "Processus Ambiant",
            desc: "Processus ambiant avec les dernières technologies."
          },
          parts: {
            title: "Pas de Pièces Mobiles",
            desc: "Chambre de broyage fixe sans aucune pièce mobile."
          },
          throughput: {
            title: "Reproductible & Haut Débit",
            desc: "Processus reproductible et à haut débit."
          }
        },
        whyLabel: "Avantages",
        whyTitle: "Pourquoi Choisir <span class=\"red\">Microtech</span>",
        benefits: {
          bio: {
            title: "Biodisponibilité Améliorée",
            desc: "Amélioration de la biodisponibilité et de la dissolution des API peu solubles.",
            tag: "Solibilité"
          },
          heat: {
            title: "Pas de Dégradation par la Chaleur",
            desc: "Pas de dégradation thermique pour la poudre en cours de broyage.",
            tag: "Thermolabile"
          },
          contam: {
            title: "Moins de Risques de Contamination",
            desc: "Moins de risques de contamination métallique associés.",
            tag: "Pureté"
          },
          cost: {
            title: "Broyage Rentable",
            desc: "Approche de broyage de haute qualité et rentable.",
            tag: "Efficacité"
          },
          air: {
            title: "Traitement de l'Air Propre",
            desc: "Air haute pression sans huile ni humidité, et azote également pour les produits sensibles.",
            tag: "Air Propre"
          }
        },
        companyLabel: "Notre Entreprise",
        companyTitle: "Entreprise Pharmaceutique à <span class=\"red\">Croissance Rapide</span>",
        companyLead: "Nous proposons des services de micronisation sous contrat cohérents, fiables et rentables pour vos productions de routine DE PETITE QUANTITÉ (10 GRAMMES) À GRAND VOLUME. Nous vous aiderons à réduire le \"DELAI DE MISE SUR LE MARCHE\" de vos projets de R&D.",
        highlights: {
          batch: "Traitement de lots de petite à grande taille",
          timeline: "Délais de R&D accélérés",
          fda: "Installations approuvées par la FDA",
          trace: "Traçabilité complète des lots"
        },
        partner: "Devenir Partenaire"
      },
      servicesPage: {
        label: "Ce Que Nous Offrons",
        title: "Services Complets avec un Engagement <span class=\"red\">Indéfectible</span>",
        lead: "We offrons une solution complète et unique pour toutes les exigences de micronisation, soutenue par un dévouement constant et rapide envers la qualité et la précision.",
        gridLabel: "Nos Services",
        gridTitle: "Solutions <span class=\"red\">Clés en Main</span>",
        gridLead: "Notre expertise s'étend à divers secteurs, garantissant des services sur mesure qui répondent aux normes les plus élevées. Nous fournissons des solutions fiables, efficaces et de bout en bout conçues pour répondre à vos exigences spécifiques.",
        list: {
          contract: {
            title: "Micronisation sous Contrat",
            desc: "Réduction de précision de la taille des particules des API, excipients et poudres pharmaceutiques à l'aide d'une technologie avancée de broyeur à jet en spirale. Nous obtenons des résultats cohérents et reproductibles.",
            features: ["Broyage à jet en spirale", "Capacité sub-micronique", "Traitement par lots & continu"]
          },
          api: {
            title: "Traitement des API",
            desc: "Traitement spécialisé des ingrédients pharmaceutiques actifs en conformité totale avec la FDA. Nos salles blanches garantissent une contamination croisée nulle et une traçabilité complète des lots.",
            features: ["Conformité FDA", "Technologie de salle blanche", "Traçabilité totale"]
          },
          analysis: {
            title: "Analyse de la Taille des Particules",
            desc: "Essais et analyses complets de la taille des particules à l'aide d'instruments MALVERN. Nous fournissons des rapports PSD détaillés pour garantir que votre produit répond aux spécifications exactes.",
            features: ["Instrumentation MALVERN", "Rapports PSD", "Analyse D10, D50, D90"]
          },
          rnd: {
            title: "Support R&D",
            desc: "Des essais en petites quantités (à partir de 10 grammes) aux cycles de production à grande échelle, nous soutenons votre parcours de R&D et vous aidons à réduire vos délais de mise sur le marché.",
            features: ["Essais sur petits lots", "Support à la mise à l'échelle", "Délai d'exécution rapide"]
          },
          nitrogen: {
            title: "Broyage à l'Azote",
            desc: "Broyage sous atmosphère inerte à l'azote pour les composés pharmaceutiques sensibles à l'humidité ou thermolabiles. Zéro dégradation garantie.",
            features: ["Atmosphère inerte", "Sans humidité", "Température contrôlée"]
          },
          qa: {
            title: "Assurance Qualité",
            desc: "Gestion de la qualité de bout en bout conforme aux normes de documentation cGMP. Chaque lot subit des contrôles de qualité rigoureux avec des protocoles de vérification du nettoyage.",
            features: ["Conformité cGMP", "Vérification du nettoyage", "Documentation de qualité"]
          }
        },
        processLabel: "Notre Processus",
        processTitle: "Comment Nous <span class=\"red\">Travaillons</span>",
        steps: {
          step1: {
            title: "Demande & Consultation",
            desc: "Partagez vos exigences — type de matériau, taille de particule cible et volume du lot. Notre équipe technique examine la faisabilité."
          },
          step2: {
            title: "Essai & Faisabilité",
            desc: "Nous menons des essais à petite échelle pour établir les paramètres de broyage optimaux et valider votre PSD cible."
          },
          step3: {
            title: "Production",
            desc: "Micronisation à grande échelle avec surveillance de la qualité en temps réel, contrôles environnementaux et documentation complète du lot."
          },
          step4: {
            title: "Contrôle Qualité & Livraison",
            desc: "Contrôles de qualité rigoureux avec analyse PSD MALVERN, vérification du nettoyage et emballage sécurisé pour la livraison."
          }
        },
        ready: "Prêt à <span class=\"red\">Commencer?</span>",
        readyLead: "Contactez notre équipe technique pour discuter de vos besoins en micronisation, demander un essai de faisabilité ou obtenir un devis.",
        emailUs: "Envoyez-nous un E-mail Directement"
      },
      contactPage: {
        label: "Contactez-nous",
        title: "Mettons-nous en <span class=\"red\">Relation</span>",
        lead: "Contactez notre équipe technique pour discuter de vos besoins en micronisation, demander un essai de faisabilité ou planifier une visite des installations.",
        sendLabel: "Envoyer un Message",
        sendTitle: "Restons en <span class=\"red\">Contact</span>",
        fields: {
          name: "Nom Complet",
          namePl: "Votre nom complet",
          email: "Adresse E-mail",
          emailPl: "votre@email.com",
          subject: "Sujet",
          subjectPl: "Sélectionnez un sujet",
          subjects: {
            quote: "Devis de Micronisation sous Contrat",
            trial: "Demande d'Essai de Faisabilité",
            tour: "Visite des Installations",
            rnd: "Consultation R&D",
            general: "Demande Générale"
          },
          message: "Message",
          messagePl: "Parlez-nous de vos besoins...",
          sending: "Ouverture du client de messagerie...",
          sendBtn: "Envoyer le Message"
        },
        info: {
          email: "E-mail",
          persons: "Personnes de Contact",
          office: "Bureau & Usine",
          responseTime: "Temps de Réponse",
          responseLead: "Nous répondons à toutes les demandes techniques dans les 24 heures."
        }
      },
      facilitiesPage: {
        label: "Nos Installations",
        title: "Unités de Fabrication de <span class=\"red\">Classe Mondiale</span>",
        lead: "Usines de micronisation de pointe situées à Ankleshwar et Panoli dans le Gujarat, équipées de machines avancées conformes à la FDA.",
        ankleshwar: {
          label: "Unité d'Ankleshwar",
          title: "Centre Dédié à la <span class=\"red\">Micronisation</span>",
          desc: "Notre installation d'Ankleshwar est une usine hautement spécialisée axée sur la micronisation de précision avec une équipe de professionnels dévoués et expérimentés.",
          feature1: "4 Broyeurs à Jet d'Air Dédiés",
          feature2: "Personnel opérationnel et équipe d'ingénierie dédiés"
        },
        panoli1: {
          label: "Unité de Panoli · Usine 1",
          title: "<span class=\"red\">Excellence</span> Pharmaceutique",
          desc: "L'Usine 1 de Panoli est notre principal centre de fabrication pharmaceutique, conçue spécifiquement pour le traitement des API conforme à la FDA.",
          feature1: "10 Broyeurs à Jet d'Air Dédiés pour la pharmacie",
          feature2: "Personnel opérationnel pharmaceutique dédié"
        },
        panoli2: {
          label: "Unité de Panoli · Usine 2",
          title: "Traitement Chimique et <span class=\"red\">Spécialisé</span>",
          desc: "L'Usine 2 est conçue pour des processus industriels robustes, traitant des produits chimiques et des produits chimiques de spécialité avec une grande capacité de débit.",
          feature1: "7 Broyeurs à Jet d'Air Industriels",
          feature2: "4 Broyeurs Classificateurs à Air Avancés",
          feature3: "Personnel dédié au traitement chimique spécialisé"
        }
      }
    }
  },
  zh: {
    translation: {
      servicesGrid: {
        label: "我们的能力",
        title: "全面的<em>加工</em>解决方案",
        micronization: {
          title: "微化加工",
          desc: "利用先进的气流粉碎技术对原料药和辅料进行超细颗粒减小。"
        },
        milling: {
          title: "机械粉碎",
          desc: "通过高强度冲击实现定径和制粒，以获得稳定一致的粒度分布。"
        },
        sieving: {
          title: "筛分与分级",
          desc: "通过动态分离和严格的顶级尺寸控制来确保产品的均匀性。"
        },
        analysis: {
          title: "分析服务",
          desc: "采用最先进的激光衍射和物理表征技术来验证产品质量。"
        },
        learnMore: "了解更多"
      },
      scaleTimeline: {
        label: "端到端的可扩展性",
        title: "从研发到<em>商业</em>化供应",
        rnd: {
          title: "实验室 / 研发规模",
          desc: "可行性研究、小批量试验以及精确的工艺开发。"
        },
        pilot: {
          title: "中试规模",
          desc: "工艺优化、临床试验材料制备和可扩展的工程批次。"
        },
        commercial: {
          title: "商业化生产",
          desc: "在严格的 cGMP 协议下进行高产量、多吨级的制造。"
        }
      },
      industries: {
        label: "服务行业",
        title: "为<em>每个领域</em>量身定制的解决方案",
        pharma: {
          title: "制药",
          desc: "在严格遵守 cGMP 的前提下，提高难溶性 API 的生物利用度。"
        },
        food: {
          title: "食品与营养",
          desc: "为补充剂、功能性食品和敏感的营养保健品提供精确的粉碎。"
        },
        cosmetics: {
          title: "化妆品",
          desc: "为高端美容产品实现奢华质地和均匀分散。"
        },
        chemical: {
          title: "特种化学品",
          desc: "为先进材料、催化剂和工程聚合物提供定制尺寸减小方案。"
        }
      },

      serviceMicronization: {
        label: "微化加工服务",
        title: "精密微化",
        lead: "我们先进的微化工艺可显著改变活性成分的理化性质。",
        co: {
          label: "特殊工艺",
          title: "共微化",
          desc: "涉及同时研磨多种活性成分，确保实现微观尺度上的完美均匀混合。"
        },
        cryo: {
          label: "温控微化",
          title: "低温微化",
          desc: "对于热敏感化合物，我们的低温工艺使用液氮冷却。"
        },
        airjet: {
          label: "超细减小",
          title: "气流微化",
          desc: "利用高速压缩气体，通过颗粒间的碰撞减小尺寸，无需研磨介质。",
          feature1: "研磨区无运动部件",
          feature2: "无油过滤工艺空气"
        }
      },
      serviceMilling: {
        label: "研磨服务",
        title: "工业研磨解决方案",
        lead: "我们多功能的研磨能力可处理各种材料。",
        multi: {
          label: "变速制粒",
          title: "多功能粉碎机",
          desc: "利用变力实现最佳制粒，适用于干湿制粒。",
          feature1: "可选液氮冷却",
          feature2: "标准研磨",
          feature3: "共研磨集成"
        },
        hammer: {
          label: "高强度粉碎",
          title: "锤式粉碎机",
          desc: "使用高速旋转的锤子粉碎坚硬、结晶或易碎材料。",
          feature1: "可选液氮冷却",
          feature2: "标准研磨",
          feature3: "共研磨集成"
        },
        techniques: {
          title: "先进技术"
        },
        tech: {
          cryo: {
            title: "低温净化",
            desc: "使用液氮保持研磨环境极冷。"
          },
          standard: {
            title: "标准研磨",
            desc: "环境温度研磨，旨在快速生产标准粉末。"
          },
          comill: {
            title: "共研磨",
            desc: "在研磨室中同时研磨多种物质以实现完美的均匀混合。"
          }
        }
      },
      serviceSieving: {
        label: "筛分与分级",
        title: "精确颗粒分级",
        lead: "确保准确的粒度分布至关重要。",
        ultrafine: {
          label: "高精度",
          title: "超细研磨机",
          desc: "结合内部筛分机制，实现极紧密的粒度分布。"
        },
        airclass: {
          label: "动态分离",
          title: "气流分级机",
          desc: "利用离心力和气流创建动态涡流进行分离。",
          feature1: "连续动态分级",
          feature2: "严格的顶级尺寸控制"
        }
      },
      serviceAnalysis: {
        label: "分析与质保",
        title: "全面的颗粒分析",
        lead: "为保证最高质量和确切规格，每个批次都经过严格分析。",
        laser: {
          label: "激光衍射",
          title: "干湿模式",
          desc: "使用行业标准仪器测量绝对粒度分布。",
          feature1: "亚微米级精度",
          feature2: "自动化分散单元"
        },
        physical: {
          title: "物理表征"
        },
        tech: {
          sieve: {
            title: "筛分分析",
            desc: "针对较粗材料的传统可靠物理筛分。"
          },
          density: {
            title: "堆密度和振实密度",
            desc: "评估粉末流动性和可压缩性的关键测量。"
          }
        }
      },

      nav: {
        home: "首页",
        about: "关于我们",
        services: "我们的服务",
        facilities: "设施",
        contact: "联系我们",
        contactUs: "联系我们",
        homeOverview: "首页概览",
        powders: "粉末",
        particleSize: "颗粒粒径",
        technology: "技术",
        benefits: "优势",
        process: "流程",
        aboutOverview: "关于我们概览",
        atAGlance: "一览",
        features: "特点",
        ourCompany: "公司实力",
        facilitiesOverview: "设施概览",
        ankleshwarUnit: "Ankleshwar 设施",
        panoliPlant1: "Panoli 1 号工厂",
        panoliPlant2: "Panoli 2 号工厂",
        servicesOverview: "服务概览",
        micronization: "微化加工",
        coMicronization: "共微化",
        cryoMicronization: "低温微化",
        airJetMicronization: "气流微化",
        milling: "研磨",
        multiMill: "多功能粉碎机",
        cryogenicPurging: "低温净化",
        standardMilling: "标准研磨",
        coMilling: "共研磨",
        hammerMill: "锤式粉碎机",
        sievingClassification: "筛分与分级",
        ultraFineGrindingMill: "超细研磨机",
        airClassifierMill: "气流分级机",
        analysis: "分析",
        dryAndWetModes: "干湿模式",
        sieveAnalysis: "筛分分析",
        bulkDensityTapDensity: "堆密度和振实密度",
        contactOverview: "联系我们概览",
        contactDetails: "联系方式"
      },
      hero: {
        eyebrow: "MicroTech India · 您值得信赖的独立 CMO 合作伙伴",
        title: "您的 M<span class=\"exclaim\">!</span>cro 合作伙伴<br />专注于<span class=\"red\">超细微化</span>加工<br />API、制药、化学品。",
        lead: "MicroTech (INDIA) 是最受信任的 API 和散装药物超细微化服务提供商之一。设施位于印度古吉拉特邦的 Ankleshwar 和 Panoli（亚洲最大的工业区），符合 FDA 批准标准，空间超过 7000 平方英尺。我们的团队拥有超过 20 年的行业服务经验。",
        ctaContact: "联系我们",
        ctaMesh: "查看网目尺寸",
        fda: "FDA 批准设施",
        sqft: "7000+ 平方英尺设施",
        years: "行业经验",
        cgmp: "cGMP 规范操作"
      },
      showcase: {
        label: "视觉演示",
        title: "微化加工<span class=\"red\">效果对比</span>",
        lead: "观察我们的精准颗粒粒径缩减技术如何将粗糙的活性制药原料加工成极细的粉末。",
        coarse: "粗颗粒原料",
        fine: "微化超细粉末",
        materials: {
          white: "白色结晶 API 原料",
          white2: "超细白色 API 原料",
          yellow: "黄色辅料",
          brown: "棕色中草药粉末",
          cream: "乳白色 API 粉末",
          grey: "灰色矿物化合物"
        }
      },
      particleSize: {
        label: "颗粒尺寸对比",
        title: "美国标准目数<span class=\"red\">转换</span>对照表",
        lead: "以下是我们在超细微化过程中所使用的标准颗粒粒径转换参考表。",
        table: {
          mesh: "美国目数 (Mesh)",
          microns: "微米 (µm)",
          inches: "英寸 (Inches)",
          visual: "相对粒径"
        }
      },
      features: {
        label: "为什么颗粒粒径如此重要",
        title: "释放<span class=\"red\">生物利用度</span>与卓越性能",
        desc: "颗粒粒径的减小是现代药物制剂的关键步骤。通过将颗粒缩减至微米级别，我们能够显著改变活性成分的物理和化学特性。",
        items: {
          bio: {
            title: "提高生物利用度",
            desc: "更小的颗粒意味着显着提高的表面积体积比，从而加速溶解速度并大幅改善人体吸收效果。"
          },
          uniformity: {
            title: "完美的混合均匀度",
            desc: "实现与辅料的稳定一致混合。消除粒径分级，确保每一剂药物中活性制药成分的配比精确无误。"
          },
          delivery: {
            title: "先进给药系统支撑",
            desc: "对吸入制剂、眼科制剂和注射剂至关重要。精确控制颗粒分布，可将药物定向输送至呼吸道或敏感组织。"
          }
        }
      },
      benefits: {
        label: "技术优势",
        title: "先进的<span class=\"red\">气流粉碎机 (Spiral Jet Mill)</span> 技术",
        desc: "我们采用先进的流体能量气流粉碎机，利用高速压缩空气或氮气流使颗粒之间发生高速碰撞。",
        items: {
          noHeat: {
            title: "无热降解风险",
            desc: "气体膨胀会产生冷却效应。非常适合热敏性和易受热影响的有机化合物。"
          },
          noContam: {
            title: "零金属杂质污染",
            desc: "无机械研磨介质，无活动部件。颗粒间的对撞确保极高的纯度。"
          },
          narrow: {
            title: "窄区间粒径分布",
            desc: "先进的分级控制系统确保颗粒分布均匀，无过大颗粒夹杂。"
          }
        }
      },
      process: {
        label: "我们的操作规范",
        title: "品质<span class=\"red\">保障</span>的安全操作",
        desc: "我们遵循严格的指南，确保所有流程安全、高效运行，并符合全球标准。",
        items: {
          traceability: {
            title: "批次追溯",
            desc: "对处理的每一克物料进行完全追溯，并对参数和环境进行完整记录。"
          },
          room: {
            title: "受控洁净室",
            desc: "粉碎过程在正压 ISO 洁净室中进行，以彻底防止外部交叉污染。"
          },
          malvern: {
            title: "马尔文激光粒度分析",
            desc: "每个批次均使用先进的 Malvern Mastersizer 仪器进行检测以确保绝对达标。"
          }
        }
      },
      contactSec: {
        label: "合作伙伴",
        title: "探讨您的<span class=\"red\">项目需求</span>",
        lead: "无论您需要小至 10 克的研发试样，还是大批量商业化常规生产，我们的工程团队都随时为您提供服务。",
        cta: "联系我们的工程师",
        quick: "快速联系",
        response: "我们会在 24 小时内回复所有技术咨询。",
        persons: "联系人"
      },
      footer: {
        rights: "版权所有。",
        designed: "精益求精，专为卓越制药品质而设计。"
      },
      aboutPage: {
        label: "关于印度 Microtech",
        title: "20 载<span class=\"red\">制药领域</span>卓越沉淀",
        lead: "一家致力于精密超细微化加工的家族式合同制造组织 (CMO)。",
        whoLabel: "企业概览",
        whoTitle: "我们是<span class=\"red\">谁</span>",
        whoLead: "MICROTECH INDIA 是一家家族拥有、独立的合同制造组织 (CMO)，在药物原料的研磨和超细微化方面拥有 20 年的经验。我们以极高的精准度处理活性制药成分 (API)、辅料和其他粉末物质，完全符合当前的 FDA 标准。我们现代化的设施和深厚的行业经验使我们能够为客户提供精准、优质和可靠的解决方案。",
        cardExp: "20 年行业经验",
        cardFDA: "符合 FDA 标准设施",
        cardGMP: "规范操作实践",
        cardCMO: "合同委托加工",
        capLabel: "技术特点",
        capTitle: "我们的<span class=\"red\">加工能力</span>",
        caps: {
          particle: {
            title: "任意粒径区间",
            desc: "采用无油无水高压过滤空气，可实现任意微米区间的平均粒径缩减。"
          },
          nitrogen: {
            title: "提供氮气流保护",
            desc: "针对空气或氧气敏感性物料，我们提供氮气介质气流粉碎。"
          },
          ambient: {
            title: "常温温控工艺",
            desc: "融合最新技术的常温工艺，避免高温降解。"
          },
          parts: {
            title: "无机械活动部件",
            desc: "粉碎腔完全固定，无任何高速旋转的活动金属部件。"
          },
          throughput: {
            title: "重现性佳与高产能",
            desc: "批次重现性出色，支持高吞吐量大规模量产。"
          }
        },
        whyLabel: "优势分析",
        whyTitle: "为什么选择 <span class=\"red\">Microtech</span>",
        benefits: {
          bio: {
            title: "改善生物利用度",
            desc: "显著改善难溶性 API 的生物利用度和溶解度。",
            tag: "溶解性"
          },
          heat: {
            title: "无热度降解",
            desc: "对被研磨的粉末不产生任何热降解损坏。",
            tag: "热敏性"
          },
          contam: {
            title: "极低金属污染风险",
            desc: "避免了传统的机械磨损污染风险。",
            tag: "高纯度"
          },
          cost: {
            title: "高性价比研磨",
            desc: "高品质、低成本、高效率的微化研磨方案。",
            tag: "高效率"
          },
          air: {
            title: "洁净气体气源",
            desc: "无油无水的高压气体，亦可使用氮气气源进行保护加工。",
            tag: "洁净气体"
          }
        },
        companyLabel: "公司实力",
        companyTitle: "快速成长的<span class=\"red\">制药加工</span>企业",
        companyLead: "我们为您的研发项目从小样（低至 10 克）到大批量日常商业生产提供稳定、可靠且极具成本效益的合同微化加工服务。我们全力帮助您缩短研发项目的“上市时间”。",
        highlights: {
          batch: "小批量至大批量灵活加工",
          timeline: "加速研发与上市进程",
          fda: "经 FDA 批准的规范厂房",
          trace: "完善的生产批次可追溯性"
        },
        partner: "与我们合作"
      },
      servicesPage: {
        label: "我们提供什么",
        title: "卓越品质，伴随<span class=\"red\">始终如一</span>的承诺",
        lead: "我们为所有超细微化需求提供全面、一站式的解决方案，并以快速、稳定的质量和精度奉献为后盾。",
        gridLabel: "服务领域",
        gridTitle: "端到端<span class=\"red\">解决方案</span>",
        gridLead: "我们的专业知识涵盖各个行业，确保提供满足最高标准的定制服务。我们提供可靠、高效和端到端的解决方案，以最大的承诺支持您的特定要求。",
        list: {
          contract: {
            title: "合同微化加工服务",
            desc: "采用先进的螺旋气流粉碎技术，对 API、辅料和药物粉末进行精密粒径缩减。我们能稳定实现从亚微米到粗粉范围的粒径控制。",
            features: ["螺旋气流粉碎", "亚微米级加工能力", "批次与连续加工"]
          },
          api: {
            title: "API 原料药代加工",
            desc: "完全符合 FDA 规范的活性制药成分专业加工。我们的洁净室设施确保零交叉污染和完全的批次追溯性。",
            features: ["符合 FDA 规范", "洁净室技术支撑", "完整批次追溯"]
          },
          analysis: {
            title: "颗粒粒径分析检测",
            desc: "使用马尔文 (MALVERN) 粒度仪提供全面的粒径测试和分析。我们提供详细的 PSD 粒径报告，确保物料完美达标。",
            features: ["马尔文仪器分析", "详细 PSD 报告", "D10, D50, D90 多参数分析"]
          },
          rnd: {
            title: "研发与小试支持",
            desc: "支持低至 10 克的极小样试制到后续逐级放大生产，全程助力您的研发进程，降低时间成本。",
            features: ["小批次试制", "放大生产支持", "快速交付响应"]
          },
          nitrogen: {
            title: "氮气流气流研磨",
            desc: "使用氮气介质对易氧化、易吸潮或热敏性制药化合物进行惰性气体保护研磨，确保零降解风险。",
            features: ["惰性气体环境", "无水无氧控制", "温度可控操作"]
          },
          qa: {
            title: "卓越质量保证",
            desc: "符合 cGMP 体系的端到端质量管理和文件记录。每个批次都经过严格的品质检测和清场清洁验证。",
            features: ["符合 cGMP 规范", "清洁验证验证", "质量控制体系文件"]
          }
        },
        processLabel: "加工流程",
        processTitle: "我们如何<span class=\"red\">开展工作</span>",
        steps: {
          step1: {
            title: "需求咨询对接",
            desc: "提供您的物料信息、目标粒径要求和计划批次量，我们的技术团队进行可行性评估。"
          },
          step2: {
            title: "样品试制与可行性",
            desc: "我们进行小试研磨，以确定最佳研磨参数，并对目标 PSD 结果进行分析确认。"
          },
          step3: {
            title: "规模量产加工",
            desc: "进行全尺寸微化量产，辅以实时质量监控、温湿度环境控制以及完备的批记录支持。"
          },
          step4: {
            title: "质检与交付",
            desc: "经过马尔文 PSD 粒度分析仪质检、清洁残留验证后采用安全双层密封包装并准时发货。"
          }
        },
        ready: "准备好<span class=\"red\">开始合作了吗？</span>",
        readyLead: "联系我们的技术团队讨论您的微化加工需求、申请样品可行性试验或获取报价。",
        emailUs: "直接发送邮件联系"
      },
      contactPage: {
        label: "联系我们",
        title: "让我们<span class=\"red\">建立联系</span>",
        lead: "联系我们的技术团队，深入探讨您的微化加工需求，申请小样试制或安排参观我们的工厂。",
        sendLabel: "在线留言",
        sendTitle: "取得<span class=\"red\">联系</span>",
        fields: {
          name: "姓名",
          namePl: "您的真实姓名",
          email: "电子邮箱",
          emailPl: "your@email.com",
          subject: "邮件主题",
          subjectPl: "选择咨询主题",
          subjects: {
            quote: "合同微化加工报价咨询",
            trial: "小试可行性申请",
            tour: "参观工厂预约",
            rnd: "研发技术咨询",
            general: "其他一般咨询"
          },
          message: "详细内容",
          messagePl: "请写下您的物料特性和具体加工指标要求...",
          sending: "正在调起邮件客户端...",
          sendBtn: "发送留言"
        },
        info: {
          email: "电子邮箱",
          persons: "业务联系人",
          office: "办事处与厂址",
          responseTime: "回复时效",
          responseLead: "我们会在 24 小时内对所有技术和业务咨询做出正式回复。"
        }
      },
      facilitiesPage: {
        label: "我们的设施",
        title: "世界级的<span class=\"red\">制造</span>中心",
        lead: "位于古吉拉特邦 Ankleshwar 和 Panoli 的最先进的超细微化工厂，配备了符合 FDA 标准的先进机械。",
        ankleshwar: {
          label: "Ankleshwar 设施",
          title: "专用的<span class=\"red\">超细微化</span>中心",
          desc: "我们的 Ankleshwar 设施是一个高度专业化的工厂，专注于精密微化加工，并拥有一支专业、经验丰富的团队。",
          feature1: "4 台专用的气流粉碎机",
          feature2: "专用的操作人员与工程技术团队"
        },
        panoli1: {
          label: "Panoli 设施 · 1 号工厂",
          title: "制药<span class=\"red\">卓越</span>制造",
          desc: "Panoli 的 1 号工厂是我们主要的制药制造中心，专门为符合 FDA 标准的 API 加工而设计。",
          feature1: "10 台制药专用的气流粉碎机",
          feature2: "专用的制药操作人员团队"
        },
        panoli2: {
          label: "Panoli 设施 · 2 号工厂",
          title: "化学及<span class=\"red\">特种</span>加工",
          desc: "2 号工厂专为高强度的工业加工量身定制，用于高吞吐量地处理化学品和特种化学品。",
          feature1: "7 台重型气流粉碎机",
          feature2: "4 台先进的气流分级粉碎机",
          feature3: "专用的特种化学加工操作团队"
        }
      }
    }
  }
};

const browserLang = typeof window !== "undefined" ? (navigator.language.split("-")[0] || "en") : "en";
const defaultLang = ["en", "gu", "it", "fr", "zh"].includes(browserLang) ? browserLang : "en";

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;