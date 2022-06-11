import axios from "axios";
import { mockCreatedEntry } from "../../mocks/diaryMocks";
import {
  numberOfEntriesThunk,
  deleteEntryThunk,
  createEntryThunk,
  loadEntryThunk,
  editEntryThunk,
  loadPaginatedEntriesThunk,
} from "./diaryThunks";

jest.mock("axios");

const mockId = "pakito chocolates";

describe("Given the the numberOfEntriesThunks", () => {
  describe("When invoked with an error", () => {
    const dispatch = jest.fn();
    const thunk = numberOfEntriesThunk();

    test("Then the dispatch function will be called 0 times", async () => {
      axios.get = jest.fn().mockImplementation(() => {
        throw new Error();
      });
      await thunk(dispatch);

      const expectedCalls = 0;

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});

describe("Given the the loadPaginatedEntriesThunks", () => {
  describe("When invoked with an error", () => {
    const dispatch = jest.fn();
    const mockPagination = { page: 1, perPage: 1, total: 6 };
    const thunk = loadPaginatedEntriesThunk(mockPagination);

    test("Then the dispatch function will be called 3 times", async () => {
      axios.get = jest.fn().mockImplementation(() => {
        throw new Error();
      });
      await thunk(dispatch);

      const expectedCalls = 3;

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});

describe("Given the the loadEntryThunk", () => {
  describe("When invoked with an error", () => {
    const dispatch = jest.fn();
    const thunk = loadEntryThunk(mockId);

    test("Then the dispatch function will be called 2 times", async () => {
      axios.get = jest.fn().mockImplementation(() => {
        throw new Error();
      });
      await thunk(dispatch);

      const expectedCalls = 2;

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});

describe("Given the the editEntryThunk", () => {
  describe("When invoked with an error", () => {
    const dispatch = jest.fn();
    const thunk = editEntryThunk(mockCreatedEntry(), mockId);

    test("Then the dispatch function will be called 2 times", async () => {
      axios.patch = jest.fn().mockImplementation(() => {
        throw new Error();
      });
      await thunk(dispatch);

      const expectedCalls = 2;

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});

describe("Given the the deleteEntryThunk", () => {
  describe("When invoked with an error", () => {
    const dispatch = jest.fn();
    const thunk = deleteEntryThunk(mockId);

    test("Then the dispatch function will be called 2 times", async () => {
      axios.delete = jest.fn().mockImplementation(() => {
        throw new Error();
      });
      await thunk(dispatch);

      const expectedCalls = 2;

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});

describe("Given the the createEntryThunk", () => {
  describe("When invoked with an error", () => {
    const dispatch = jest.fn();
    const thunk = createEntryThunk(mockCreatedEntry());

    test("Then the dispatch function will be called 2 times", async () => {
      axios.post = jest.fn().mockImplementation(() => {
        throw new Error();
      });
      await thunk(dispatch);

      const expectedCalls = 2;

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});
