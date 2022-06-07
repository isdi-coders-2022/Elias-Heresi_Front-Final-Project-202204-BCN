import {
  loadActionCreator,
  deleteEntryActionCreator,
} from "../../features/diarySlice";
import {
  mockApiGetResponse,
  mockApiStringifiedResponse,
  mockCreatedEntry,
} from "../../mocks/diaryMocks";
import {
  loadEntriesThunk,
  deleteEntryThunk,
  createEntryThunk,
  loadEntryThunk,
  editEntryThunk,
} from "./diaryThunks";
import { server } from "./mocks/server";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the loadEntriesThunk", () => {
  describe("When invoked", () => {
    const dispatch = jest.fn();
    const thunk = loadEntriesThunk();
    test("Then the dispatch function will be called 3 times", async () => {
      await thunk(dispatch);

      const expectedCalls = 3;

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});

describe("Given the loadEntryThunk", () => {
  describe("When invoked", () => {
    const dispatch = jest.fn();
    const thunk = loadEntryThunk("testedId");

    test("Then the dispatch function will be called 3 times", async () => {
      await thunk(dispatch);

      const expectedCalls = 3;

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
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

describe("Given the editEntryThunk", () => {
  describe("When invoked", () => {
    const dispatch = jest.fn();
    const thunk = editEntryThunk(mockCreatedEntry, "testedId");

    test("Then the dispatch function will be called 2 times", async () => {
      await thunk(dispatch);

      const expectedCalls = 2;

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});
