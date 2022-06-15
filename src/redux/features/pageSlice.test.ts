import pageReducer, {
  changeEndDateActionCreator,
  changePageActionCreator,
  changePerPageActionCreator,
  changeStartDateActionCreator,
  nextPageActionCreator,
  previousPageActionCreator,
  totalPagesActionCreator,
} from "./pageSlice";

let initialState = {
  page: 2,
  perPage: 6,
  total: 100,
  dates: {
    startDate: 20200101,
    endDate: 20210101,
  },
};

describe("Given the nextPageActionCreator", () => {
  describe("When invoked", () => {
    test("Then the diary state should change increase the page number", () => {
      const expectedState = {
        page: 3,
        perPage: 6,
        total: 100,
        dates: {
          startDate: 20200101,
          endDate: 20210101,
        },
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
        dates: {
          startDate: 20200101,
          endDate: 20210101,
        },
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
        dates: {
          startDate: 20200101,
          endDate: 20210101,
        },
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
        dates: {
          startDate: 20200101,
          endDate: 20210101,
        },
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
        dates: {
          startDate: 20200101,
          endDate: 20210101,
        },
      };

      const action = changePerPageActionCreator(3);
      const loadedState = pageReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the changeStartDateActionCreator", () => {
  describe("When invoked with a payload of 20210101", () => {
    test("Then the diary state should change to this start date", () => {
      const expectedState = {
        page: 2,
        perPage: 6,
        total: 100,
        dates: {
          startDate: 20210101,
          endDate: 20210101,
        },
      };

      const action = changeStartDateActionCreator(20210101);
      const loadedState = pageReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the changeEndDateActionCreator", () => {
  describe("When invoked with a payload of 20220101", () => {
    test("Then the diary state should change to this start date", () => {
      const expectedState = {
        page: 2,
        perPage: 6,
        total: 100,
        dates: {
          startDate: 20200101,
          endDate: 20220101,
        },
      };

      const action = changeEndDateActionCreator(20220101);
      const loadedState = pageReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
