import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

interface IUser {
  username: string;
  password: string;
}

interface DecodedToken {
  name: string;
  surname: string;
  username: string;
}

interface IRegister {
  name: string;
  surname: string;
  email: string;
  username: string;
  password: string;
}

interface ApiResponse {
  data: { token: string };
}

export const registerUserThunk =
  (formData: IRegister) => async (dispatch: AppDispatch) => {
    const registerRoute: string = `${process.env.REACT_APP_API_URL}user/register`;
    await axios.post(registerRoute, formData);

    const newUser: IUser = {
      username: formData.username,
      password: formData.password,
    };

    const loginRoute: string = `${process.env.REACT_APP_API_URL}user/login`;

    const {
      data: { token },
    }: ApiResponse = await axios.post(loginRoute, newUser);
    localStorage.setItem("token", token);
    const userInfo: DecodedToken = jwtDecode(token);
    dispatch(loginActionCreator(userInfo));
  };

export const loginUserThunk =
  (loginInformation: IUser) => async (dispatch: AppDispatch) => {
    const route: string = `${process.env.REACT_APP_API_URL}user/login`;
    const {
      data: { token },
    }: ApiResponse = await axios.post(route, loginInformation);
    localStorage.setItem("token", token);
    const userInfo: DecodedToken = jwtDecode(token);
    dispatch(loginActionCreator(userInfo));
  };
