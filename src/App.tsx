import React from "react";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContainer } from "./AppContainer";
import { Provider } from "react-redux";
import store from "./redux/store/store";
const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppContainer className="App">
        <RegisterForm />
      </AppContainer>
    </Provider>
  );
};

export default App;
