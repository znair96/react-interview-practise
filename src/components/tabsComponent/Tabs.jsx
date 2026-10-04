import React, { useState } from "react";
import "./styles.css";

function Tabs({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      {tabs.length ? (
        <div>
          <div className="tabs">
            {tabs.map((tab, index) => (
              <p
                onClick={() => setSelectedTab(index)}
                className={selectedTab === index ? "highlight" : ""}
                style={{
                  cursor: "pointer",
                }}
              >
                {tab.title ?? `Tab ${index + 1}`}
              </p>
            ))}
          </div>

          <div className="content">{tabs[selectedTab].content}</div>
        </div>
      ) : (
        <>No tabs available</>
      )}
    </div>
  );
}

export default Tabs;
