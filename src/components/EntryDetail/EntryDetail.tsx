import { ProgressBar, Table } from "react-bootstrap";
import Calendar from "react-calendar";
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
    // commentary,
    wellBeing,
    date,
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
      <h2>Date: </h2>
      <Calendar />
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
      <h2>General well-being:</h2>
      <ProgressBar animated now={wellBeing * 10} style={{ height: "32px" }} />
      <h2>Summary:</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default EntryDetail;
