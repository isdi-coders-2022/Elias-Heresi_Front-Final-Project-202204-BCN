import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import uiReducer from "../features/uiSlice";
import diaryReducer from "../features/diarySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    diary: diaryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
