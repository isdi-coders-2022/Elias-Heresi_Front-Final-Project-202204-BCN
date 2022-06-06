import axios from "axios";
import { AppDispatch } from "../../store/store";
import {
  TransformedEntryForm,
  GetApiResponse,
} from "../../interfaces/DiaryInterface";
import {
  createEntryActionCreator,
  deleteEntryActionCreator,
  loadActionCreator,
} from "../../features/diarySlice";
import {
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../../features/uiSlice";
import { Token } from "../../interfaces/UserInterface";
import { notify } from "../../../utils/toast";
import { transformDateToString } from "../../../utils/dataTransformation";

export const loadEntriesThunk =
  (key: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
      const diaryRoute: string = `${process.env.REACT_APP_API_URL}diary/all`;
      const token = `Bearer ${key}`;
      const {
        data: { entries },
      }: GetApiResponse = await axios.get(diaryRoute, {
        headers: { Authorization: token },
      });
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
      const key: Token = localStorage.getItem("token");
      const token = `Bearer ${key}`;
      await axios.delete(diaryRoute, {
        headers: { Authorization: token },
        data: { entryId },
      });
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
      const key: Token = localStorage.getItem("token");
      const token = `Bearer ${key}`;
      const {
        data: { id },
      } = await axios.post(diaryRoute, {
        headers: { Authorization: token },
        data: { newEntry },
      });
      const diaryEntry = transformDateToString({ id, ...newEntry });

      dispatch(createEntryActionCreator(diaryEntry));
      notify({
        message: "Succesfully created well-being entry",
        type: "success",
      });
    } catch (error) {
      notify({ message: "Failed to create well-being entry", type: "error" });
    } finally {
      dispatch(finishedLoadingActionCreator());
    }
  };
