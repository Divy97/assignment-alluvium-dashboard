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
import "./AnalyticsItem3.styles.css";

const AnalyticsItem3 = () => {
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      label: {
        display: "none",
      },
      title: {
        display: true,
        text: "Machine utilization",
      },
    },
  };

  const labels = [
    "Machine 1",
    "Machine 2",
    "Machine 3",
    "Machine 4",
    "Machine 5",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [5, 4, 5.3, 4.3, 6],
        borderColor: "rgba(0,0,0,0.5)",
        backgroundColor: "rgba(0,0,0,0.5)",
      },
    ],
  };

  return (
    <div className="analyticsItem3_container background">
      <Bar options={options} data={data} className="background" />
    </div>
  );
};

export default AnalyticsItem3;
