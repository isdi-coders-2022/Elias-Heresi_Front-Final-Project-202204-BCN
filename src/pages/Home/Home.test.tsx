import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import userEvent from "@testing-library/user-event";

let mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

let mockLogged: boolean = false;
let mockLoading: boolean = false;

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => ({ logged: mockLogged, loading: mockLoading }),
}));

describe("Given the Home page component", () => {
  describe("When any of the buttons in the card is clicked", () => {
    test("Then navigation will be called twice", () => {
      window.scrollTo = jest.fn();
      mockUseNavigate = jest.fn();
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Home />
          </Provider>
        </BrowserRouter>
      );

      const expectedNumberOfCalls = 3;

      const searchedRegistryButton = screen.getByRole("button", {
        name: "See history",
      });
      const searchedCreateButton = screen.getByRole("button", {
        name: "Create an entry",
      });
      const searchedInsightsButton = screen.getByRole("button", {
        name: "Know yourself",
      });

      userEvent.click(searchedRegistryButton);
      userEvent.click(searchedCreateButton);
      userEvent.click(searchedInsightsButton);

      expect(mockUseNavigate).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
  });
  describe("When it's invoked and the user is logged in", () => {
    test("Then it should render 3 cards", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Home />
          </Provider>
        </BrowserRouter>
      );

      const searchedCards = screen.getAllByRole("img");

      const expectedCards = 3;

      expect(searchedCards).toHaveLength(expectedCards);
    });
  });
  describe("When the loading state is on", () => {
    test("Then the loading component will be renderized", () => {
      mockLoading = true;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Home />
          </Provider>
        </BrowserRouter>
      );

      const searchedTitle = screen.getByText("Loading...");

      expect(searchedTitle).toBeInTheDocument();
    });
  });
});
