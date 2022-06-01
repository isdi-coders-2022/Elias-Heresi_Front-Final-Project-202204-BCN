import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./pages/Register/Register";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
