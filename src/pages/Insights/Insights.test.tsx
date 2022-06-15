import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Insights from "./Insights";
import { mockApiGetResponse } from "../../redux/mocks/diaryMocks";

let mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

jest.mock("react-chartjs-2", () => ({
  Chart: () => <canvas role="img" />,
}));

let mockLogged: boolean = false;
let mockLoading: boolean = false;

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => ({
    logged: mockLogged,
    loading: mockLoading,
    collection: mockApiGetResponse,
    dates: { startDate: 20200101, endDate: 20220101 },
  }),
}));

describe("Given the Insights page component", () => {
  describe("When invoked", () => {
    test("Then navigation filter and a chart will be rendered", () => {
      mockUseNavigate = jest.fn();
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Insights />
          </Provider>
        </BrowserRouter>
      );

      const searchedChart = screen.getByRole("img");
      const searchedFilter = screen.getByRole("button", { name: "Filter" });

      expect(searchedChart).toBeInTheDocument();
      expect(searchedFilter).toBeInTheDocument();
    });
  });
});
