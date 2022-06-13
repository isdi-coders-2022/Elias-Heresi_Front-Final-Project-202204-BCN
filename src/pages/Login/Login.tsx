import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { RootState } from "../../redux/store/store";
import Loading from "../../components/Loading/Loading";
import { Ui } from "../../redux/interfaces/UiInterface";
import { useEffect } from "react";
import { UserState } from "../../redux/interfaces/UserInterface";
import { useNavigate } from "react-router-dom";
import { RegisterContainer } from "../Register/RegisterContainer";
import { ToastContainer } from "react-toastify";

const Login = (): JSX.Element => {
  const { loading }: Ui = useSelector((state: RootState) => state.ui);
  const { logged }: UserState = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate("/home");
    }
  }, [navigate, logged]);

  return (
    <>
      {loading && <Loading />}
      <ToastContainer />
      <RegisterContainer>
        <img
          src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Placeholder"
          className="form__image"
        />
        <div className="login__form">
          <h1>Bonanza</h1>
          <h2>Login to your account</h2>
          <LoginForm />
        </div>
      </RegisterContainer>
    </>
  );
};

export default Login;
