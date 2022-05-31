import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContainer } from "./AppContainer";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import RegisterPage from "./pages/Register/Register";
const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppContainer className="App">
        <RegisterPage />
      </AppContainer>
    </Provider>
  );
};

export default App;
