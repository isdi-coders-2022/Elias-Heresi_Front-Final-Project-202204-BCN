import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  name: string;
  surname: string;
  username: string;
  logged: boolean;
}

interface DecodedToken {
  name: string;
  surname: string;
  username: string;
}

const initialState = {
  name: "",
  surname: "",
  username: "",
  logged: false,
} as IState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user, action: PayloadAction<DecodedToken>) => ({
      ...action.payload,
      logged: true,
    }),
    logout: () => ({ name: "", surname: "", username: "", logged: false }),
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
