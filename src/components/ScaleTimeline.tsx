import { useTranslation } from "react-i18next";

export function ScaleTimeline() {
  const { t } = useTranslation();

  return (
    <section className="block scale-section" id="scale">
      <div className="container">
        <div className="section-label reveal">{t("scaleTimeline.label")}</div>
        <h2 className="section-h2 reveal" dangerouslySetInnerHTML={{ __html: t("scaleTimeline.title") }} />

        <div className="timeline">
          <div className="timeline-step reveal">
            <div className="timeline-marker">1</div>
            <div className="timeline-content">
              <h3>{t("scaleTimeline.rnd.title")}</h3>
              <p>{t("scaleTimeline.rnd.desc")}</p>
            </div>
          </div>
          
          <div className="timeline-step reveal" style={{ transitionDelay: "100ms" }}>
            <div className="timeline-marker">2</div>
            <div className="timeline-content">
              <h3>{t("scaleTimeline.pilot.title")}</h3>
              <p>{t("scaleTimeline.pilot.desc")}</p>
            </div>
          </div>

          <div className="timeline-step reveal" style={{ transitionDelay: "200ms" }}>
            <div className="timeline-marker">3</div>
            <div className="timeline-content">
              <h3>{t("scaleTimeline.commercial.title")}</h3>
              <p>{t("scaleTimeline.commercial.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScaleTimeline;
