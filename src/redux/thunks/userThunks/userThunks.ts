import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  loginActionCreator,
  logoutActionCreator,
} from "../../features/userSlice";
import { AppDispatch } from "../../store/store";

import {
  UserData,
  RegisterInformation,
  LoginUser,
  ApiLoginResponse,
} from "../../interfaces/UserInterface";
import {
  finishedLoadingActionCreator,
  loadingActionCreator,
  feedbackOnActionCreator,
} from "../../features/uiSlice";
import { loadEntriesThunk } from "../diaryThunks/diaryThunks";

export const registerUserThunk =
  (formData: RegisterInformation) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
      const registerRoute: string = `${process.env.REACT_APP_API_URL}user/register`;
      await axios.post(registerRoute, formData);

      const newUser: LoginUser = {
        username: formData.username,
        password: formData.password,
      };

      const loginRoute: string = `${process.env.REACT_APP_API_URL}user/login`;

      const {
        data: { token },
      }: ApiLoginResponse = await axios.post(loginRoute, newUser);
      localStorage.setItem("token", token);
      const userInfo: UserData = jwtDecode(token);
      dispatch(loginActionCreator(userInfo));
      dispatch(loadEntriesThunk(token));
      dispatch(finishedLoadingActionCreator());
      dispatch(feedbackOnActionCreator());
    } catch (error) {
      dispatch(finishedLoadingActionCreator());
    }
  };

export const loginUserThunk =
  (loginInformation: LoginUser) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
      const route: string = `${process.env.REACT_APP_API_URL}user/login`;
      const {
        data: { token },
      }: ApiLoginResponse = await axios.post(route, loginInformation);
      localStorage.setItem("token", token);
      const userInfo: UserData = jwtDecode(token);
      dispatch(loginActionCreator(userInfo));
      dispatch(loadEntriesThunk(token));
      dispatch(finishedLoadingActionCreator());
      dispatch(feedbackOnActionCreator());
    } catch (error) {
      dispatch(finishedLoadingActionCreator());
    }
  };

export const logOutUserThunk = () => (dispatch: AppDispatch) => {
  localStorage.removeItem("token");
  dispatch(logoutActionCreator());
};
