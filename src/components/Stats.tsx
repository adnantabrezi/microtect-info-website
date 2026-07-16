import { useTranslation } from "react-i18next";

export function Stats() {
  const { t } = useTranslation();

  const statItems = [
    { id: "experience", value: t("stats.experience.value"), label: t("stats.experience.label") },
    { id: "projects", value: t("stats.projects.value"), label: t("stats.projects.label") },
    { id: "precision", value: t("stats.precision.value"), label: t("stats.precision.label") },
    { id: "capacity", value: t("stats.capacity.value"), label: t("stats.capacity.label") }
  ];

  return (
    <section className="block stats-section" id="stats">
      <div className="container">
        <div className="stats-grid">
          {statItems.map((stat, i) => (
            <div className="stat-item reveal" key={stat.id} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
