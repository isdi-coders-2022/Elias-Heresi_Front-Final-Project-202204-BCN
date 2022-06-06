import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import CreateForm from "./CreateForm";

describe("Given the CreateForm component", () => {
  describe("When invoked", () => {
    test("Then 6 sliders, 1 textbox and 2 buttons will be renderized", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateForm />
          </Provider>
        </BrowserRouter>
      );

      const expectedSliders = 6;
      const expectedTextboxes = 1;
      const expectedButtons = 2;

      const searchedSliders = screen.getAllByRole("slider");
      const searchedTextboxes = screen.getAllByRole("textbox");
      const searchedButtons = screen.getAllByRole("button");

      expect(searchedSliders).toHaveLength(expectedSliders);
      expect(searchedTextboxes).toHaveLength(expectedTextboxes);
      expect(searchedButtons).toHaveLength(expectedButtons);
    });
  });
});
