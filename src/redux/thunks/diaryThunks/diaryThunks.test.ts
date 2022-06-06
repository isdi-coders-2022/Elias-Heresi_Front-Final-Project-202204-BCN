import {
  loadActionCreator,
  deleteEntryActionCreator,
} from "../../features/diarySlice";
import { mockApiGetResponse, mockCreatedEntry } from "../../mocks/diaryMocks";
import {
  loadEntriesThunk,
  deleteEntryThunk,
  createEntryThunk,
} from "./diaryThunks";
import { server } from "./mocks/server";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the loadEntriesThunk", () => {
  describe("When invoked", () => {
    const dispatch = jest.fn();
    const thunk = loadEntriesThunk("xx");
    test("Then the dispatch function will be called 3 times", async () => {
      await thunk(dispatch);

      const expectedCalls = 3;

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
    test("Then the dispatch function will be called with the loadActionCreator", async () => {
      const action = loadActionCreator(mockApiGetResponse);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe("Given the deleteEntryThunk", () => {
  describe("When invoked", () => {
    const fakeId = "xx";
    const dispatch = jest.fn();
    const thunk = deleteEntryThunk(fakeId);
    test("Then the dispatch function will be called 3 times", async () => {
      await thunk(dispatch);

      const expectedCalls = 3;

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
    test("Then the deleteActionCreator will be dispatched", async () => {
      await thunk(dispatch);

      const action = deleteEntryActionCreator(fakeId);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe("Given the createEntryThunk", () => {
  describe("When invoked", () => {
    const dispatch = jest.fn();
    const thunk = createEntryThunk(mockCreatedEntry);

    test("Then the dispatch function will be called 2 times", async () => {
      await thunk(dispatch);

      const expectedCalls = 2;

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});
