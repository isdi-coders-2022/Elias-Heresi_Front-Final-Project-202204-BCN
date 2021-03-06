import { Provider } from "react-redux";
import RegisterForm from "./RegisterForm";
import store from "../../redux/store/store";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the RegisterForm component", () => {
  describe("When invoked", () => {
    test("Then 1 buttons and 4 input boxes will be rendered", () => {
      const expectedButtons = 1;
      const expectedInputBoxes = 4;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const searchedButtons = screen.getAllByRole("button");
      const searchedInputBoxes = screen.getAllByRole("textbox");

      expect(searchedButtons).toHaveLength(expectedButtons);
      expect(searchedInputBoxes).toHaveLength(expectedInputBoxes);
    });
  });
});
describe("When invoked, and the submit button is enabled and clicked on", () => {
  test("Then an action will be dispatched", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      </BrowserRouter>
    );

    const nameInputText = screen.getByLabelText("Name");
    const surnameInputText = screen.getByLabelText("Surname");
    const emailInputText = screen.getByLabelText("Email address");
    const usernameInputText = screen.getByLabelText("Username");
    const passwordInputText = screen.getByLabelText("Password");

    userEvent.type(nameInputText, "text");
    userEvent.type(surnameInputText, "text");
    userEvent.type(emailInputText, "text");
    userEvent.type(usernameInputText, "text");
    userEvent.type(passwordInputText, "text");

    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);

    expect(mockDispatch).toHaveBeenCalled();
  });

  test("Then it should always match this snapshot", () => {
    const testedLoginPage = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      </Provider>
    );

    expect(testedLoginPage).toMatchSnapshot();
  });
});
