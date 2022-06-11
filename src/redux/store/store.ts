import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import uiReducer from "../features/uiSlice";
import diaryReducer from "../features/diarySlice";
import pageReducer from "../features/pageSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    diary: diaryReducer,
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
