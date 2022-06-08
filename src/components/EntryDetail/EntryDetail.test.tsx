import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockApiGetResponse } from "../../redux/mocks/diaryMocks";
import store from "../../redux/store/store";
import EntryDetail from "./EntryDetail";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "pakito-chocolate" }),
  useNavigate: () => mockNavigate,
}));

describe("Given the EntryDetail component", () => {
  describe("When invoked", () => {
    test("Then a table and a chart will be renderized", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <EntryDetail entry={mockApiGetResponse[0]} />
          </Provider>
        </BrowserRouter>
      );

      const expectedCharts = 1;
      const expectedTables = 1;

      const searchedChart = screen.getAllByRole("img");
      const searchedTables = screen.getAllByRole("table");

      expect(searchedChart).toHaveLength(expectedCharts);
      expect(searchedTables).toHaveLength(expectedTables);
    });
  });
});
