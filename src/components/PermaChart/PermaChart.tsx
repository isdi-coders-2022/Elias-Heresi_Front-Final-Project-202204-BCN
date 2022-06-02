import { Chart, ArcElement, RadialLinearScale } from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { PolarProps } from "../../redux/interfaces/ChartInterfaces";
import { definePermaValues } from "../../utils/definePermaValues";

Chart.register(RadialLinearScale);
Chart.register(ArcElement);

const PermaChart = (): JSX.Element => {
  const options = {
    plugins: { legend: { display: true } },
    scales: {
      r: {
        max: 10,
        min: 0,
      },
    },
  };

  const data = definePermaValues([1, 2, 3, 4, 5, 6]);
  console.log(data);

  return <PolarArea data={data} options={options} />;
};

export default PermaChart;
