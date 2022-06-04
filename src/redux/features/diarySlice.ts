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
    deleteEntry: (diary: DiaryState, action: PayloadAction<string>) => {
      const newCollection = diary.collection.filter(
        (entry) => entry.id !== action.payload
      );

      return {
        ...diary,
        collection: newCollection,
      };
    },
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
  deleteEntry: deleteEntryActionCreator,
} = diarySlice.actions;

export default diarySlice.reducer;
