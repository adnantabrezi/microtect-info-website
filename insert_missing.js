const fs = require('fs');
let content = fs.readFileSync('src/i18n.ts', 'utf8');

const additions = {
  gu: `      servicesGrid: {
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
      },\n`,
  it: `      servicesGrid: {
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
      },\n`,
  fr: `      servicesGrid: {
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
      },\n`,
  zh: `      servicesGrid: {
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
      },\n`
};

for (const lang of ['gu', 'it', 'fr', 'zh']) {
  const marker = lang + ': {\n    translation: {\n';
  content = content.replace(marker, marker + additions[lang]);
}

fs.writeFileSync('src/i18n.ts', content);
console.log('Missing translations successfully inserted.');
