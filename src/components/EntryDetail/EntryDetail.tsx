import { ProgressBar, Table } from "react-bootstrap";

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
    // id,
  } = entry;

  const { entryId }: Ui = useSelector((state: RootState) => state.ui);

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
      <h2>Date: {date.toString().slice(0, 10).replaceAll("-", "/")}</h2>
      <h2>General well-being:</h2>
      <ProgressBar animated now={wellBeing * 10} style={{ height: "32px" }} />
      <h3>Commentary: {commentary}</h3>
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
      {backup && <img src={backup} alt="PERMA" />}
      <h2>Summary:</h2>
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
    </>
  );
};

export default EntryDetail;
