import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContainer } from "./AppContainer";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppContainer className="App"></AppContainer>
    </Provider>
  );
};

export default App;
