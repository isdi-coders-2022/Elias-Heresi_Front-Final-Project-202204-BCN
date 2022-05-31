import { server } from "./mocks/server";
import { loginUserThunk, registerUserThunk } from "./thunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("jwt-decode", () =>
  jest
    .fn()
    .mockResolvedValue({ name: "daddy", surname: "yankee", username: "daddy" })
);

describe("Given the loginUserThunk", () => {
  describe("When invoked", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();
      const thunk = loginUserThunk({ username: "Daddy", password: "yankee" });
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe("When RegisterUserThunk is invoked", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();
      const thunk = registerUserThunk({
        name: "king",
        surname: "daddy",
        email: "daddy@yankee.com",
        username: "daddy",
        password: "yankee",
      });
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
