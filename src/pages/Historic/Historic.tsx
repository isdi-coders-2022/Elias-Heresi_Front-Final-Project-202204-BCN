import PermaChart from "../../components/PermaChart/PermaChart";
import { HistoricContainer } from "./HistoricContainer";

const data = {
  labels: [
    "Positive emotions",
    "Engagement",
    "Relationships",
    "Meaning",
    "Accomplishment",
    "Vitality",
  ],
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

const options = {
  scales: {
    r: {
      max: 10,
      min: 0,
    },
  },
};

const Historic = () => {
  return (
    <HistoricContainer>
      <PermaChart data={data} options={options} />
    </HistoricContainer>
  );
};

export default Historic;
