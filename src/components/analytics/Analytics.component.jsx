import React from "react";
import AnalyticsItem1 from "./analyticsItem1/AnalyticsItem1.component";
import "./Analytics.styles.css";
import AnalyticsItem2 from "./analyticsItem2/AnalyticsItem2.component";

const Analytics = () => {
  return (
    <div className="analytics_grid-container">
      <div className="analytics_grid-item1">
        <AnalyticsItem1 />
      </div>
      <div className="analytics_grid-item2">
        <AnalyticsItem2 />
      </div>
      <div className="analytics_grid-item3">3</div>
      <div className="analytics_grid-item4">4</div>
      <div className="analytics_grid-item5">5</div>
      <div className="analytics_grid-item6">6</div>
      <div className="analytics_grid-item7">7</div>
    </div>
  );
};

export default Analytics;
