import EntrySummary from "../../components/EntrySummary/EntrySummary";
import NavBar from "../../components/NavBar/NavBar";
import { mockApiGetResponse } from "../../redux/mocks/diaryMocks";
import { HistoricContainer } from "./HistoricContainer";

const Historic = () => {
  return (
    <>
      <NavBar />
      <HistoricContainer>
        <EntrySummary entry={mockApiGetResponse[0]} />
      </HistoricContainer>
    </>
  );
};

export default Historic;
