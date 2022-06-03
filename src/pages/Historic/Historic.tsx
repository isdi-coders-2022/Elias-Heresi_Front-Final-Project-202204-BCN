import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import EntrySummary from "../../components/EntrySummary/EntrySummary";
import NavBar from "../../components/NavBar/NavBar";
import { DiaryState } from "../../redux/interfaces/DiaryInterface";
import { RootState } from "../../redux/store/store";
import { notify } from "../../utils/toast";
import { HistoricContainer } from "./HistoricContainer";

const Historic = () => {
  const { collection }: DiaryState = useSelector(
    (state: RootState) => state.diary
  );

  return (
    <>
      <NavBar />
      <ToastContainer />
      <HistoricContainer>
        <Row>
          <h1 onClick={() => notify({ message: "Hola", type: "info" })}>
            Your well-being history
          </h1>
          {collection.length > 0 &&
            collection.map((entry, index) => (
              <Col key={index}>
                <EntrySummary entry={entry} />
              </Col>
            ))}
        </Row>
      </HistoricContainer>
    </>
  );
};

export default Historic;
