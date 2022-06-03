import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import EntrySummary from "../../components/EntrySummary/EntrySummary";
import NavBar from "../../components/NavBar/NavBar";
import { DiaryState } from "../../redux/interfaces/DiaryInterface";
import { RootState } from "../../redux/store/store";
import { HistoricContainer } from "./HistoricContainer";

const Historic = () => {
  const { collection }: DiaryState = useSelector(
    (state: RootState) => state.diary
  );

  return (
    <>
      <NavBar />
      <HistoricContainer>
        <Row>
          {collection.length > 0 &&
            collection.map((entry, index) => (
              <Col>
                <EntrySummary entry={entry} key={index} />
              </Col>
            ))}
        </Row>
      </HistoricContainer>
    </>
  );
};

export default Historic;
