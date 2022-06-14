import pageReducer, {
  changePageActionCreator,
  changePerPageActionCreator,
  nextPageActionCreator,
  previousPageActionCreator,
  totalPagesActionCreator,
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

describe("Given the totalEntriesActionCreator", () => {
  describe("When invoked with a payload of 10", () => {
    test("Then the total property in the diary state should change to this number", () => {
      const expectedState = {
        page: 2,
        perPage: 6,
        total: 10,
      };

      const action = totalPagesActionCreator(10);
      const loadedState = pageReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the changePageActionCreator", () => {
  describe("When invoked with a payload of 3", () => {
    test("Then the diary state should change to this page number", () => {
      const expectedState = {
        page: 3,
        perPage: 6,
        total: 100,
      };

      const action = changePageActionCreator(3);
      const loadedState = pageReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the changePerPageActionCreator", () => {
  describe("When invoked with a payload of 3", () => {
    test("Then the diary state should change to this page number", () => {
      const expectedState = {
        page: 2,
        perPage: 3,
        total: 100,
      };

      const action = changePerPageActionCreator(3);
      const loadedState = pageReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
