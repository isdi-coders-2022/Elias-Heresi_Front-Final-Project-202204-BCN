import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import userEvent from "@testing-library/user-event";

const mockUseNavigate = jest.fn();

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
  describe("When any of the buttons in the card is clicked", () => {
    test("Then navigation will be called twice", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Home />
          </Provider>
        </BrowserRouter>
      );

      const expectedNumberOfCalls = 2;

      const searchedButtons = screen.getAllByRole("button");

      userEvent.click(searchedButtons[0]);
      userEvent.click(searchedButtons[1]);
      userEvent.click(searchedButtons[2]);

      expect(mockUseNavigate).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
  });
});
