import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockApiGetResponse } from "../../redux/mocks/diaryMocks";
import store from "../../redux/store/store";
import EntrySummary from "./EntrySummary";

jest.mock("react-chartjs-2", () => ({
  PolarArea: () => <canvas role="img" />,
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
