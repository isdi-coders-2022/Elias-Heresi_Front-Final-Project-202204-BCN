import axios from "axios";
import { AppDispatch } from "../../store/store";
import { GetApiResponse } from "../../interfaces/DiaryInterface";
import { loadActionCreator } from "../../features/diarySlice";

export const loadEntriesThunk =
  (key: string) => async (dispatch: AppDispatch) => {
    const diaryRoute: string = `${process.env.REACT_APP_API_URL}diary/all`;
    const token = `Bearer ${key}`;
    const {
      data: { entries },
    }: GetApiResponse = await axios.get(diaryRoute, {
      headers: { Authorization: token },
    });
    dispatch(loadActionCreator(entries));
  };
