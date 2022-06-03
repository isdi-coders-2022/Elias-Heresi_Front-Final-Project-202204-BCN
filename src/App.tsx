import React, { useEffect } from "react";
import { Token, UserData } from "./redux/interfaces/UserInterface";
import Register from "./pages/Register/Register";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Historic from "./pages/Historic/Historic";
import CheckLogged from "./components/CheckLogged/CheckLogged";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "./redux/features/userSlice";
import { useAppDispatch } from "./redux/store/hooks";
import { loadEntriesThunk } from "./redux/thunks/diaryThunks/diaryThunks";
import { logOutUserThunk } from "./redux/thunks/userThunks/userThunks";
import "react-toastify/dist/ReactToastify.css";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token: Token = localStorage.getItem("token");

    if (token) {
      const userInfo: UserData = jwtDecode(token);
      dispatch(loginActionCreator(userInfo));
      dispatch(loadEntriesThunk(token));
    } else {
      dispatch(logOutUserThunk());
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/historic"
        element={
          <CheckLogged>
            <Historic />
          </CheckLogged>
        }
      />
    </Routes>
  );
};

export default App;
