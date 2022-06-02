import EntrySummary from "../../components/EntrySummary/EntrySummary";
import { mockApiGetResponse } from "../../redux/mocks/diaryMocks";
import { HistoricContainer } from "./HistoricContainer";

const Historic = () => {
  return (
    <HistoricContainer>
      <EntrySummary entry={mockApiGetResponse[0]} />
    </HistoricContainer>
  );
};

export default Historic;
