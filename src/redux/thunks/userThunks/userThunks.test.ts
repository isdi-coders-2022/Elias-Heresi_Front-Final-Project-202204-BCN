import { loginActionCreator } from "../../features/userSlice";
import { server } from "./mocks/server";
import {
  loginUserThunk,
  logOutUserThunk,
  registerUserThunk,
} from "./userThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const decodedToken = { name: "daddy", surname: "yankee", username: "daddy" };

jest.mock("jwt-decode", () => () => decodedToken);

describe("Given the loginUserThunk", () => {
  describe("When invoked", () => {
    const dispatch = jest.fn();
    const loginInformation = { username: "Daddy", password: "yankee" };
    const thunk = loginUserThunk(loginInformation);
    test("Then the dispatch function will be called 3 times", async () => {
      const expectedNumberOfCalls = 3;

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
    test("Then the dispatch function will be called with the login action creator", async () => {
      const action = loginActionCreator(decodedToken);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
  describe("When RegisterUserThunk is invoked", () => {
    const dispatch = jest.fn();
    const thunk = registerUserThunk({
      name: "king",
      surname: "daddy",
      email: "daddy@yankee.com",
      username: "daddy",
      password: "yankee",
    });
    test("Then the dispatch function will be called 4 times", async () => {
      await thunk(dispatch);
      const expectedNumberOfCalls = 3;

      expect(dispatch).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
    test("Then the dispatch function will be called with the loginActionCreator", async () => {
      const dispatch = jest.fn();

      const action = loginActionCreator(decodedToken);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
  describe("When logOutUserThunk is called", () => {
    test("Then the dispatch function will be called two times", async () => {
      const dispatch = jest.fn();
      const thunk = logOutUserThunk();
      await thunk(dispatch);

      const expectedNumberOfCalls = 2;

      expect(dispatch).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
  });
});
