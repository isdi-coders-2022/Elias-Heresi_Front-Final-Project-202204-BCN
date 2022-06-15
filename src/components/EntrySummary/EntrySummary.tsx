import { Button, Card, Row, Col } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetCollectionActionCreator } from "../../redux/features/diarySlice";
import {
  feedbackOffActionCreator,
  feedbackOnActionCreator,
  resetEntryIdActionCreator,
  saveEntryIdActionCreator,
} from "../../redux/features/uiSlice";
import { DiaryEntry } from "../../redux/interfaces/DiaryInterface";
import { Ui } from "../../redux/interfaces/UiInterface";
import { useAppDispatch } from "../../redux/store/hooks";
import { RootState } from "../../redux/store/store";
import { deleteEntryThunk } from "../../redux/thunks/diaryThunks/diaryThunks";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import PermaChart from "../PermaChart/PermaChart";

const EntrySummary = ({ entry }: { entry: DiaryEntry }): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    positiveEmotion,
    engagement,
    relationships,
    meaning,
    accomplishment,
    vitality,
    commentary,
    wellBeing,
    date,
    id,
  } = entry;

  const { entryId }: Ui = useSelector((state: RootState) => state.ui);
  const deleteCard = () => {
    dispatch(feedbackOnActionCreator());
    dispatch(saveEntryIdActionCreator(id));
  };

  return (
    <>
      <ConfirmationModal
        displayText={`Are you sure you want to delete this entry?`}
        action={() => {
          dispatch(deleteEntryThunk(entryId));
          dispatch(resetEntryIdActionCreator());
          dispatch(feedbackOffActionCreator());
        }}
      />
      <Card style={{ width: "30rem", height: "260px" }}>
        <Row className="no-gutters">
          <Col xs={{ span: 6 }}>
            <PermaChart
              legend={false}
              values={[
                positiveEmotion,
                engagement,
                relationships,
                meaning,
                accomplishment,
                vitality,
              ]}
            />
          </Col>
          <Col>
            <Card.Body>
              <Row>
                <Col xs={{ span: 8 }}>
                  <Card.Title style={{ fontSize: 20 }}>
                    {date.toString().slice(0, 10).replaceAll("-", "/")}
                  </Card.Title>
                </Col>
                <Col xs={{ span: 2 }}>
                  <Button
                    variant="link"
                    onClick={deleteCard}
                    style={{ border: 0, marginTop: "-10px" }}
                    aria-label="delete-icon"
                  >
                    <FaTimesCircle size={30} color={"red"} />
                  </Button>
                </Col>
              </Row>

              <Card.Text style={{ fontSize: 24, fontWeight: "bold" }}>
                Well being: {wellBeing}
              </Card.Text>
              <Card.Text style={{ height: "85px" }}>{`${commentary.slice(
                0,
                74
              )}...`}</Card.Text>
              <Row>
                <Col>
                  <Button
                    variant="secondary"
                    className="d-flex align-items-center justify-content-center"
                    onClick={() => {
                      dispatch(resetCollectionActionCreator());
                      navigate(`/edit/${id}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    Edit
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    className="d-flex align-items-center justify-content-center"
                    onClick={() => {
                      dispatch(resetCollectionActionCreator());
                      navigate(`/detail/${id}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    Details
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default EntrySummary;
