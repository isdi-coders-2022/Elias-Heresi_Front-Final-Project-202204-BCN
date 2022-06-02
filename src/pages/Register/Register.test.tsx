import TestRenderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Register from "./Register";
import { BrowserRouter } from "react-router-dom";

describe("Given the Register page component", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedRegisterPage = TestRenderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </Provider>
      );

      expect(testedRegisterPage).toMatchSnapshot();
    });
  });
});
