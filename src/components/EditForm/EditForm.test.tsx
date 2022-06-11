import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockApiGetResponse, mockedFile } from "../../redux/mocks/diaryMocks";
import store from "../../redux/store/store";
import EditForm from "./EditForm";

let mockedParams = { id: true };
const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => mockedParams,
  useNavigate: () => mockNavigate,
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
      const fileUploadBox = screen.getByLabelText(
        "Add an image summarizing today"
      );

      userEvent.type(searchedTextBox, "Inputted text for test");

      const event = {
        target: {
          type: "file",
          files: [mockedFile],
        },
      };
      fireEvent.change(fileUploadBox, event);

      userEvent.click(searchedCreateButton);

      expect(mockDispatch).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
  });
  describe("When submitted when no id was passed on its params", () => {
    test("Then the dispatch fucntion will be invoked once", () => {
      mockedParams = { id: false };
      render(
        <BrowserRouter>
          <Provider store={store}>
            <EditForm entry={mockApiGetResponse[0]} />
          </Provider>
        </BrowserRouter>
      );

      const expectedNumberOfCalls = 1;

      const searchedCreateButton = screen.getByRole("button", {
        name: "Create",
      });

      window.scrollTo = jest.fn();
      const searchedTextBox = screen.getByRole("textbox");
      const fileUploadBox = screen.getByLabelText(
        "Add an image summarizing today"
      );

      userEvent.type(searchedTextBox, "Inputted text for test");
      userEvent.type(fileUploadBox, "Inputted text for test");
      userEvent.click(searchedCreateButton);

      expect(mockDispatch).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
  });
  describe("When 'Cancel' is clicked'", () => {
    test("Then the dispatch fucntion will be invoked once", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <EditForm entry={mockApiGetResponse[0]} />
          </Provider>
        </BrowserRouter>
      );

      const expectedNumberOfCalls = 1;

      const searchedCancelButton = screen.getByRole("button", {
        name: "Cancel",
      });

      window.scrollTo = jest.fn();

      userEvent.click(searchedCancelButton);

      expect(mockNavigate).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
  });
});
