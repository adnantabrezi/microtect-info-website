import { useState } from "react";

export interface TabData {
  id: string;
  label: string;
  title: string;
  desc: string;
  features: string[];
  image: string;
}

export function EquipmentTabs({ tabs }: { tabs: TabData[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <div className="equipment-tabs reveal">
      <div className="equipment-tabs-header">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`equipment-tab-btn ${activeTab === t.id ? "active" : ""}`}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      
      <div className="equipment-tab-content">
        <div className="equipment-tab-text equipment-tab-pane" key={`text-${currentTab.id}`}>
          <h3>{currentTab.title}</h3>
          <p>{currentTab.desc}</p>
          <ul className="equipment-tab-features">
            {currentTab.features.map((f, i) => (
              <li key={i}><span>✓</span> {f}</li>
            ))}
          </ul>
        </div>
        <div className="equipment-tab-image equipment-tab-pane" key={`img-${currentTab.id}`}>
          <img src={currentTab.image} alt={currentTab.title} />
        </div>
      </div>
    </div>
  );
}

export default EquipmentTabs;
