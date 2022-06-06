import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockApiGetResponse } from "../../redux/mocks/diaryMocks";
import { usedToken } from "../../redux/mocks/userMocks";
import store from "../../redux/store/store";
import Historic from "./Historic";

const mockUsername = "Chocolatero";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => jest.fn(),
  useSelector: () => ({
    collection: mockApiGetResponse,
    loading: false,
    username: "marta",
    name: mockUsername,
  }),
}));

const localStorageMock = (() => {
  return {
    getItem() {
      return usedToken;
    },
  };
})();
Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

jest.mock("react-chartjs-2", () => ({
  PolarArea: () => <canvas role="img" />,
}));

describe("Given the Historic page component", () => {
  describe("When it's invoked", () => {
    test("Then if the collection contains 1 entries, then 1 card will be rendered", () => {
      const numberOfExpectedEntries = 1;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Historic />
          </Provider>
        </BrowserRouter>
      );

      const searchedCards = screen.getAllByRole("img");

      expect(searchedCards).toHaveLength(numberOfExpectedEntries);
    });
    test("Then the username will be rendered", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Historic />
          </Provider>
        </BrowserRouter>
      );
      const searchedText = screen.getByRole("heading");

      expect(searchedText).toHaveTextContent(mockUsername);
    });
  });
});
