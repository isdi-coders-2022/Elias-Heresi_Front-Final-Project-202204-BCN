import {
  Chart,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { PolarChartProps } from "../../redux/interfaces/ChartInterfaces";
import { definePermaValues } from "../../utils/definePermaValues";
import { PermaChartContainer } from "./PermaChartContainer";

Chart.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PermaChart = ({
  values,
  legend = false,
}: PolarChartProps): JSX.Element => {
  const data = definePermaValues(values);
  const options = {
    plugins: { legend: { display: legend } },
    scales: {
      r: {
        max: 10,
        min: 0,
      },
    },
  };

  return (
    <PermaChartContainer>
      <PolarArea data={data} options={options} />
    </PermaChartContainer>
  );
};

export default PermaChart;
