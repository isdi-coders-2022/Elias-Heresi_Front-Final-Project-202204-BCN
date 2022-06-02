import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DiaryState, DiaryEntry } from "../interfaces/DiaryInterface";

const initialState = {
  page: 1,
  perPage: 6,
  total: 0,
  collection: [],
} as DiaryState;

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    load: (diary: DiaryState, action: PayloadAction<DiaryEntry[]>) => ({
      ...diary,
      collection: action.payload,
    }),
    resetCollection: (diary: DiaryState) => ({
      ...diary,
      collection: [],
    }),
    nextPage: (diary: DiaryState) => ({
      ...diary,
      page: diary.page + 1,
    }),
    previousPage: (diary: DiaryState) => ({
      ...diary,
      page: diary.page - 1,
    }),
  },
});

export const {
  load: loadActionCreator,
  nextPage: nextPageActionCreator,
  previousPage: previousPageActionCreator,
  resetCollection: resetCollectionActionCreator,
} = diarySlice.actions;

export default diarySlice.reducer;
