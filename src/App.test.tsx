import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { AppContainer } from "./AppContainer";
import store from "./redux/store/store";
import { loginActionCreator } from "./redux/features/userSlice";

let usedToken = false;

const localStorageMock = (() => {
  return {
    getItem() {
      return usedToken;
    },
    removeItem() {
      return null;
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

const decodedToken = { name: "daddy", surname: "yankee", username: "daddy" };
jest.mock("jwt-decode", () => () => decodedToken);

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the App component", () => {
  describe("When invoked with no token", () => {
    test("Then the user will be redirected to the login page", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AppContainer>
              <App />
            </AppContainer>
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = "Login to your account";

      const searchedHeading = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(searchedHeading).toBeInTheDocument();
    });
  });
  describe("When invoked with a token", () => {
    test("Then the login action will be dispatched", () => {
      usedToken = true;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AppContainer>
              <App />
            </AppContainer>
          </Provider>
        </BrowserRouter>
      );

      expect(mockDispatch).toHaveBeenCalledWith(
        loginActionCreator(decodedToken)
      );
    });
  });
});
