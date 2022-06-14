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

export interface LineChartProps {
  props: {
    dates: string[];
    wellBeing: number[];
    positiveEmotions: number[];
    engagement: number[];
    relationships: number[];
    meaning: number[];
    accomplishment: number[];
    vitality: number[];
  };
}
