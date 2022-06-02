import type { ChartData, ChartOptions } from "chart.js";

export interface PolarProps {
  data: ChartData<"polarArea">;
  options: ChartOptions<"polarArea">;
}
