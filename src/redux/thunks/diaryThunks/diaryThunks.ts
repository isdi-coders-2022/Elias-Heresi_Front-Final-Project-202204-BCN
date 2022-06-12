import axios from "axios";
import { AppDispatch } from "../../store/store";
import {
  GetApiResponse,
  EntryApiResponse,
  FilterDates,
  GetEntriesProps,
} from "../../interfaces/DiaryInterface";
import {
  deleteEntryActionCreator,
  loadActionCreator,
  resetCollectionActionCreator,
} from "../../features/diarySlice";
import {
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../../features/uiSlice";
import { notify } from "../../../utils/toast";
import { passToken } from "../../../utils/authorization";
import { totalPagesActionCreator } from "../../features/pageSlice";

const defaultDate = { startDate: 20000101, endDate: 20400101 };

export const loadEntriesThunk =
  ({ dates = defaultDate, pagination }: GetEntriesProps) =>
  async (dispatch: AppDispatch) => {
    const { startDate, endDate } = dates;
    const { perPage, page } = pagination;
    try {
      dispatch(resetCollectionActionCreator());
      dispatch(loadingActionCreator());
      const diaryRoute: string = `${process.env.REACT_APP_API_URL}diary/entries?page=${page}&perPage=${perPage}startDate=${startDate}&endDate=${endDate}`;
      const {
        data: { entries },
      }: GetApiResponse = await axios.get(diaryRoute, passToken());
      dispatch(loadActionCreator(entries));
    } catch (error) {
      notify({ message: "Failed to load user's entries", type: "error" });
    } finally {
      dispatch(finishedLoadingActionCreator());
    }
  };

export const loadFilteredEntriesThunk =
  (dates: FilterDates) => async (dispatch: AppDispatch) => {
    const { startDate, endDate } = dates;
    try {
      dispatch(resetCollectionActionCreator());
      dispatch(loadingActionCreator());
      const diaryRoute: string = `${process.env.REACT_APP_API_URL}diary/entries?startDate=${startDate}&endDate=${endDate}`;
      const {
        data: { entries },
      }: GetApiResponse = await axios.get(diaryRoute, passToken());
      dispatch(loadActionCreator(entries));
    } catch (error) {
      notify({ message: "Failed to load user's entries", type: "error" });
    } finally {
      dispatch(finishedLoadingActionCreator());
    }
  };

export const numberOfEntriesThunk = () => async (dispatch: AppDispatch) => {
  try {
    const diaryRoute: string = `${process.env.REACT_APP_API_URL}diary/entries`;
    const {
      data: { numberOfEntries },
    }: GetApiResponse = await axios.get(diaryRoute, passToken());
    dispatch(totalPagesActionCreator(numberOfEntries));
  } catch (error) {
    notify({ message: "Failed to load number of entries", type: "error" });
  }
};

export const loadEntryThunk = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadingActionCreator());
    const diaryRoute: string = `${process.env.REACT_APP_API_URL}diary/byId/${id}`;
    let {
      data: { entry },
    }: EntryApiResponse = await axios.get(diaryRoute, passToken());
    dispatch(loadActionCreator([entry]));
  } catch (error) {
    notify({ message: "Failed to load entry", type: "error" });
  } finally {
    dispatch(finishedLoadingActionCreator());
  }
};

export const editEntryThunk =
  (newEntry: FormData, id: string) => async (dispatch: AppDispatch) => {
    try {
      window.scrollTo(0, 0);
      dispatch(loadingActionCreator());
      const diaryRoute: string = `${process.env.REACT_APP_API_URL}diary/edit/${id}`;
      await axios.patch(diaryRoute, newEntry, passToken());
      notify({
        message: "Succesfully edited well-being entry",
        type: "success",
      });
    } catch (error) {
      notify({ message: "Failed to edit well-being entry", type: "error" });
    } finally {
      dispatch(finishedLoadingActionCreator());
    }
  };

export const deleteEntryThunk =
  (entryId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
      const diaryRoute: string = `${process.env.REACT_APP_API_URL}diary/delete`;
      await axios.delete(diaryRoute, { ...passToken(), data: { entryId } });
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
  (newEntry: FormData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
      const diaryRoute: string = `${process.env.REACT_APP_API_URL}diary`;
      await axios.post(diaryRoute, newEntry, passToken());
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
