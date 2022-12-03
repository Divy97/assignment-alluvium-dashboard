import Image1 from "../../../assets/co2.jpg";
import Image2 from "../../../assets/tree.jpeg";

import "./AnalyticsItem5.styles.css";
const AnalyticsItem5 = () => {
  return (
    <div className="analyticsItem5_container background">
      <p className="p background">Environmental Benefits</p>
      <div className="image1 background">
        <img src={Image1} alt="image1" className="image" />
        <p className="p1 background">Co2 Emission Saved</p>
        <p className="p2 background">7,6996,63 kg</p>
      </div>
      <div className="image1 background">
        <img src={Image2} alt="image2" className="image" />
        <p className="p1 background">Equivalent Trees Planted </p>
        <p
          className="p2 background"
          style={{
            marginLeft: "-11.2rem",
          }}
        >
          229,72
        </p>
      </div>
    </div>
  );
};

export default AnalyticsItem5;
