import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
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

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => ({ feedback: mockSelector }),
}));

describe("Given the EntrySummary component", () => {
  describe("When invoked", () => {
    test("Then a canvas element and 2 buttons will be renderized", () => {
      const expectedButtons = 3;
      render(
        <Provider store={store}>
          <EntrySummary entry={mockApiGetResponse[0]} />
        </Provider>
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
        <Provider store={store}>
          <EntrySummary entry={mockApiGetResponse[0]} />
        </Provider>
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
        <Provider store={store}>
          <EntrySummary entry={mockApiGetResponse[0]} />
        </Provider>
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
});
