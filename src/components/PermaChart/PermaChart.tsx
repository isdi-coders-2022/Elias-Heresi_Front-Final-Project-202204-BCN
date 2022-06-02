import { Chart, ArcElement, RadialLinearScale } from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { PolarProps } from "../../redux/interfaces/ChartInterfaces";
import { definePermaValues } from "../../utils/definePermaValues";

Chart.register(RadialLinearScale);
Chart.register(ArcElement);

const PermaChart = ({ values }: any): JSX.Element => {
  const options = {
    plugins: { legend: { display: true } },
    scales: {
      r: {
        max: 10,
        min: 0,
      },
    },
  };

  console.log(values);
  const data = definePermaValues(values);

  return <PolarArea data={data} options={options} />;
};

export default PermaChart;
