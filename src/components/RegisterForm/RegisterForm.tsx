import { ChangeEvent, useState, FormEvent, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { RegisterFormContainer } from "./RegisterFormContainer";
import { RegisterInformation } from "../../redux/interfaces/UserInterface";
import { registerUserThunk } from "../../redux/thunks/userThunks/userThunks";
import { useAppDispatch } from "../../redux/store/hooks";
import { loadEntriesThunk } from "../../redux/thunks/diaryThunks/diaryThunks";

const RegisterForm = (): JSX.Element => {
  const token: string =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2hhbXBhZ25lIiwic3VybmFtZSI6IlBhcGkiLCJ1c2VybmFtZSI6ImVsYXlhcyIsImlhdCI6MTY1NDA4NDM1M30.jVRRrjo0Fc3a6fti4HXpOWS8_rW-5IdtJ3HdwugvLGc";

  const formInitialState = {
    name: "",
    surname: "",
    email: "",
    username: "",
    password: "",
  } as RegisterInformation;

  const [formData, setFormData] = useState(formInitialState);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const dispatch = useAppDispatch();

  const changeData = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = (): void => {
    setFormData(formInitialState);
  };

  const submitRegister = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(registerUserThunk(formData));
    resetForm();
  };

  useEffect(() => {
    if (
      formData.name &&
      formData.email &&
      formData.surname &&
      formData.password &&
      formData.username
    ) {
      setButtonDisabled(false);
      return;
    }
    setButtonDisabled(true);
    dispatch(loadEntriesThunk(token));
  }, [formData, dispatch]);

  return (
    <RegisterFormContainer>
      <Form autoComplete="off" onSubmit={submitRegister} noValidate>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            id="name"
            type="text"
            placeholder="Enter first name"
            value={formData.name}
            onChange={changeData}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="surname">Surname</Form.Label>
          <Form.Control
            id="surname"
            type="text"
            placeholder="Enter last name"
            value={formData.surname}
            onChange={changeData}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={changeData}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            id="username"
            type="text"
            placeholder="Choose your username"
            value={formData.username}
            onChange={changeData}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="Choose your password"
            value={formData.password}
            onChange={changeData}
          />
        </Form.Group>

        <section className="container text-center">
          <Button variant="primary" type="submit" disabled={buttonDisabled}>
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
