import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DiaryState, DiaryEntry } from "../interfaces/DiaryInterface";

const initialState = {
  collection: [],
} as DiaryState;

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    load: (diary: DiaryState, action: PayloadAction<DiaryEntry[]>) => ({
      collection: action.payload,
    }),
    resetCollection: () => ({
      collection: [],
    }),
    deleteEntry: (diary: DiaryState, action: PayloadAction<string>) => {
      const newCollection = diary.collection.filter(
        (entry) => entry.id !== action.payload
      );

      return {
        collection: newCollection,
      };
    },
    createEntry: (diary: DiaryState, action: PayloadAction<DiaryEntry>) => ({
      collection: [...diary.collection, action.payload],
    }),
  },
});

export const {
  load: loadActionCreator,
  resetCollection: resetCollectionActionCreator,
  deleteEntry: deleteEntryActionCreator,
  createEntry: createEntryActionCreator,
} = diarySlice.actions;

export default diarySlice.reducer;
