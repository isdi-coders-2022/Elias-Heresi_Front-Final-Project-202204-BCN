import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockFirstEntry } from "../../redux/mocks/diaryMocks";
import store from "../../redux/store/store";
import Detail from "./Detail";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => ({ collection: [mockFirstEntry], loading: false }),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "aa" }),
}));

jest.mock("react-chartjs-2", () => ({
  PolarArea: () => <canvas role="img" />,
}));

describe("Given the Detail page", () => {
  describe("When invoked", () => {
    test("Then 1 chart and 2 tables will be renderized", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Detail />
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
});
