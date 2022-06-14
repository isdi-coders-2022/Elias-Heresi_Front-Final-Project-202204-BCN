import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import NavBar from "./NavBar";

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

describe("Given the navbar component", () => {
  describe("When invoked", () => {
    test("Then a navigation component will be created", () => {
      render(
        <Provider store={store}>
          <NavBar />
        </Provider>
      );

      const searchedNav = screen.getByRole("navigation");

      expect(searchedNav).toBeInTheDocument();
    });
  });
  describe("When the logout span is clicked", () => {
    test("Then a logout action will be dispatched", () => {
      render(
        <Provider store={store}>
          <NavBar />
        </Provider>
      );

      const searchedDropDown = screen.getByText("User");
      userEvent.click(searchedDropDown);

      const searchedLogoutButton = screen.getByText("Logout");
      userEvent.click(searchedLogoutButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
  describe("When the brand, Create and Historic buttons are clicked", () => {
    test("Then a navigation action will be dispatched 3 times", () => {
      render(
        <Provider store={store}>
          <NavBar />
        </Provider>
      );
      const expectedNumberOfCalls = 4;

      const searchedBrandButton = screen.getByText("Bonanza");
      const searchedCreateButton = screen.getByText("Create");
      const searchedHistoricButton = screen.getByText("Historic");
      const searchedInsightsButton = screen.getByText("Insights");

      userEvent.click(searchedBrandButton);
      userEvent.click(searchedCreateButton);
      userEvent.click(searchedHistoricButton);
      userEvent.click(searchedInsightsButton);

      expect(mockUseNavigate).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
  });
});
