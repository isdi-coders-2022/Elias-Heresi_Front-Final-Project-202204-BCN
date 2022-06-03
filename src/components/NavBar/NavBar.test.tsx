import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { logOutUserThunk } from "../../redux/thunks/userThunks/userThunks";
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
});
