import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import EntrySummary from "../../components/EntrySummary/EntrySummary";
import Loading from "../../components/Loading/Loading";
import NavBar from "../../components/NavBar/NavBar";
import { DiaryState } from "../../redux/interfaces/DiaryInterface";
import { Ui } from "../../redux/interfaces/UiInterface";
import { UserState } from "../../redux/interfaces/UserInterface";
import { RootState } from "../../redux/store/store";
import { HistoricContainer } from "./HistoricContainer";

const Historic = () => {
  const { loading }: Ui = useSelector((state: RootState) => state.ui);
  const { collection }: DiaryState = useSelector(
    (state: RootState) => state.diary
  );
  const { username, name }: UserState = useSelector(
    (state: RootState) => state.user
  );

  return (
    <>
      <NavBar />
      {loading && <Loading />}
      <ToastContainer />
      <HistoricContainer>
        <Row>
          <h1>{name}'s well-being history</h1>
          {collection.length > 0 ? (
            collection.map((entry, index) => (
              <Col key={index}>
                <EntrySummary entry={entry} />
              </Col>
            ))
          ) : (
            <h2>@{username} hasn't created any entries!</h2>
          )}
        </Row>
      </HistoricContainer>
    </>
  );
};

export default Historic;
