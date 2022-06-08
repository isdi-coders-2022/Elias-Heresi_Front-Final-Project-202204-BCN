import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Register from "./Register";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

let mockLogged: boolean = false;

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => ({ logged: mockLogged }),
}));

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given the Register page component", () => {
  describe("When it's invoked and the user isn't logged in", () => {
    test("Then 2 headers and an image will be rendered", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Register />
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

  describe("When invoked and the user is already logged in", () => {
    test("Then the user will be redirected to another page", () => {
      mockLogged = true;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Register />
          </Provider>
        </BrowserRouter>
      );

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
