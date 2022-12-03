import { SlArrowDown } from "react-icons/sl";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

import "./AnalyticsItem2.styles.css";

const AnalyticsItem2 = () => {
  const data = {
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ["red", "#f3f3f3", "darkgray"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="analyticsItem2_container background">
      <div className="analyticsItem2_heading background">
        <span className="para1 background">Idle time causes</span>
        <span className="para2 background">
          ALL <SlArrowDown className="background" />
        </span>
      </div>
      <>
        <div className="analyticsItem2_graph background ">
          <Doughnut data={data} aspectRatio="2/3" className=" background" />
          <p className="background  analyticsItem2_para_main">
            <span className="background analyticsItem2_para">7.5%</span>
            <br />
            Idle time
          </p>
        </div>
        <div className="analyticsItem2_stats background">
          <p className="background para">
            Missing parts <span className="background span">30%</span>
          </p>
          <p className="background para">
            Services <span className="background span">30%</span>
          </p>
          <p className="background para">
            Broken parts <span className="background span">40%</span>
          </p>
        </div>
      </>
    </div>
  );
};

export default AnalyticsItem2;
