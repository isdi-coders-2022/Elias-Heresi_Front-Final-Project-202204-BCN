import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import TestRenderer from "react-test-renderer";
import Historic from "./Historic";

describe("Given the Historic page component", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedLoginPage = TestRenderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Historic />
          </BrowserRouter>
        </Provider>
      );

      expect(testedLoginPage).toMatchSnapshot();
    });
  });
});
