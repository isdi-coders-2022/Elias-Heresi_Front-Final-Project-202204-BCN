import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { RegisterContainer } from "./RegisterContainer";

const RegisterPage = () => {
  return (
    <RegisterContainer>
      <h1>Welcome to Bonanza</h1>
      <h2>Create a new user</h2>
      <RegisterForm />
    </RegisterContainer>
  );
};

export default RegisterPage;
