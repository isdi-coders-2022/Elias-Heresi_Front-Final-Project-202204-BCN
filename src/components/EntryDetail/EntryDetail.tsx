import { Col, Container, ProgressBar, Row, Table } from "react-bootstrap";

import { useSelector } from "react-redux";
import {
  feedbackOffActionCreator,
  resetEntryIdActionCreator,
} from "../../redux/features/uiSlice";
import { DiaryEntry } from "../../redux/interfaces/DiaryInterface";
import { Ui } from "../../redux/interfaces/UiInterface";
import { useAppDispatch } from "../../redux/store/hooks";
import { RootState } from "../../redux/store/store";
import { deleteEntryThunk } from "../../redux/thunks/diaryThunks/diaryThunks";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import PermaChart from "../PermaChart/PermaChart";
import EntryDetailContainer from "./EntryDetailContainer";

const EntryDetail = ({ entry }: { entry: DiaryEntry }): JSX.Element => {
  const dispatch = useAppDispatch();

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
    backup,
  } = entry;

  const { entryId }: Ui = useSelector((state: RootState) => state.ui);

  return (
    <EntryDetailContainer>
      <ConfirmationModal
        displayText={`Are you sure you want to delete this entry?`}
        action={() => {
          dispatch(deleteEntryThunk(entryId));
          dispatch(resetEntryIdActionCreator());
          dispatch(feedbackOffActionCreator());
        }}
      />
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <td>{date.toString().slice(0, 10).replaceAll("-", "/")}</td>
                </tr>
                <tr>
                  <td>{commentary}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>General well-being:</h2>
            <ProgressBar
              animated
              now={wellBeing * 10}
              style={{ height: "32px" }}
            />
          </Col>
        </Row>
        <Row className="detail__center">
          <Col sm={{ span: 12 }} md={{ span: 6 }}>
            <h2>PERMAV status:</h2>
            <PermaChart
              values={[
                positiveEmotion,
                engagement,
                relationships,
                meaning,
                accomplishment,
                vitality,
              ]}
              legend={true}
            />
          </Col>
          <Col sm={{ span: 12 }} md={{ span: 6 }}>
            {backup && <img src={backup} alt="PERMA" />}
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Positive emotions</td>
                  <td>{positiveEmotion}</td>
                </tr>
                <tr>
                  <td>Engagagement</td>
                  <td>{engagement}</td>
                </tr>
                <tr>
                  <td>Relationships</td>
                  <td>{relationships}</td>
                </tr>
                <tr>
                  <td>Meaning</td>
                  <td>{meaning}</td>
                </tr>
                <tr>
                  <td>Accomplishment</td>
                  <td>{accomplishment}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Well-being</td>
                  <td>{wellBeing}</td>
                </tr>
              </tfoot>
            </Table>
          </Col>
        </Row>
      </Container>
    </EntryDetailContainer>
  );
};

export default EntryDetail;
