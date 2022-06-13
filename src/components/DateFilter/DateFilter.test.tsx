import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import DateFilter from "./DateFilter";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

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
  describe("When the filter button is clicked", () => {
    test("Then the dispatch function will be called once", () => {
      const expectedNumberOfCalls = 1;

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

      const event = {
        type: "file",
        target: {
          value: "2020-01-01",
        },
      };
      fireEvent.change(startDateForm, event);
      fireEvent.change(endDateForm, event);

      userEvent.click(filterButton);

      expect(mockDispatch).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
  });
  describe("When the 'Show all' button is clicked", () => {
    test("Then the dispatch function will be called once", () => {
      const expectedNumberOfCalls = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <DateFilter />
          </Provider>
        </BrowserRouter>
      );

      const startDateForm = screen.getByPlaceholderText("startDate");
      const endDateForm = screen.getByPlaceholderText("endDate");
      const resetButton = screen.getByRole("button", { name: "Show all" });

      const event = {
        type: "file",
        target: {
          value: "2020-01-01",
        },
      };
      fireEvent.change(startDateForm, event);
      fireEvent.change(endDateForm, event);

      userEvent.click(resetButton);

      expect(mockDispatch).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
  });
});
