import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { Statement } from "typescript";

interface IRegister {
  name: string;
  surname: string;
  email: string;
  username: string;
  password: string;
}

export const registerUserThunk =
  (formData: IRegister) =>
  async (dispatch: ThunkDispatch<Statement, void, Action>) => {};

// export const registerUserThunk = (formData) => async (dispatch) => {
//   try {
//     dispatch(loadingActionCreator());
//     await axios.post(`${process.env.REACT_APP_API_URL}user/register`, formData);

//     const newUser = {
//       username: formData.username,
//       password: formData.password,
//     };

//     const route = `${process.env.REACT_APP_API_URL}user/login`;
//     const {
//       data: { token },
//     } = await axios.post(route, newUser);
//     localStorage.setItem("token", token);
//     const userInfo = jwtDecode(token);

//     dispatch(loginActionCreator(userInfo));
//     dispatch(finishedLoadingActionCreator());
//   } catch (error) {
//     dispatch(finishedLoadingActionCreator());
//   }
// };
