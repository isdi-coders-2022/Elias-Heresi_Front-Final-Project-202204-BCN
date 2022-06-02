import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { LoginContainer } from "./LoginContainer";
import { RootState } from "../../redux/store/store";
import Loading from "../../components/Loading/Loading";
import { Ui } from "../../redux/interfaces/UiInterface";
import { useEffect } from "react";
import { UserState } from "../../redux/interfaces/UserInterface";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loading }: Ui = useSelector((state: RootState) => state.ui);
  const { logged }: UserState = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate("/historic");
    }
  }, [navigate, logged]);

  return (
    <>
      {loading && <Loading />}
      <LoginContainer>
        <img
          src="https://csbs.utah.edu/_resources/images/Happy%20People.jpg"
          alt="Placeholder"
          className="login__image"
        />
        <div className="login__form">
          <h1>Bonanza</h1>
          <h2>Login to your account</h2>
          <LoginForm />
        </div>
      </LoginContainer>
    </>
  );
};

export default Login;
