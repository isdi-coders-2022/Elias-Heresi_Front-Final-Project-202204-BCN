import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { RegisterContainer } from "./RegisterContainer";
import { RootState } from "../../redux/store/store";
import { UserState } from "../../redux/interfaces/UserInterface";
import { Ui } from "../../redux/interfaces/UiInterface";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Register = () => {
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
      <RegisterContainer>
        <img
          src="https://www.happiness.com/community/uploads/monthly_2020_08/happy-children-kids-joyful.jpg.307017a030aa7b740d260c45d39745b2.jpg"
          alt="Placeholder"
          className="form__image"
        />
        <div className="register__form">
          <h1>Bonanza</h1>
          <h2>Sign up to improve your life, one day at a time</h2>
          <RegisterForm />
        </div>
      </RegisterContainer>
    </>
  );
};

export default Register;
