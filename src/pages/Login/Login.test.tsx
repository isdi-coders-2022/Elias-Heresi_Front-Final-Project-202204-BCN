import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

let mockLogged: boolean = false;

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => ({ logged: mockLogged }),
}));

describe("Given the Login page component", () => {
  describe("When it's invoked and the user isn't logged in", () => {
    test("Then it should render an image and 2 headings", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Login />
          </Provider>
        </BrowserRouter>
      );

      const searchedHeaders = screen.getAllByRole("heading");
      const searchedImages = screen.getAllByRole("img");

      const expectedHeaders = 2;
      const expectedImages = 1;

      expect(searchedHeaders).toHaveLength(expectedHeaders);
      expect(searchedImages).toHaveLength(expectedImages);
    });
  });
  describe("If the user is logged in", () => {
    test("Then the user will be redirected to another page", () => {
      mockLogged = true;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Login />
          </Provider>
        </BrowserRouter>
      );

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
