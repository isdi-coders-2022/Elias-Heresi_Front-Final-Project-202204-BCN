import type { ChartData } from "chart.js";

export interface PolarProps {
  data: ChartData<"polarArea">;
}

export interface PermaChartData {
  labels: string[];
  datasets: [{ label: string; data: number[]; backgroundColor: string[] }];
}

export interface PermavValues {
  values: number[];
}
