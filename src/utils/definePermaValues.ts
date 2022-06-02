import { PermaChartData } from "../redux/interfaces/ChartInterfaces";

export const definePermaValues = (values: number[]) => {
  const data: PermaChartData = {
    labels: ["P", "E", "R", "M", "A", "V"],
    datasets: [
      {
        label: "PERMA chart",
        data: [6, 9, 7, 3, 4, 9],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
          "rgb(217, 54, 235)",
        ],
      },
    ],
  };
  return data;
};
