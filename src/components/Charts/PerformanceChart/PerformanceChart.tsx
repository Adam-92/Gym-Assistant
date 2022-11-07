import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { options, initialData } from "./config/config";
import { Line } from "react-chartjs-2";
import useNoRequestDataChart from "../../../hooks/useNoRequestDataChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
//Z tym typem problem tutaj też
const PerformanceChart = ({ results }: any) => {
  const { updatedData } = useNoRequestDataChart(initialData, results);

  return <Line options={options} data={updatedData} />;
};

export default PerformanceChart;
