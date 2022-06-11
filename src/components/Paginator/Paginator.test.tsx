import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Paginator from "./Paginator";

const mockUseNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const mockPagination = { page: 3, perPage: 3, total: 12 };

describe("Given the Paginator component", () => {
  describe("When invoked with a total of 4 pages", () => {
    test("Then a navigation component will be created, with 8 list items (4 numbers, previous, next, first and last page)", () => {
      render(
        <Provider store={store}>
          <Paginator pagination={mockPagination} />
        </Provider>
      );

      const expectedListItems = 8;

      const searchedPaginator = screen.getByRole("list");
      const searchedPages = screen.getAllByRole("listitem");

      expect(searchedPaginator).toBeInTheDocument();
      expect(searchedPages).toHaveLength(expectedListItems);
    });
  });
  describe("When the user clicks each button", () => {
    test("Then an action will be dispatched each time", () => {
      render(
        <Provider store={store}>
          <Paginator pagination={mockPagination} />
        </Provider>
      );

      const expectedNumberOfCalls = 5;

      const searchedFirstPageButton = screen.getByRole("button", {
        name: "First",
      });
      const searchedPreviousPageButton = screen.getByRole("button", {
        name: "Previous",
      });
      const searchedSecondPageButton = screen.getByRole("button", {
        name: "2",
      });
      const searchedLastPageButton = screen.getByRole("button", {
        name: "Last",
      });
      const searchedNextPageButton = screen.getByRole("button", {
        name: "Next",
      });

      userEvent.click(searchedFirstPageButton);
      userEvent.click(searchedLastPageButton);
      userEvent.click(searchedSecondPageButton);
      userEvent.click(searchedPreviousPageButton);
      userEvent.click(searchedNextPageButton);

      expect(mockDispatch).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
  });
});
