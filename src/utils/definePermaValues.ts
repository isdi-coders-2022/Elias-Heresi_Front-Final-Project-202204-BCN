import { PermaChartData } from "../redux/interfaces/ChartInterfaces";
import { Collection } from "../redux/interfaces/DiaryInterface";

export const definePermaValues = (values: number[]) => {
  const data: PermaChartData = {
    labels: [
      "Positive emotion",
      "Engagement",
      "Relationships",
      "Meaning",
      "Accomplishment",
      "Vitality",
    ],
    datasets: [
      {
        label: "PERMA chart",
        data: values,
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

export const createLineChartElements = (collection: Collection) => {
  const dates: any[] = [];
  const wellBeing: any[] = [];
  const positiveEmotion: any[] = [];
  const engagement: any[] = [];
  const relationships: any[] = [];
  const meaning: any[] = [];
  const accomplishment: any[] = [];
  const vitality: any[] = [];

  collection.forEach((entry) => {
    dates.push(new Date(entry.date).toISOString().slice(0, 10));
    wellBeing.push(entry.wellBeing);
    positiveEmotion.push(entry.positiveEmotion);
    engagement.push(entry.engagement);
    relationships.push(entry.relationships);
    meaning.push(entry.meaning);
    accomplishment.push(entry.accomplishment);
    vitality.push(entry.vitality);
  });

  return {
    dates,
    wellBeing,
    positiveEmotion,
    engagement,
    relationships,
    meaning,
    accomplishment,
    vitality,
  };
};
