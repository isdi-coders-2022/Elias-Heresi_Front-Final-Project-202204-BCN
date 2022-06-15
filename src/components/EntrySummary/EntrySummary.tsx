import {
  Button,
  Card,
  Row,
  Col,
  Container,
  ProgressBar,
} from "react-bootstrap";
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
import { EntrySummaryContainer } from "./EntrySummaryContainer";

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
    <EntrySummaryContainer>
      <ConfirmationModal
        displayText={`Are you sure you want to delete this entry?`}
        action={() => {
          dispatch(deleteEntryThunk(entryId));
          dispatch(resetEntryIdActionCreator());
          dispatch(feedbackOffActionCreator());
        }}
      />
      <Card>
        <Container>
          <Row className="summary__top no-gutters">
            <Col xs={{ span: 2, offset: 10 }}>
              <Button
                variant="link"
                onClick={deleteCard}
                style={{ border: 0 }}
                aria-label="delete-icon"
              >
                <FaTimesCircle size={20} color={"red"} />
              </Button>
            </Col>
          </Row>
          <Row className="summary__header no-gutters">
            <Col xs={{ span: 7 }}>
              <Card.Title>
                Well being:
                <span>
                  <ProgressBar
                    animated
                    now={wellBeing * 10}
                    style={{ height: "12px" }}
                    aria-label="progressbar"
                  />
                </span>
              </Card.Title>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Card.Subtitle>
                    {date.toString().slice(0, 10).replaceAll("-", "/")}
                  </Card.Subtitle>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="summary__mid no-gutters">
            <Col xs={{ span: 7 }}>
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
              <Card.Text>{`${commentary.slice(0, 30)}...`}</Card.Text>
            </Col>
          </Row>
          <Row className="summary__lower no-gutters">
            <Col xs={{ span: 7 }} align="center">
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
          </Row>
        </Container>
      </Card>
    </EntrySummaryContainer>
  );
};

export default EntrySummary;
