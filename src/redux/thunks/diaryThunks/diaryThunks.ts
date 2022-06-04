import axios from "axios";
import { AppDispatch } from "../../store/store";
import { GetApiResponse } from "../../interfaces/DiaryInterface";
import {
  deleteEntryActionCreator,
  loadActionCreator,
} from "../../features/diarySlice";
import {
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../../features/uiSlice";

export const loadEntriesThunk =
  (key: string) => async (dispatch: AppDispatch) => {
    dispatch(loadingActionCreator());
    const diaryRoute: string = `${process.env.REACT_APP_API_URL}diary/all`;
    const token = `Bearer ${key}`;
    const {
      data: { entries },
    }: GetApiResponse = await axios.get(diaryRoute, {
      headers: { Authorization: token },
    });
    dispatch(loadActionCreator(entries));
    dispatch(finishedLoadingActionCreator());
  };

export const deleteEntryThunk =
  (key: string, entryId: string) => async (dispatch: AppDispatch) => {
    dispatch(loadingActionCreator());
    const diaryRoute: string = `${process.env.REACT_APP_API_URL}diary/delete`;
    const token = `Bearer ${key}`;
    await axios.delete(diaryRoute, {
      headers: { Authorization: token },
      data: { entryId },
    });
    dispatch(deleteEntryActionCreator(entryId));
    dispatch(finishedLoadingActionCreator());
  };
