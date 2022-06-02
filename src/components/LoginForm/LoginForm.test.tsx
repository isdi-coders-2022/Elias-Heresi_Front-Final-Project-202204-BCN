import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

const mockUseNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the RegisterForm component", () => {
  describe("When instantiated", () => {
    test("Then 1 button (the other is a link) and 1 input boxes will be rendered", () => {
      const expectedButtons = 1;
      const expectedInputBoxes = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const searchedButtons = screen.getAllByRole("button");
      const searchedInputBoxes = screen.getAllByRole("textbox");

      expect(searchedButtons).toHaveLength(expectedButtons);
      expect(searchedInputBoxes).toHaveLength(expectedInputBoxes);
    });
  });
  describe("When invoked, and the submit button is enabled and clicked on", () => {
    test("Then an action will be dispatched", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );

      const usernameInputText = screen.getByLabelText("Username");
      const passwordInputText = screen.getByLabelText("Password");

      userEvent.type(usernameInputText, "text");
      userEvent.type(passwordInputText, "text");

      const submitButton = screen.getByRole("button", { name: "Submit" });
      userEvent.click(submitButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
