import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Create from "./Create";

describe("Given the Create page", () => {
  describe("When invoked", () => {
    test("Then a header, along with the form's 6 sliders will be renderized", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Create />
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
});
