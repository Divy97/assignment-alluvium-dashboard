import { SlArrowDown } from "react-icons/sl";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import "./AnalyticsItem4.styles.css";
const AnalyticsItem4 = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 2, 3, 4, 5, 6, 7],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [1, 2, 3, 4, 5, 6, 7],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="analyticsItem4_container background">
      <div className="analyticsItem4_left background">
        <p className="analyticsItem4_p background">
          Machine 1
          <SlArrowDown
            className="background"
            style={{
              marginLeft: "0.5rem",
            }}
          />
        </p>
        <div className="analyticsItem4_running">Running</div>
        <div className="background">
          <p className="background analyticalItem4_para">
            Throughput{" "}
            <span
              className="background analyticsItem4_span"
              style={{
                marginLeft: "3.2rem",
              }}
            >
              30%
            </span>
          </p>
          <p className="background analyticalItem4_para">
            OEE{" "}
            <span
              className="background analyticsItem4_span"
              style={{
                marginLeft: "6.2rem",
              }}
            >
              30%
            </span>
          </p>
          <p className="background analyticalItem4_para">
            Capacity <br /> Utilization{" "}
            <span
              className="background analyticsItem4_span"
              style={{
                marginLeft: "4rem",
              }}
            >
              40%
            </span>
          </p>
        </div>
      </div>
      <div className="analyticsItem4_right background">
        {/* <Bar options={options} data={data} />; */}
      </div>
    </div>
  );
};

export default AnalyticsItem4;
