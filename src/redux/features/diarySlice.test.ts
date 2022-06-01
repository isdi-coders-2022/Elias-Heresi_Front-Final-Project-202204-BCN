import { DiaryState } from "../interfaces/DiaryInterface";
import { mockFirstEntry } from "../mocks/diaryMocks";
import diaryReducer, {
  loadActionCreator,
  nextPageActionCreator,
  previousPageActionCreator,
  resetCollectionActionCreator,
} from "./diarySlice";

const initialState = {
  page: 2,
  perPage: 6,
  total: 100,
  collection: [],
};

describe("Given the nextPageActionCreator", () => {
  describe("When invoked", () => {
    test("Then the diary state should change increase the page number", () => {
      const expectedState = {
        page: 3,
        perPage: 6,
        total: 100,
        collection: [],
      };

      const action = nextPageActionCreator;
      const loadedState = diaryReducer(initialState, action);

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
        collection: [],
      };

      const action = previousPageActionCreator;
      const loadedState = diaryReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the resetCollectionActionCreator", () => {
  describe("When invoked", () => {
    test("Then the collection will be empty", () => {
      const stateContainingEntries = {
        page: 2,
        perPage: 6,
        total: 100,
        collection: [mockFirstEntry],
      } as DiaryState;

      const expectedStatus = {
        page: 2,
        perPage: 6,
        total: 100,
        collection: [],
      } as DiaryState;

      const action = resetCollectionActionCreator;
      const loadedState = diaryReducer(stateContainingEntries, action);

      expect(loadedState).toEqual(expectedStatus);
    });
  });
});

describe("Given the loadActionCreator", () => {
  describe("When invoked", () => {
    test("Then the collection will contain the new entries", () => {
      const expectedState = {
        page: 2,
        perPage: 6,
        total: 100,
        collection: [mockFirstEntry],
      };

      const action = loadActionCreator([mockFirstEntry]);
      const loadedState = diaryReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
