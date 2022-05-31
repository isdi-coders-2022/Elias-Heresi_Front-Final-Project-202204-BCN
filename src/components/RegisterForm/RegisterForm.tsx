import { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { RegisterFormContainer } from "./RegisterFormContainer";
import { RegisterInformation } from "../../redux/interfaces/userInterfaces";
// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store/store";
// import { useAppDispatch } from "../../redux/store/hooks";
// import { NavigateFunction, useNavigate } from "react-router-dom";
const RegisterForm = (): JSX.Element => {
  const formInitialState = {
    name: "",
    surname: "",
    email: "",
    username: "",
    password: "",
  } as RegisterInformation;

  //const user = useSelector((state: RootState) => state.user);

  const [formData, setFormData] = useState(formInitialState);
  //const [buttonDisabled, setButtonDisabled] = useState(true);

  //const dispatch = useAppDispatch();
  //const navigate = useNavigate();

  const changeData = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  // const resetForm = (): void => {
  //   setFormData(formInitialState);
  // };

  return (
    <RegisterFormContainer>
      <Form autoComplete="off">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="name"
            type="text"
            placeholder="Enter first name"
            onChange={changeData}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            id="surname"
            type="text"
            placeholder="Enter last name"
            onChange={changeData}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="Enter email"
            onChange={changeData}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            id="username"
            type="text"
            placeholder="Choose your username"
            onChange={changeData}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="Choose your password"
            onChange={changeData}
          />
        </Form.Group>

        <section className="container text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>

          <p>Already a member?</p>

          <Button variant="secondary" type="button">
            Login
          </Button>
        </section>
      </Form>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
