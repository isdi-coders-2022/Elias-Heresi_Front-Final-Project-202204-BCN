import axios from "axios";
import { AppDispatch } from "../../store/store";
import {
  TransformedEntryForm,
  GetApiResponse,
} from "../../interfaces/DiaryInterface";
import {
  deleteEntryActionCreator,
  loadActionCreator,
} from "../../features/diarySlice";
import {
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../../features/uiSlice";
import { Token } from "../../interfaces/UserInterface";
import { notify } from "../../../utils/toast";

const key: Token = localStorage.getItem("token");
const token = `Bearer ${key}`;
const authorization = { headers: { Authorization: token } };

export const loadEntriesThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadingActionCreator());
    const diaryRoute: string = `${process.env.REACT_APP_API_URL}diary/all`;
    const {
      data: { entries },
    }: GetApiResponse = await axios.get(diaryRoute, authorization);
    dispatch(loadActionCreator(entries));
  } catch (error) {
    notify({ message: "Failed to load user's entries", type: "error" });
  } finally {
    dispatch(finishedLoadingActionCreator());
  }
};

export const deleteEntryThunk =
  (entryId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
      const diaryRoute: string = `${process.env.REACT_APP_API_URL}diary/delete`;
      await axios.delete(diaryRoute, { ...authorization, data: { entryId } });
      dispatch(deleteEntryActionCreator(entryId));
      notify({
        message: "Succesfully deleted well-being entry",
        type: "success",
      });
    } catch (error) {
      notify({ message: "Failed to delete well-being entry", type: "error" });
    } finally {
      dispatch(finishedLoadingActionCreator());
    }
  };

export const createEntryThunk =
  (newEntry: TransformedEntryForm) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
      const diaryRoute: string = `${process.env.REACT_APP_API_URL}diary`;
      await axios.post(diaryRoute, newEntry, authorization);
      notify({
        message: "Succesfully created well-being entry",
        type: "success",
      });
    } catch (error) {
      notify({ message: "Failed to create well-being entry", type: "error" });
    } finally {
      dispatch(finishedLoadingActionCreator());
      window.scrollTo(0, 0);
    }
  };
