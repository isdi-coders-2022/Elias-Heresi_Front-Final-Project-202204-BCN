import PermaChart from "../../components/PermaChart/PermaChart";
import { HistoricContainer } from "./HistoricContainer";

const Historic = () => {
  return (
    <HistoricContainer>
      <PermaChart values={[1, 2, 3, 4, 5, 6]} />
    </HistoricContainer>
  );
};

export default Historic;
