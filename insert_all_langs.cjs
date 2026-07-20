const fs = require('fs');
let content = fs.readFileSync('src/i18n.ts', 'utf8');

const additions = {
  gu: `
      showcase: {
        label: "દ્રશ્ય પ્રદર્શન",
        title: "માઇક્રોનાઇઝેશન <span class=\\"red\\">અસર</span>",
        lead: "જુઓ કે કેવી રીતે અમારી ચોક્કસ કદ ઘટાડવાની પ્રક્રિયા બરછટ સક્રિય ફાર્માસ્યુટિકલ ઘટકોને અત્યંત ઝીણા પાવડરમાં બદલે છે.",
        coarse: "બરછટ કણો",
        fine: "માઇક્રોનાઇઝ્ડ પાવડર",
        materials: {
          white: "સફેદ ક્રિસ્ટલાઇન API",
          tan: "ટેન પ્લાન્ટ અર્ક",
          yellow: "પીળો એક્સિપિયન્ટ",
          brown: "બ્રાઉન હર્બલ પાવડર",
          cream: "ક્રીમ API પાવડર",
          grey: "ગ્રે મિનરલ સંયોજન"
        }
      },
      particleSize: {
        label: "તુલનાત્મક કણોનું કદ",
        title: "સ્ટાન્ડર્ડ US મેશ <span class=\\"red\\">રૂપાંતર</span> ચાર્ટ",
        lead: "નીચે અમારી માઇક્રોનાઇઝેશન પ્રક્રિયાઓમાં ઉપયોગમાં લેવાતા માનક કણોના કદના રૂપાંતર માટે સંદર્ભ કોષ્ટક છે.",
        table: {
          mesh: "US મેશ",
          microns: "માઇક્રોન (µm)",
          inches: "ઇંચ",
          visual: "સાપેક્ષ કદ"
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
`,
  it: `
      showcase: {
        label: "Dimostrazione Visiva",
        title: "Effetto <span class=\\"red\\">Micronizzazione</span>",
        lead: "Guarda come il nostro processo di riduzione delle dimensioni trasforma ingredienti grossolani in polveri finissime.",
        coarse: "Particelle Grossolane",
        fine: "Polvere Micronizzata",
        materials: {
          white: "API Cristallino Bianco",
          tan: "Estratto Vegetale Bruno",
          yellow: "Eccipiente Giallo",
          brown: "Polvere di Erbe Marrone",
          cream: "Polvere API Crema",
          grey: "Composto Minerale Grigio"
        }
      },
      particleSize: {
        label: "Dimensioni delle Particelle Comparative",
        title: "Tabella di <span class=\\"red\\">Conversione</span> Standard US Mesh",
        lead: "Di seguito è riportata una tabella di riferimento per le conversioni delle dimensioni delle particelle.",
        table: {
          mesh: "US Mesh",
          microns: "Micron (µm)",
          inches: "Pollici",
          visual: "Dimensione Relativa"
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
`,
  fr: `
      showcase: {
        label: "Démonstration Visuelle",
        title: "Effet de <span class=\\"red\\">Micronisation</span>",
        lead: "Découvrez comment notre processus de précision transforme les ingrédients bruts en poudres extrêmement fines.",
        coarse: "Particules Grossières",
        fine: "Poudre Micronisée",
        materials: {
          white: "API Cristallin Blanc",
          tan: "Extrait Végétal Havane",
          yellow: "Excipient Jaune",
          brown: "Poudre d'Herbes Brune",
          cream: "Poudre API Crème",
          grey: "Composé Minéral Gris"
        }
      },
      particleSize: {
        label: "Taille des Particules Comparative",
        title: "Tableau de <span class=\\"red\\">Conversion</span> US Mesh",
        lead: "Vous trouverez ci-dessous un tableau de référence pour les conversions de taille de particules.",
        table: {
          mesh: "US Mesh",
          microns: "Microns (µm)",
          inches: "Pouces",
          visual: "Taille Relative"
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
`,
  zh: `
      showcase: {
        label: "视觉演示",
        title: "微化加工<span class=\\"red\\">效果</span>",
        lead: "了解我们的精密粒度减小工艺如何将粗糙的活性成分转化为超细粉末。",
        coarse: "粗颗粒",
        fine: "微化粉末",
        materials: {
          white: "白色结晶原料药",
          tan: "棕褐色植物提取物",
          yellow: "黄色辅料",
          brown: "棕色草本粉末",
          cream: "奶油色原料药",
          grey: "灰色矿物化合物"
        }
      },
      particleSize: {
        label: "粒度比较",
        title: "标准美国网目<span class=\\"red\\">换算</span>表",
        lead: "以下是微化过程中使用的标准颗粒粒度换算参考表。",
        table: {
          mesh: "美国网目",
          microns: "微米 (µm)",
          inches: "英寸",
          visual: "相对大小"
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
`
};

for (const lang of ['gu', 'it', 'fr', 'zh']) {
  const regex = new RegExp(lang + ':\\s*\\{\\s*translation:\\s*\\{');
  content = content.replace(regex, lang + ': {\n    translation: {\n' + additions[lang]);
}

fs.writeFileSync('src/i18n.ts', content);
console.log('Translations successfully inserted.');
