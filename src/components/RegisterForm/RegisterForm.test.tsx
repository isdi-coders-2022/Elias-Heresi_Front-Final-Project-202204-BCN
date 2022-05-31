import { Provider } from "react-redux";
import RegisterForm from "./RegisterForm";
import store from "../../redux/store/store";
import { render, screen } from "@testing-library/react";

describe("Given the RegisterForm component", () => {
  describe("When instantiated", () => {
    test("Then 2 buttons and 4 input boxes will be rendered", () => {
      const expectedButtons = 2;
      const expectedInputBoxes = 4;

      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      const searchedButtons = screen.getAllByRole("button");
      const searchedInputBoxes = screen.getAllByRole("textbox");

      expect(searchedButtons).toHaveLength(expectedButtons);
      expect(searchedInputBoxes).toHaveLength(expectedInputBoxes);
    });
  });
});

export {};
