import { loadEntriesThunk } from "./diaryThunks";
import { server } from "./mocks/server";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the loadEntriesThunk", () => {
  describe("When invoked", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();
      const thunk = loadEntriesThunk("xx");
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
