import { VscGraph } from "react-icons/vsc";
import { GrServices, GrUserWorker } from "react-icons/gr";
import { GiCctvCamera } from "react-icons/gi";
import "./AnalyticsItem1.styles.css";

const AnalyticsItem1 = () => {
  const user = "Pradeep";
  return (
    <div className="analyticsItem1_container background">
      <h1 className="analyticsItem1_heading background">Hello {user}</h1>
      <p className="analyticsItem1_para background">
        Welcome back to ALvision Stamp!
      </p>
      <div className="item1_stats background">
        <div className="stats_item background">
          <div className="item1_div background">
            <GrServices className="item1_icons" />
            <span className="item1_span">10</span>
          </div>
          <p className="item1_para background">Machine count</p>
        </div>
        <div className="stats_item background">
          <div className="item1_div background">
            <GrUserWorker className="item1_icons" />
            <span className="item1_span">10</span>
          </div>
          <p className="item1_para background">Worker count</p>
        </div>
        <div className="stats_item background">
          <div className="item1_div background">
            <GiCctvCamera className="item1_icons" />
            <span className="item1_span">5</span>
          </div>
          <p className="item1_para background">Camera count</p>
        </div>
        <div className="stats_item background">
          <div className="item1_div background">
            <VscGraph className="item1_icons" />
            <span className="item1_span">525</span>
          </div>
          <p className="item1_para background">Production count</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsItem1;
