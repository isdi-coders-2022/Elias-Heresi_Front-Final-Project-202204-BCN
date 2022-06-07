import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import CreateForm from "./CreateForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the CreateForm component", () => {
  describe("When invoked", () => {
    test("Then 7 sliders, 1 textbox and 2 buttons will be renderized", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateForm />
          </Provider>
        </BrowserRouter>
      );

      const expectedSliders = 7;
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
  describe("When submitted", () => {
    test("Then the dispatch fucntion will be invoked once", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateForm />
          </Provider>
        </BrowserRouter>
      );

      const expectedNumberOfCalls = 1;

      const searchedCreateButton = screen.getByRole("button", {
        name: "Create",
      });

      window.scrollTo = jest.fn();
      const searchedTextBox = screen.getByRole("textbox");

      userEvent.type(searchedTextBox, "Inputted text for test");
      userEvent.click(searchedCreateButton);

      expect(mockDispatch).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
  });
});
