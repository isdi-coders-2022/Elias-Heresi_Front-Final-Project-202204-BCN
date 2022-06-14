import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Login from "./Login";
import NotFound from "./NotFound";

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

describe("Given the Not Found page component", () => {
  describe("When it's invoked", () => {
    test("Then it should render an image and a heading", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NotFound />
          </Provider>
        </BrowserRouter>
      );

      const searchedHeaders = screen.getAllByRole("heading");
      const searchedImages = 1;

      const expectedHeaders = 1;
      const expectedImages = 1;

      expect(searchedHeaders).toHaveLength(expectedHeaders);
      expect(searchedImages).toHaveLength(expectedImages);
    });
  });
});
