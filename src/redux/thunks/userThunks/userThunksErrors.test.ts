import axios from "axios";
import { mockCreatedEntry } from "../../mocks/diaryMocks";
import { loginUserThunk, registerUserThunk } from "./userThunks";

jest.mock("axios");

const mockId = "pakito chocolates";

const decodedToken = { name: "daddy", surname: "yankee", username: "daddy" };

jest.mock("jwt-decode", () => () => decodedToken);

describe("Given the the registerUserThunk", () => {
  describe("When invoked with an error", () => {
    const dispatch = jest.fn();
    const thunk = registerUserThunk({
      name: "king",
      surname: "daddy",
      email: "daddy@yankee.com",
      username: "daddy",
      password: "yankee",
    });

    test("Then the dispatch function will be called 3 times", async () => {
      axios.post = jest.fn().mockImplementation(() => {
        throw new Error();
      });
      await thunk(dispatch);

      const expectedCalls = 3;

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});

describe("Given the the loginUserThunk", () => {
  describe("When invoked with an error", () => {
    const dispatch = jest.fn();
    const loginInformation = { username: "Daddy", password: "yankee" };
    const thunk = loginUserThunk(loginInformation);

    test("Then the dispatch function will be called 3 times", async () => {
      axios.post = jest.fn().mockImplementation(() => {
        throw new Error();
      });
      await thunk(dispatch);

      const expectedCalls = 2;

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});
