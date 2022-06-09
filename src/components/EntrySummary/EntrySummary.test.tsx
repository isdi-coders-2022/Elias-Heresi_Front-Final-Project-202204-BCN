import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  feedbackOffActionCreator,
  feedbackOnActionCreator,
  resetEntryIdActionCreator,
  saveEntryIdActionCreator,
} from "../../redux/features/uiSlice";
import { mockApiGetResponse, mockApiId } from "../../redux/mocks/diaryMocks";
import store from "../../redux/store/store";
import EntrySummary from "./EntrySummary";

jest.mock("react-chartjs-2", () => ({
  PolarArea: () => <canvas role="img" />,
}));

const mockDispatch = jest.fn();
let mockSelector = false;
const mockUseNavigate = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => ({ feedback: mockSelector }),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given the EntrySummary component", () => {
  describe("When invoked", () => {
    test("Then a canvas element and 2 buttons will be renderized", () => {
      const expectedButtons = 3;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <EntrySummary entry={mockApiGetResponse[0]} />
          </Provider>
        </BrowserRouter>
      );

      const searchedCanvas = screen.getByRole("img");
      const searchedButton = screen.getAllByRole("button");

      expect(searchedCanvas).toBeTruthy();
      expect(searchedButton).toHaveLength(expectedButtons);
    });
  });

  describe("When the top right corner is clicked", () => {
    test("Then the dispatch will be called with the feedbackOn and saveEntry actions", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <EntrySummary entry={mockApiGetResponse[0]} />
          </Provider>
        </BrowserRouter>
      );

      const deleteCardButton = screen.getAllByRole("button")[0];
      userEvent.click(deleteCardButton);

      expect(mockDispatch).toHaveBeenCalledWith(feedbackOnActionCreator());
      expect(mockDispatch).toHaveBeenCalledWith(
        saveEntryIdActionCreator(mockApiId)
      );
    });
  });
  describe("When the top right corner and the confirmation button", () => {
    test("Then dispatch will have been called 5 times, now also with the resetEntryId and the feedbackOff actions", () => {
      mockSelector = true;
      const expectedNumberOfCalls = 5;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <EntrySummary entry={mockApiGetResponse[0]} />
          </Provider>
        </BrowserRouter>
      );

      const deleteCardButton = screen.getAllByRole("button")[0];
      userEvent.click(deleteCardButton);

      const confirmButton = screen.getByRole("button", { name: "Yes" });
      userEvent.click(confirmButton);

      expect(mockDispatch).toHaveBeenCalledTimes(expectedNumberOfCalls);
      expect(mockDispatch).toHaveBeenCalledWith(resetEntryIdActionCreator());
      expect(mockDispatch).toHaveBeenCalledWith(feedbackOffActionCreator());
    });
  });
  describe("When the edit button is clicked", () => {
    test("Then navigation will have been called once", () => {
      window.scrollTo = jest.fn();
      const expectedNumberOfCalls = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <EntrySummary entry={mockApiGetResponse[0]} />
          </Provider>
        </BrowserRouter>
      );

      const editButton = screen.getByRole("button", { name: "Edit" });
      userEvent.click(editButton);

      expect(mockUseNavigate).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
  });
  describe("When the Details button is clicked", () => {
    test("Then navigation and dispatch will have been called once", () => {
      window.scrollTo = jest.fn();
      const expectedNumberOfDispatchCalls = 1;
      const expectedNumberOfNavigationCalls = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <EntrySummary entry={mockApiGetResponse[0]} />
          </Provider>
        </BrowserRouter>
      );

      const detailsButton = screen.getByRole("button", { name: "Details" });
      userEvent.click(detailsButton);

      expect(mockUseNavigate).toHaveBeenCalledTimes(
        expectedNumberOfDispatchCalls
      );
      expect(mockUseNavigate).toHaveBeenCalledTimes(
        expectedNumberOfNavigationCalls
      );
    });
  });
});
