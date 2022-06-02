import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import { UserState } from "../../redux/interfaces/UserInterface";

const CheckLogged = ({ children }: { children: JSX.Element }) => {
  const { logged }: UserState = useSelector((state: RootState) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) navigate("/login");
  });

  if (logged) {
    return children;
  } else {
    return null;
  }
};

export default CheckLogged;
