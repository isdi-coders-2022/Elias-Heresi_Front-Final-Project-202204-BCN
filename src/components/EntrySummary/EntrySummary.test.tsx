import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import {
  feedbackOnActionCreator,
  saveEntryIdActionCreator,
} from "../../redux/features/uiSlice";
import { mockApiGetResponse, mockApiId } from "../../redux/mocks/diaryMocks";
import store from "../../redux/store/store";
import EntrySummary from "./EntrySummary";

jest.mock("react-chartjs-2", () => ({
  PolarArea: () => <canvas role="img" />,
}));

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the EntrySummary component", () => {
  describe("When invoked", () => {
    test("Then a canvas element and 2 buttons will be renderized", () => {
      const expectedButtons = 2;
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

      const deleteCardButton = screen.getAllByRole("button");

      userEvent.click(deleteCardButton[0]);

      expect(mockDispatch).toHaveBeenCalledWith(feedbackOnActionCreator());
      expect(mockDispatch).toHaveBeenCalledWith(
        saveEntryIdActionCreator(mockApiId)
      );
    });
  });
});
