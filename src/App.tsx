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
import { logOutUserThunk } from "./redux/thunks/userThunks/userThunks";
import "react-toastify/dist/ReactToastify.css";
import Create from "./pages/Create/Create";
import Edit from "./pages/Edit/Edit";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const token: Token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const userInfo: UserData = jwtDecode(token);
      dispatch(loginActionCreator(userInfo));
    } else {
      dispatch(logOutUserThunk());
    }
  }, [dispatch, token]);

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
      <Route
        path="/create"
        element={
          <CheckLogged>
            <Create />
          </CheckLogged>
        }
      />
      <Route
        path="/edit"
        element={
          <CheckLogged>
            <Edit />
          </CheckLogged>
        }
      />
    </Routes>
  );
};

export default App;
