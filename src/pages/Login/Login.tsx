import LoginForm from "../../components/LoginForm/LoginForm";
import { LoginContainer } from "./LoginContainer";

const LoginPage = () => {
  return (
    <LoginContainer>
      <h1>Welcome to Bonanza</h1>
      <h2>Login</h2>
      <LoginForm />
    </LoginContainer>
  );
};

export default LoginPage;
