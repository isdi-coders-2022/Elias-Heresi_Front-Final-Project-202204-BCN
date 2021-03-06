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
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Insights from "./pages/Insights/Insights";

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
        path="/home"
        element={
          <CheckLogged>
            <Home />
          </CheckLogged>
        }
      />

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
        path="/insights"
        element={
          <CheckLogged>
            <Insights />
          </CheckLogged>
        }
      />
      <Route
        path="/edit/:id"
        element={
          <CheckLogged>
            <Edit />
          </CheckLogged>
        }
      />
      <Route
        path="/detail/:id"
        element={
          <CheckLogged>
            <Detail />
          </CheckLogged>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
