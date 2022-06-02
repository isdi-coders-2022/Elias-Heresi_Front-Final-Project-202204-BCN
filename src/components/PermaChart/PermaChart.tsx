import { Chart, ArcElement, RadialLinearScale } from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { PolarProps } from "../../redux/interfaces/ChartInterfaces";

Chart.register(RadialLinearScale);
Chart.register(ArcElement);

const PermaChart = (props: PolarProps): JSX.Element => {
  return <PolarArea data={props.data} options={props.options} />;
};

export default PermaChart;
