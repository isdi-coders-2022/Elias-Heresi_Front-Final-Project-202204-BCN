import PermaChart from "../../components/PermaChart/PermaChart";
import { HistoricContainer } from "./HistoricContainer";
import { definePermaValues } from "../../utils/definePermaValues";

const Historic = () => {
  return (
    <HistoricContainer>
      <PermaChart data={definePermaValues([6, 9, 3, 3, 4, 9])} />
    </HistoricContainer>
  );
};

export default Historic;
