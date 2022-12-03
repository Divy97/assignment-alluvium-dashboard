import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

import "./AnalyticsItem6.styles.css";
const AnalyticsItem6 = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      label: {
        display: "none",
      },
      title: {
        display: true,
        text: "Spare capacity",
      },
    },
  };

  const labels = ["M 1", "M 2", "M 3", "M 4", "M 5", "M 6", "M 7", "M 8 "];
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [1.3, 3.3, 2, 4, 5, 3.3, 6.1, 3.1],
        backgroundColor: "#000",
      },
    ],
  };

  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      label: {
        display: "none",
      },
      title: {
        display: true,
        text: "Throughput",
      },
    },
  };

  const data2 = {
    labels,
    datasets: [
      {
        label: "",
        data: [2, 3.5, 6, -2, -3, 5, 3, 7],
        borderColor: "#000",
        backgroundColor: "#000",
      },
    ],
  };

  return (
    <div className="analyticsItem6_container ">
      <div className="left  background">
        <Line options={options2} data={data2} className="background" />;
      </div>
      <div className="right background">
        <Bar options={options} data={data} className="background" />
      </div>
    </div>
  );
};

export default AnalyticsItem6;
