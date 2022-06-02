import React from "react";
import Register from "./pages/Register/Register";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Historic from "./pages/Historic/Historic";
import CheckLogged from "./components/CheckLogged/CheckLogged";
const App = (): JSX.Element => {
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
