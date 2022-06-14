import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockFirstEntry } from "../../redux/mocks/diaryMocks";
import store from "../../redux/store/store";
import Edit from "./Edit";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => ({ collection: [mockFirstEntry] }),
}));

let mockId: string | null = "aa";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: mockId }),
}));

describe("Given the Edit page", () => {
  describe("When invoked", () => {
    test("Then a header, along with the form's 7 sliders will be renderized", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Edit />
          </Provider>
        </BrowserRouter>
      );

      const expectedSliders = 7;

      const searchedHeader = screen.getByRole("heading");
      const searchedSliders = screen.getAllByRole("slider");

      expect(searchedHeader).toBeInTheDocument();
      expect(searchedSliders).toHaveLength(expectedSliders);
    });
  });
  describe("When no id is passed", () => {
    test("Then the text 'Entry doesn't exist' will be renderized,", () => {
      mockId = null;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Edit />
          </Provider>
        </BrowserRouter>
      );
      const expectedText = "Entry doesn't exist";

      const searchedHeader = screen.getAllByRole("heading");

      expect(searchedHeader[1]).toHaveTextContent(expectedText);
    });
  });
});
