import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContainer } from "./AppContainer";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import LoginForm from "./components/LoginForm/LoginForm";
const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppContainer className="App">
        <LoginForm />
      </AppContainer>
    </Provider>
  );
};

export default App;
