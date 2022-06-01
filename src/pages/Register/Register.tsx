import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { RegisterContainer } from "./RegisterContainer";
import { RootState } from "../../redux/store/store";

const Register = () => {
  const loading: boolean = useSelector((state: RootState) => state.ui.loading);

  return (
    <RegisterContainer>
      {loading && <Loading />}
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

export default Register;
