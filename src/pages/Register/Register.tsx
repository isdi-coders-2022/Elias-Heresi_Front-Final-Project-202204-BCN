import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { RegisterContainer } from "./RegisterContainer";

const Register = () => {
  return (
    <RegisterContainer>
      <img
        src="https://www.happiness.com/community/uploads/monthly_2020_08/happy-children-kids-joyful.jpg.307017a030aa7b740d260c45d39745b2.jpg"
        alt="Placeholder"
        className="register__image"
      />
      <div className="register__form">
        <h1>Bonanza</h1>
        <h2>Sign up to improve your life, one day at a time</h2>
        <RegisterForm />
      </div>
    </RegisterContainer>
  );
};

// <LoginContainer>
//   <img
//     src="https://csbs.utah.edu/_resources/images/Happy%20People.jpg"
//     alt="Placeholder"
//     className="login__image"
//   />
//   <div className="login__form">
//     <h1>Welcome to Bonanza</h1>
//     <h2>Login</h2>
//     <LoginForm />
//   </div>
// </LoginContainer>;

export default Register;
