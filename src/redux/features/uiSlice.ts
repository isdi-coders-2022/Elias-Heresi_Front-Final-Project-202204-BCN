import { createSlice } from "@reduxjs/toolkit";
import { Ui } from "../interfaces/UiInterface";

const initialState = {
  loading: false,
  feedback: false,
} as Ui;

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    loading: (ui: Ui) => ({
      ...ui,
      loading: true,
    }),
    finishedLoading: (ui: Ui) => ({
      ...ui,
      loading: false,
    }),
    feedbackOn: (ui: Ui) => ({
      ...ui,
      feedback: true,
    }),
    feedbackOff: (ui: Ui) => ({
      ...ui,
      feedback: false,
    }),
  },
});

export const {
  loading: loadingActionCreator,
  finishedLoading: finishedLoadingActionCreator,
  feedbackOn: feedbackOnActionCreator,
  feedbackOff: feedbackOffActionCreator,
} = uiSlice.actions;
export default uiSlice.reducer;
