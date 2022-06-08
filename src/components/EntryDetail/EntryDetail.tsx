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

const EntryDetail = ({ entry }: { entry: DiaryEntry }): JSX.Element => {
  const dispatch = useAppDispatch();

  const {
    positiveEmotion,
    // engagement,
    // relationships,
    // meaning,
    // accomplishment,
    // vitality,
    // commentary,
    // wellBeing,
    // date,
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
      <h1>{positiveEmotion}</h1>
    </>
  );
};

export default EntryDetail;
