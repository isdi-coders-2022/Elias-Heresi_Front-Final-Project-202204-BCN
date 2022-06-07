import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockApiGetResponse } from "../../redux/mocks/diaryMocks";
import store from "../../redux/store/store";
import EditForm from "./EditForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "pakito-chocolate" }),
}));

describe("Given the CreateForm component", () => {
  describe("When invoked", () => {
    test("Then 7 sliders, 1 textbox and 2 buttons will be renderized", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <EditForm entry={mockApiGetResponse[0]} />
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
            <EditForm entry={mockApiGetResponse[0]} />
          </Provider>
        </BrowserRouter>
      );

      const expectedNumberOfCalls = 1;

      const searchedCreateButton = screen.getByRole("button", {
        name: "Edit",
      });

      window.scrollTo = jest.fn();
      const searchedTextBox = screen.getByRole("textbox");

      userEvent.type(searchedTextBox, "Inputted text for test");
      userEvent.click(searchedCreateButton);

      expect(mockDispatch).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
  });
});
