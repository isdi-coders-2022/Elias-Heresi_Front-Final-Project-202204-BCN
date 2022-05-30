import { Button, Form } from "react-bootstrap";
import { RegisterFormContainer } from "./RegisterFormContainer";
const RegisterForm = (): JSX.Element => {
  return (
    <RegisterFormContainer>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Choose your username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Choose your password" />
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

// <form onSubmit={submitRegister} noValidate autoComplete="off">
//   <label htmlFor="nameRegister"> Name </label>
//   <input
//     id="name"
//     value={formData.name}
//     onChange={changeData}
//     autoComplete="off"
//   />
//   <label htmlFor="usernameRegister"> Username </label>
//   <input
//     id="username"
//     value={formData.username}
//     onChange={changeData}
//     autoComplete="off"
//   />
//   <label htmlFor="passwordRegister" type="password">
//     {" "}
//     Password{" "}
//   </label>
//   <input
//     id="password"
//     type="password"
//     value={formData.password}
//     onChange={changeData}
//     autoComplete="off"
//   />
//   <button disabled={buttonDisabled} type="submit" value="Send">
//     Register
//   </button>
// </form>;
