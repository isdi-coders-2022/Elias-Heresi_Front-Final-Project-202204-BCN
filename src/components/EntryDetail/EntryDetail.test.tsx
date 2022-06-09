import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockApiGetResponse } from "../../redux/mocks/diaryMocks";
import store from "../../redux/store/store";
import EntryDetail from "./EntryDetail";

const mockDispatch = jest.fn();
let mockFeedback = false;

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => ({ feedback: mockFeedback }),
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "pakito-chocolate" }),
  useNavigate: () => mockNavigate,
}));

describe("Given the EntryDetail component", () => {
  describe("When invoked", () => {
    test("Then 2 tables and a chart will be renderized", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <EntryDetail entry={mockApiGetResponse[0]} />
          </Provider>
        </BrowserRouter>
      );

      const expectedCharts = 1;
      const expectedTables = 2;

      const searchedChart = screen.getAllByRole("img");
      const searchedTables = screen.getAllByRole("table");

      expect(searchedChart).toHaveLength(expectedCharts);
      expect(searchedTables).toHaveLength(expectedTables);
    });
  });
  describe("When the confirmation modal is entered", () => {
    mockFeedback = true;
    test("Then dispatch will be called 3 times", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <EntryDetail entry={mockApiGetResponse[0]} />
          </Provider>
        </BrowserRouter>
      );

      const expectedNumberOfCalls = 3;

      const confirmButton = screen.getByRole("button", { name: "Yes" });
      userEvent.click(confirmButton);

      expect(mockDispatch).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
  });
});
