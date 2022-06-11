import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import DateFilter from "./DateFilter";

describe("Given the DateFilter component", () => {
  describe("When invoked", () => {
    test("Then 7 sliders, 1 textbox and 2 buttons will be renderized", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <DateFilter />
          </Provider>
        </BrowserRouter>
      );

      const startDateForm = screen.getByPlaceholderText("startDate");
      const endDateForm = screen.getByPlaceholderText("endDate");
      const filterButton = screen.getByRole("button", { name: "Filter" });

      expect(startDateForm).toBeInTheDocument();
      expect(endDateForm).toBeInTheDocument();
      expect(filterButton).toBeInTheDocument();
    });
  });
});
