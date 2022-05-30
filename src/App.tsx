import React from "react";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContainer } from "./AppContainer";

const App = (): JSX.Element => {
  return (
    <AppContainer className="App">
      <RegisterForm />
    </AppContainer>
  );
};

export default App;
