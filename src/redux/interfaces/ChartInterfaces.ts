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

export interface PolarChartProps {
  values: number[];
  legend?: boolean;
}

export interface LineChart {
  dates: string[];
  wellBeing: number[];
  positiveEmotion: number[];
  engagement: number[];
  relationships: number[];
  meaning: number[];
  accomplishment: number[];
  vitality: number[];
}

export interface LineChartProps {
  props: LineChart;
}

export interface TrendData {
  name: string;
  average: number;
  sd: number;
}
