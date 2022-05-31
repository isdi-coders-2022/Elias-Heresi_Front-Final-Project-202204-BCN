import LoginForm from "../../components/LoginForm/LoginForm";
import { LoginContainer } from "./LoginContainer";

const Login = () => {
  return (
    <>
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
