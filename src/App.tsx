import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContainer } from "./AppContainer";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppContainer className="App">
        <Register />
      </AppContainer>
    </Provider>
  );
};

export default App;
