import { LoginFormContainer } from "./LoginFormContainer";

import { ChangeEvent, useState, FormEvent, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { loginUserThunk } from "../../redux/thunks/userThunks/userThunks";
import { useAppDispatch } from "../../redux/store/hooks";
import { Link } from "react-router-dom";

interface LoginUser {
  username: string;
  password: string;
}

const LoginForm = (): JSX.Element => {
  const formInitialState = {
    username: "",
    password: "",
  } as LoginUser;

  const [formData, setFormData] = useState(formInitialState);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const dispatch = useAppDispatch();

  const changeData = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = (): void => {
    setFormData(formInitialState);
  };

  const loginUser = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(loginUserThunk(formData));
    resetForm();
  };

  useEffect(() => {
    if (formData.password && formData.username) {
      setButtonDisabled(false);
      return;
    }
    setButtonDisabled(true);
  }, [formData]);

  return (
    <LoginFormContainer>
      <Form autoComplete="off" onSubmit={loginUser} noValidate>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            id="username"
            type="text"
            placeholder="Enter your username"
            value={formData.username}
            onChange={changeData}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={changeData}
          />
        </Form.Group>

        <section className="container text-center">
          <Button variant="primary" type="submit" disabled={buttonDisabled}>
            Submit
          </Button>

          <p>Not a member yet?</p>

          <Link to="/register" className="btn btn-secondary">
            Register
          </Link>
        </section>
      </Form>
    </LoginFormContainer>
  );
};

export default LoginForm;
