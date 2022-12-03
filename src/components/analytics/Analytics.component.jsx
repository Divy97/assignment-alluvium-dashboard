import AnalyticsItem1 from "./analyticsItem1/AnalyticsItem1.component";
import AnalyticsItem2 from "./analyticsItem2/AnalyticsItem2.component";
import AnalyticsItem3 from "./analyticsItem3/AnalyticsItem3.component";
import AnalyticsItem4 from "./analyticsItem4/AnalyticsItem4.component";
import AnalyticsItem5 from "./analyticsItem5/AnalyticsItem5.component";
import AnalyticsItem6 from "./analyticsItem6/AnalyticsItem6.component";

import "./Analytics.styles.css";

const Analytics = () => {
  return (
    <div className="analytics_grid-container">
      <div className="analytics_grid-item1">
        <AnalyticsItem1 />
      </div>
      <div className="analytics_grid-item2">
        <AnalyticsItem2 />
      </div>
      <div className="analytics_grid-item3">
        <AnalyticsItem3 />
      </div>
      <div className="analytics_grid-item4">
        <AnalyticsItem4 />
      </div>
      <div className="analytics_grid-item5">
        <AnalyticsItem5 />
      </div>
      {/*<div className="analytics_grid-item6">
        <AnalyticsItem6 />
      </div>{" "}
      */}
    </div>
  );
};

export default Analytics;
