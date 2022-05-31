import Login from "./Login";
import TestRenderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

describe("Given the Login page component", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedLoginPage = TestRenderer.create(
        <Provider store={store}>
          <Login />
        </Provider>
      );

      expect(testedLoginPage).toMatchSnapshot();
    });
  });
});
