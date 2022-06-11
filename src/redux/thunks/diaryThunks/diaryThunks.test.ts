import { deleteEntryActionCreator } from "../../features/diarySlice";
import { mockCreatedEntry } from "../../mocks/diaryMocks";
import {
  numberOfEntriesThunk,
  deleteEntryThunk,
  createEntryThunk,
  loadEntryThunk,
  editEntryThunk,
  loadPaginatedEntriesThunk,
  loadFilteredEntriesThunk,
} from "./diaryThunks";
import { server } from "./mocks/server";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

window.scrollTo = jest.fn();

describe("Given the numberOfEntriesThunk", () => {
  describe("When invoked", () => {
    const dispatch = jest.fn();
    const thunk = numberOfEntriesThunk();
    test("Then the dispatch function will be called 3 times", async () => {
      await thunk(dispatch);

      const expectedCalls = 1;

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
    const thunk = createEntryThunk(mockCreatedEntry());

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
    const thunk = editEntryThunk(mockCreatedEntry(), "testedId");

    test("Then the dispatch function will be called 2 times", async () => {
      await thunk(dispatch);

      const expectedCalls = 2;

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});

describe("Given the loadPaginatedEntriesThunk", () => {
  describe("When invoked", () => {
    const dispatch = jest.fn();
    const mockPagination = { page: 1, perPage: 1, total: 6 };
    const thunk = loadPaginatedEntriesThunk(mockPagination);

    test("Then the dispatch function will be called 4 times", async () => {
      await thunk(dispatch);

      const expectedCalls = 4;

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});

describe("Given the loadFilteredEntriesThunk", () => {
  describe("When invoked", () => {
    const dispatch = jest.fn();
    const mockFilter = { startDate: 20200101, endDate: 20220101 };
    const thunk = loadFilteredEntriesThunk(mockFilter);

    test("Then the dispatch function will be called 4 times", async () => {
      await thunk(dispatch);

      const expectedCalls = 4;

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});
