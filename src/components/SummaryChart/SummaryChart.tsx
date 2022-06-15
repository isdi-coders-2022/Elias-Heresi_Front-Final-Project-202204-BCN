import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  LineController,
  Legend,
  Tooltip,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { LineChartProps } from "../../redux/interfaces/ChartInterfaces";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  BarController,
  PointElement,
  LineElement,
  LineController,
  Legend,
  Tooltip
);

const SummaryChart = ({ props }: LineChartProps): JSX.Element => {
  const {
    dates: labels,
    wellBeing,
    positiveEmotion,
    engagement,
    relationships,
    meaning,
    accomplishment,
    vitality,
  } = props;

  const data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "Well-being",
        borderColor: "rgb(54, 162, 235)",
        data: wellBeing,
      },
      {
        type: "bar" as const,
        label: "Positive emotion",
        backgroundColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        data: positiveEmotion,
      },
      {
        type: "bar" as const,
        label: "Engagement",
        backgroundColor: "rgb(75, 192, 192)",
        data: engagement,
        borderWidth: 2,
      },
      {
        type: "bar" as const,
        label: "Relationships",
        backgroundColor: "rgb(255, 205, 86)",
        data: relationships,
        borderWidth: 2,
      },
      {
        type: "bar" as const,
        label: "Meaning",
        backgroundColor: "rgb(201, 203, 207)",
        data: meaning,
        borderWidth: 2,
      },
      {
        type: "bar" as const,
        label: "Accomplishment",
        backgroundColor: "rgb(54, 162, 235)",
        data: accomplishment,
        borderWidth: 2,
      },
      {
        type: "bar" as const,
        label: "Vitality",
        backgroundColor: "rgb(217, 54, 235)",
        data: vitality,
        borderWidth: 2,
      },
    ],
  };
  return <Chart type="bar" data={data} />;
};

export default SummaryChart;
