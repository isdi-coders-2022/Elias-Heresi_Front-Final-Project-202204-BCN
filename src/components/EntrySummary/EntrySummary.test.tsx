import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { mockApiGetResponse } from "../../redux/mocks/diaryMocks";
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
    test("Then a canvas element and a button will be renderized", () => {
      render(
        <Provider store={store}>
          <EntrySummary entry={mockApiGetResponse[0]} />
        </Provider>
      );

      const searchedCanvas = screen.getByRole("img");
      const searchedButton = screen.getByRole("button");

      expect(searchedCanvas).toBeTruthy();
      expect(searchedButton).toBeTruthy();
    });
  });
});
