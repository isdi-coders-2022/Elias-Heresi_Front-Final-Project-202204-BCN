import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Loading from "./Loading";

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

describe("Given the loading component", () => {
  describe("When invoked", () => {
    test("Then a navigation component will be created", () => {
      render(
        <Provider store={store}>
          <Loading />
        </Provider>
      );

      const searchedTitle = screen.getByText("Loading...");

      expect(searchedTitle).toBeInTheDocument();
    });
  });
});
