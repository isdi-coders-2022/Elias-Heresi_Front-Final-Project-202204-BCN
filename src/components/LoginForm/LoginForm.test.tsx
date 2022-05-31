import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Given the RegisterForm component", () => {
  describe("When instantiated", () => {
    test("Then 2 buttons and 4 input boxes will be rendered", () => {
      const expectedButtons = 2;
      const expectedInputBoxes = 1;

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const searchedButtons = screen.getAllByRole("button");
      const searchedInputBoxes = screen.getAllByRole("textbox");

      expect(searchedButtons).toHaveLength(expectedButtons);
      expect(searchedInputBoxes).toHaveLength(expectedInputBoxes);
    });
  });
});
