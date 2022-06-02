import { render, screen } from "@testing-library/react";
import CheckLogged from "./CheckLogged";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-redux"),
  useNavigate: () => mockUseNavigate,
}));

let mockLogged = true;

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => ({ logged: mockLogged }),
}));

const inputtedProp = <h1>HOLA!</h1>;

describe("Given the CheckLogged", () => {
  describe("When the user is logged in", () => {
    test("Then children will be renderized", () => {
      render(<CheckLogged children={inputtedProp} />);

      const searchedHeader = screen.getByRole("heading");

      expect(searchedHeader).toBeTruthy();
    });
  });
  describe("When the user isn't logged in", () => {
    test("Then the user will be redirected", () => {
      mockLogged = false;

      render(<CheckLogged children={inputtedProp} />);

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
