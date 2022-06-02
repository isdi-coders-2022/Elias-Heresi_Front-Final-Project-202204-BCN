import { Chart, ArcElement, RadialLinearScale } from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { PolarProps } from "../../redux/interfaces/ChartInterfaces";

Chart.register(RadialLinearScale);
Chart.register(ArcElement);

const PermaChart = (props: PolarProps): JSX.Element => {
  const options = {
    plugins: { legend: { display: true } },
    scales: {
      r: {
        max: 10,
        min: 0,
      },
    },
  };

  return <PolarArea data={props.data} options={options} />;
};

export default PermaChart;
