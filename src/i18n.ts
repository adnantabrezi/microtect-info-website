import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        facilities: "Facilities",
        contact: "Contact",
        contactUs: "Contact Us"
      },
      hero: {
        eyebrow: "MicroTech India · Your Trusted Independent CMO",
        title: "Your M<span class=\"exclaim\">!</span>cro partner<br />for <span class=\"red\">micronization</span> work —<br />APIs, pharmaceuticals,<br />chemicals.",
        lead: "MicroTech (INDIA) is one of the most trusted leader of Micronisation Service Provider for the API and Bulk Drugs. Located at Ankleshwar and Panoli (Asia's largest industrial area) in Gujarat, INDIA, the facilities are of approved FDA standards with more than 7000 sqft. space. Our team has more than 2 decades of experience in providing these services to our clientele.",
        ctaContact: "Contact Us",
        ctaMesh: "View Mesh Sizes",
        fda: "FDA Approved Facility",
        sqft: "Sqft. Facility",
        years: "Years Experience",
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
          tan: "Tan Plant Extract",
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
        lead: "Whether you need a small 10g trial or high-volume commercial production, our engineering team is here to assist you.",
        cta: "Contact Our Engineers",
        quick: "Quick Contact",
        response: "We respond to all technical inquiries within 24 hours.",
        persons: "Contact Persons"
      },
      footer: {
        rights: "All Rights Reserved.",
        designed: "Designed with precision for pharmaceutical excellence."
      },
      aboutPage: {
        label: "About Microtech India",
        title: "16 Years of <span class=\"red\">Pharmaceutical</span> Excellence",
        lead: "A family-owned Contract Manufacturing Organization dedicated to precision micronization.",
        whoLabel: "At a Glance",
        whoTitle: "Who we <span class=\"red\">are</span>",
        whoLead: "MICROTECH INDIA is a family-owned, independent Contract Manufacturing Organization (CMO) with 16 years of experience in milling and micronizing pharmaceutical materials. We process active pharmaceutical ingredients (APIs), excipients, and other powdered substances with high precision, fully compliant with current FDA standards. Our modern facilities and long standing experience enable us to deliver accurate, high quality, and reliable solutions to our clients.",
        cardExp: "Years Experience",
        cardFDA: "Compliant Facility",
        cardGMP: "Standard Practices",
        cardCMO: "Contract Manufacturing",
        capLabel: "Features",
        capTitle: "Our <span class=\"red\">capabilities</span>",
        caps: {
          particle: {
            title: "Any Particle Ranges",
            desc: "Average particle size any ranges microns oil and moisture free high pressure filtered air."
          },
          nitrogen: {
            title: "Nitrogen Air Available",
            desc: "Nitrogen air is also available for air sensitive products."
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
            desc: "Reproducible & High throughput process."
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
            desc: "Oil and Moisture free high pressure air and Nitrogen air also for sensitive products.",
            tag: "Clean Air"
          }
        },
        companyLabel: "Our Company",
        companyTitle: "Fast Growing <span class=\"red\">Pharma</span> Company",
        companyLead: "We offer consistent, reliable and cost-effective contract micronization services for your SMALL QUANTITY (10 GRAMS) TO LARGE VOLUME ROUTINE PRODUCTIONS. We will help you to reduce \"TIME TO MARKET\" for your R&D projects.",
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
            desc: "From small quantity trials (as low as 10 grams) to full-scale production runs, we support your R&D journey and help reduce your time-to-market.",
            features: ["Small batch trials", "Scale-up support", "Fast turnaround"]
          },
          nitrogen: {
            title: "Nitrogen Milling",
            desc: "Inert atmosphere milling using nitrogen air for oxygen-sensitive, moisture-sensitive, or thermolabile pharmaceutical compounds. Zero degradation guaranteed.",
            features: ["Inert atmosphere", "Moisture-free", "Temperature controlled"]
          },
          qa: {
            title: "Quality Assurance",
            desc: "End-to-end quality management compliant with cGMP documentation standards. Every batch undergoes rigorous quality checks with cleaning verification protocols.",
            features: ["cGMP compliance", "Cleaning verification", "Quality documentation"]
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
            desc: "Rigorous quality checks with MALVERN PSD analysis, cleaning verification, and secure packaging for delivery."
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
          responseLead: "We respond to all technical inquiries within 24 hours."
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
          feature2: "Dedicated operational staff and engineering team"
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
          desc: "Plant 2 is tailored for robust industrial processing, handling chemicals and specialty compounds with high throughput capacity.",
          feature1: "7 Heavy-duty Air Jet Mills",
          feature2: "4 Advanced Air Classifier Mills",
          feature3: "Dedicated specialty chemical processing staff"
        }
      }
    }
  },
  gu: {
    translation: {
      nav: {
        home: "હોમ",
        about: "અમારા વિશે",
        services: "સેવાઓ",
        facilities: "સુવિધાઓ",
        contact: "સંપર્ક",
        contactUs: "અમારો સંપર્ક કરો"
      },
      hero: {
        eyebrow: "માઇક્રોટેક ઇન્ડિયા · તમારી વિશ્વાસુ સ્વતંત્ર CMO",
        title: "તમારો M<span class=\"exclaim\">!</span>cro પાર્ટનર<br /><span class=\"red\">માઇક્રોનાઇઝેશન</span> વર્ક માટે —<br />APIs, ફાર્માસ્યુટિકલ્સ,<br />કેમિકલ્સ.",
        lead: "માઇક્રોટેક (ઇન્ડિયા) એ API અને બલ્ક ડ્રગ્સ માટે માઇક્રોનાઇઝેશન સેવા પ્રદાતા તરીકે સૌથી વધુ વિશ્વસનીય કંપની છે. ગુજરાત, ભારતમાં અંકલેશ્વર અને પાનોલી (એશિયાનો સૌથી મોટો ઔદ્યોગિક વિસ્તાર) ખાતે આવેલી આ સુવિધાઓ 7000 ચોરસ ફૂટથી વધુ જગ્યા સાથે માન્ય FDA ધોરણો ધરાવે છે. અમારી ટીમ અમારી પ્રદાન કરેલી સેવાઓમાં ૨ દાયકાથી વધુનો અનુભવ ધરાવે છે.",
        ctaContact: "અમારો સંપર્ક કરો",
        ctaMesh: "મેશ કદ જુઓ",
        fda: "FDA મંજૂર સુવિધા",
        sqft: "ચોરસ ફૂટ સુવિધા",
        years: "વર્ષોનો અનુભવ",
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
          tan: "ટેન વનસ્પતિ અર્ક",
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
        title: "૧૬ વર્ષની <span class=\"red\">ફાર્માસ્યુટિકલ</span> ઉત્કૃષ્ટતા",
        lead: "ચોક્કસ માઇક્રોનાઇઝેશન માટે સમર્પિત કૌટુંબિક માલિકીની કોન્ટ્રાક્ટ મેન્યુફેક્ચરિંગ ઓર્ગેનાઇઝેશન.",
        whoLabel: "એક નજરમાં",
        whoTitle: "આપણે <span class=\"red\">કોણ</span> છીએ",
        whoLead: "માઇક્રોટેક ઇન્ડિયા એ ફાર્માસ્યુટિકલ સામગ્રીના મિલિંગ અને માઇક્રોનાઇઝિંગમાં ૧૬ વર્ષનો અનુભવ ધરાવતી કૌટુંબિક માલિકીની, સ્વતંત્ર કોન્ટ્રાક્ટ મેન્યુફેક્ચરિંગ ઓર્ગેનાઇઝેશન (CMO) છે. અમે વર્તમાન FDA ધોરણો સાથે સંપૂર્ણ સુસંગત રહીને એક્ટિવ ફાર્માસ્યુટિકલ ઘટકો (APIs), એક્સિપિયન્ટ્સ અને અન્ય પાવડર પદાર્થો પર પ્રક્રિયા કરીએ છીએ. અમારી આધુનિક સુવિધાઓ અને લાંબા ગાળાનો અનુભવ અમને અમારા ગ્રાહકોને સચોટ, ઉચ્ચ ગુણવત્તાવાળા અને વિશ્વસનીય ઉકેલો પહોંચાડવા સક્ષમ બનાવે છે.",
        cardExp: "વર્ષોનો અનુભવ",
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
            title: "નાઇટ્રોજન હવા ઉપલબ્ધ",
            desc: "હવા પ્રત્યે સંવેદનશીલ ઉત્પાદનો માટે નાઇટ્રોજન હવા પણ ઉપલબ્ધ છે."
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
            desc: "તેલ અને ભેજ મુક્ત ઉચ્ચ દબાણવાળી હવા અને સંવેદનશીલ ઉત્પાદનો માટે નાઇટ્રોજન હવા.",
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
            desc: "ઓક્સિજન-સંવેદનશીલ, ભેજ-સંવેદનશીલ અથવા થર્મોલેબાઇલ ફાર્માસ્યુટિકલ સંયોજનો માટે નાઇટ્રોજન હવાનો ઉપયોગ કરીને નિષ્ક્રિય વાતાવરણ મિલિંગ. શૂન્ય બગાડની ખાતરી.",
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
          desc: "પ્લાન્ટ ૨ ઔદ્યોગિક પ્રક્રિયા માટે તૈયાર કરવામાં આવ્યો છે, જે ઉચ્ચ ક્ષમતા સાથે રસાયણો અને વિશેષ સંયોજનોનું સંચાલન કરે છે.",
          feature1: "૭ હેવી-ડ્યુટી એર જેટ મિલ્સ",
          feature2: "૪ એડવાન્સ્ડ એર ક્લાસિફાયર મિલ્સ",
          feature3: "સમર્પિત સ્પેશિયાલિટી કેમિકલ પ્રોસેસિંગ સ્ટાફ"
        }
      }
    }
  },
  it: {
    translation: {
      nav: {
        home: "Home",
        about: "Chi Siamo",
        services: "Servizi",
        facilities: "Strutture",
        contact: "Contatti",
        contactUs: "Contattaci"
      },
      hero: {
        eyebrow: "MicroTech India · La tua CMO indipendente di fiducia",
        title: "Il tuo partner M<span class=\"exclaim\">!</span>cro<br />per lavori di <span class=\"red\">micronizzazione</span> —<br />API, prodotti farmaceutici,<br />prodotti chimici.",
        lead: "MicroTech (INDIA) è uno dei leader più affidabili nei servizi di micronizzazione per API e farmaci sfusi. Situate ad Ankleshwar e Panoli (la più grande area industriale dell'Asia) nel Gujarat, INDIA, le strutture sono conformi agli standard FDA con oltre 7000 piedi quadrati di spazio. Il nostro team ha più di 2 decenni di esperienza.",
        ctaContact: "Contattaci",
        ctaMesh: "Vedi Dimensioni Mesh",
        fda: "Struttura Approvata FDA",
        sqft: "Struttura di oltre 7000 Mqft.",
        years: "Anni di Esperienza",
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
          tan: "Estratto Vegetale Chiaro",
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
        title: "16 Anni di Eccellenza <span class=\"red\">Farmaceutica</span>",
        lead: "Un'organizzazione di produzione a contratto a conduzione familiare dedicata alla micronizzazione di precisione.",
        whoLabel: "In Sintesi",
        whoTitle: "Chi <span class=\"red\">Siamo</span>",
        whoLead: "MICROTECH INDIA è una Contract Manufacturing Organization (CMO) indipendente e a conduzione familiare con 16 anni di esperienza nella macinazione e micronizzazione di materiali farmaceutici. Lavoriamo principi attivi farmaceutici (API), eccipienti e altre sostanze in polvere con alta precisione, in piena conformità con gli standard FDA attuali. Le nostre strutture moderne e la lunga esperienza ci consentono di fornire soluzioni accurate, di alta qualità e affidabili ai nostri clienti.",
        cardExp: "Anni di Esperienza",
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
          desc: "L'Impianto 2 è studiato per processi industriali robusti, in grado di gestire sostanze chimiche e composti speciali ad alta capacità.",
          feature1: "7 Mulini a Getto d'Aria per impieghi gravosi",
          feature2: "4 Mulini Classificatori ad Aria Avanzati",
          feature3: "Personale dedicato alla lavorazione chimica speciale"
        }
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "À Propos",
        services: "Services",
        facilities: "Installations",
        contact: "Contact",
        contactUs: "Contactez-nous"
      },
      hero: {
        eyebrow: "MicroTech India · Votre CMO indépendant de confiance",
        title: "Votre partenaire M<span class=\"exclaim\">!</span>cro<br />pour les travaux de <span class=\"red\">micronisation</span> —<br />API, produits pharmaceutiques,<br />produits chimiques.",
        lead: "MicroTech (INDIA) est l'un des leaders les plus fiables en matière de services de micronisation pour les API et les médicaments en vrac. Situées à Ankleshwar et Panoli (la grande zone industrielle d'Asie) dans le Gujarat, en INDE, les installations respectent les normes FDA avec plus de 7000 pieds carrés d'espace. Notre équipe possède plus de 2 decennies d'expérience.",
        ctaContact: "Contactez-nous",
        ctaMesh: "Voir les Tailles de Mesh",
        fda: "Installation Approuvée par la FDA",
        sqft: "Installation de 7000+ Sqft.",
        years: "Années d'Expérience",
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
          tan: "Extrait de Plante Fauve",
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
        title: "16 Ans d'Excellence <span class=\"red\">Pharmaceutique</span>",
        lead: "Une organisation de fabrication sous contrat familiale dédiée à la micronisation de précision.",
        whoLabel: "En un Coup d'Œil",
        whoTitle: "Qui nous <span class=\"red\">sommes</span>",
        whoLead: "MICROTECH INDIA est une organisation de fabrication sous contrat (CMO) familiale et indépendante, forte de 16 ans d'expérience dans le broyage et la micronisation de matériaux pharmaceutiques. We traitons des ingrédients pharmaceutiques actifs (API), des excipients et d'autres substances en poudre avec une grande précision, en totale conformité avec les normes FDA actuelles. Nos installations modernes et notre longue expérience nous permettent de fournir des solutions précises, de haute qualité et fiables à nos clients.",
        cardExp: "Années d'Expérience",
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
          desc: "L'Usine 2 est conçue pour des processus industriels robustes, traitant des produits chimiques et des composés spéciaux avec une grande capacité de débit.",
          feature1: "7 Broyeurs à Jet d'Air Industriels",
          feature2: "4 Broyeurs Classificateurs à Air Avancés",
          feature3: "Personnel dédié au traitement chimique spécialisé"
        }
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: "首页",
        about: "关于我们",
        services: "我们的服务",
        facilities: "设施",
        contact: "联系我们",
        contactUs: "联系我们"
      },
      hero: {
        eyebrow: "MicroTech India · 您值得信赖的独立 CMO 合作伙伴",
        title: "您的 M<span class=\"exclaim\">!</span>cro 合作伙伴<br />专注于<span class=\"red\">超细微化</span>加工 —<br />API、制药、化学品。",
        lead: "MicroTech (INDIA) 是最受信任的 API 和散装药物超细微化服务提供商之一。设施位于印度古吉拉特邦的 Ankleshwar 和 Panoli（亚洲最大的工业区），符合 FDA 批准标准，空间超过 7000 平方英尺。我们的团队拥有超过 20 年的行业服务经验。",
        ctaContact: "联系我们",
        ctaMesh: "查看网目尺寸",
        fda: "FDA 批准设施",
        sqft: "7000+ 平方英尺设施",
        years: "20+ 年行业经验",
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
          tan: "棕褐色植物提取物",
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
        title: "16 载<span class=\"red\">制药领域</span>卓越沉淀",
        lead: "一家致力于精密超细微化加工的家族式合同制造组织 (CMO)。",
        whoLabel: "企业概览",
        whoTitle: "我们是<span class=\"red\">谁</span>",
        whoLead: "MICROTECH INDIA 是一家家族拥有、独立的合同制造组织 (CMO)，在药物原料的研磨和超细微化方面拥有 16 年的经验。我们以极高的精准度处理活性制药成分 (API)、辅料和其他粉末物质，完全符合当前的 FDA 标准。我们现代化的设施和深厚的行业经验使我们能够为客户提供精准、优质和可靠的解决方案。",
        cardExp: "年行业经验",
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
          desc: "2 号工厂专为高强度的工业加工量身定制，用于高吞吐量地处理化学品和特种化合物。",
          feature1: "7 台重型气流粉碎机",
          feature2: "4 台先进的气流分级粉碎机",
          feature3: "专用的特种化学加工操作团队"
        }
      }
    }
  }
};

const browserLang = typeof window !== "undefined" ? navigator.language.split("-")[0] : "en";
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
