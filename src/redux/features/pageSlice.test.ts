import pageReducer, {
  nextPageActionCreator,
  previousPageActionCreator,
} from "./pageSlice";

let initialState = {
  page: 2,
  perPage: 6,
  total: 100,
};

describe("Given the nextPageActionCreator", () => {
  describe("When invoked", () => {
    test("Then the diary state should change increase the page number", () => {
      const expectedState = {
        page: 3,
        perPage: 6,
        total: 100,
      };

      const action = nextPageActionCreator;
      const loadedState = pageReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the previousPageActionCreator", () => {
  describe("When invoked", () => {
    test("Then the diary state should change decrease the page number", () => {
      const expectedState = {
        page: 1,
        perPage: 6,
        total: 100,
      };

      const action = previousPageActionCreator;
      const loadedState = pageReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
