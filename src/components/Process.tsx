import { useTranslation } from "react-i18next";
import { IconCleanRoom, IconHVAC, IconCleaning, IconLab, IconQuality, IconMicronizer } from "./Icons";

export function Process() {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  const getTranslatedSteps = () => {
    switch (lang) {
      case "gu":
        return [
          { icon: IconCleanRoom, title: "ક્લીન રૂમ ટેકનોલોજી", desc: "સામગ્રી અને વ્યક્તિગત સ્લુઇસ સહિત અત્યાધુનિક ક્લીન રૂમ ટેકનોલોજી." },
          { icon: IconHVAC, title: "પર્યાવરણીય નિયંત્રણ", desc: "સમર્પિત HVAC સિસ્ટમ્સ સ્ટોરેજ અને પ્રોસેસિંગ વિસ્તારો માટે પર્યાવરણીય નિયંત્રણ પ્રદાન કરે છે." },
          { icon: IconCleaning, title: "સફાઈ ચકાસણી", desc: "સફાઈ ચકાસણી કાર્યક્રમ." },
          { icon: IconLab, title: "પ્રયોગશાળા સેવાઓ", desc: "માલવર્ન સાધન પર કણોના કદના પરીક્ષણ સહિત પ્રયોગશાળા સેવાઓ." },
          { icon: IconQuality, title: "ગુણવત્તા વ્યવસ્થાપન", desc: "cGMP દસ્તાવેજીકરણ સિસ્ટમને સુસંગત અસરકારક ગુણવત્તા વ્યવસ્થાપન સિસ્ટમ." },
          { icon: IconMicronizer, title: "સમર્પિત માઇક્રોનાઇઝર્સ", desc: "તમારી વધુ સારી સેવા માટે અમારી પાસે સંખ્યાબંધ સમર્પિત માઇક્રોનાઇઝર્સ છે." }
        ];
      case "it":
        return [
          { icon: IconCleanRoom, title: "Tecnologia per Camere Bianche", desc: "Tecnologia all'avanguardia per camere bianche, comprese chiuse per materiali e personale." },
          { icon: IconHVAC, title: "Controllo Ambientale", desc: "I sistemi HVAC dedicati forniscono il controllo ambientale per le aree di stoccaggio e lavorazione." },
          { icon: IconCleaning, title: "Verifica della Pulizia", desc: "Programma di verifica della pulizia." },
          { icon: IconLab, title: "Servizi di Laboratorio", desc: "Servizi di laboratorio inclusi i test della dimensione delle particelle su strumento MALVERN." },
          { icon: IconQuality, title: "Gestione della Qualità", desc: "Sistema di gestione della qualità efficace in conformità con il sistema di documentazione cGMP." },
          { icon: IconMicronizer, title: "Micronizzatori Dedicati", desc: "Disponiamo di numerosi micronizzatori dedicati per servirvi al meglio." }
        ];
      case "fr":
        return [
          { icon: IconCleanRoom, title: "Technologie de Salle Blanche", desc: "Technologie de pointe pour salles blanches, y compris les sas pour le matériel et le personnel." },
          { icon: IconHVAC, title: "Contrôle Environnemental", desc: "Des systèmes CVC dédiés assurent le contrôle environnemental des zones de stockage et de traitement." },
          { icon: IconCleaning, title: "Vérification du Nettoyage", desc: "Programme de vérification du nettoyage." },
          { icon: IconLab, title: "Services de Laboratoire", desc: "Services de laboratoire, y compris les tests de taille de particules sur instrument MALVERN." },
          { icon: IconQuality, title: "Gestion de la Qualité", desc: "Système de gestion de la qualité efficace en conformité avec le système de documentation cGMP." },
          { icon: IconMicronizer, title: "Microniseurs Dédiés", desc: "Nous disposons de nombreux microniseurs dédiés pour mieux vous servir." }
        ];
      case "zh":
        return [
          { icon: IconCleanRoom, title: "洁净室技术", desc: "先进的洁净室技术，包括物料和人员通道缓冲系统。" },
          { icon: IconHVAC, title: "环境控制系统", desc: "专用的 HVAC 系统，为储存和加工区域提供严格的环境温湿度控制。" },
          { icon: IconCleaning, title: "清洁残留验证", desc: "严密的清洁残留验证与清场程序。" },
          { icon: IconLab, title: "实验室检测服务", desc: "实验室检测服务，包括使用马尔文 (MALVERN) 粒度仪进行的粒径检测。" },
          { icon: IconQuality, title: "卓越质量管理", desc: "高效的质量管理体系，完全符合 cGMP 体系文件记录规范。" },
          { icon: IconMicronizer, title: "专属气流粉碎机", desc: "我们配备有多套专属气流粉碎设备，为您提供更优质的代加工服务。" }
        ];
      case "en":
      default:
        return [
          { icon: IconCleanRoom, title: "Clean Room Technology", desc: "State-of-the-Art Clean Room Technology including material and personal sluices." },
          { icon: IconHVAC, title: "Environmental Control", desc: "Dedicated HVAC Systems Provide Environmental Control for Storage & Processing areas." },
          { icon: IconCleaning, title: "Cleaning Verification", desc: "Cleaning verification program." },
          { icon: IconLab, title: "Laboratory Services", desc: "Laboratory services including Particle size testing on MALVERN Instrument." },
          { icon: IconQuality, title: "Quality Management", desc: "Effective Quality Management System in compliance with cGMP Documentation system." },
          { icon: IconMicronizer, title: "Dedicated Micronizers", desc: "We have numbers of dedicated micronizers to serve you better." }
        ];
    }
  };

  const getHeaders = () => {
    switch (lang) {
      case "gu":
        return { label: "સુવિધા", title: "અમારી આધુનિક <span class=\"red\">સુવિધા</span> માં શામેલ છે:" };
      case "it":
        return { label: "Struttura", title: "La nostra moderna <span class=\"red\">struttura</span> comprende:" };
      case "fr":
        return { label: "Installation", title: "Notre <span class=\"red\">installation</span> moderne comprend :" };
      case "zh":
        return { label: "生产设施", title: "我们现代化的<span class=\"red\">生产设施</span>包括：" };
      case "en":
      default:
        return { label: "Facility", title: "Our modern <span class=\"red\">facility</span> includes:" };
    }
  };

  const headers = getHeaders();
  const steps = getTranslatedSteps();

  return (
    <section className="block" id="process">
      <div className="container">
        <div className="section-label reveal">{headers.label}</div>
        <h2 className="section-h2 reveal" dangerouslySetInnerHTML={{ __html: headers.title }} />

        <div className="process-row">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div className="process-step reveal" key={i}>
                <div className="icon-circle">
                  <Icon />
                </div>
                <h5>{s.title}</h5>
                <p>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;
