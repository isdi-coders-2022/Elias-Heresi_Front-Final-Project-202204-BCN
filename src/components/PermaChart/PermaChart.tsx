import { Chart, ArcElement, RadialLinearScale } from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { PermavValues } from "../../redux/interfaces/ChartInterfaces";
import { definePermaValues } from "../../utils/definePermaValues";

Chart.register(RadialLinearScale);
Chart.register(ArcElement);

const options = {
  plugins: { legend: { display: true } },
  scales: {
    r: {
      max: 10,
      min: 0,
    },
  },
};

const PermaChart = ({ values }: PermavValues): JSX.Element => {
  const data = definePermaValues(values);

  return <PolarArea data={data} options={options} />;
};

export default PermaChart;
