import { DiaryState } from "../interfaces/DiaryInterface";
import { mockFirstEntry, mockSecondEntry } from "../mocks/diaryMocks";
import diaryReducer, {
  createEntryActionCreator,
  deleteEntryActionCreator,
  loadActionCreator,
  resetCollectionActionCreator,
} from "./diarySlice";

let initialState = {
  collection: [],
};

describe("Given the resetCollectionActionCreator", () => {
  describe("When invoked", () => {
    test("Then the collection will be empty", () => {
      const stateContainingEntries = {
        collection: [mockFirstEntry],
      } as DiaryState;

      const expectedStatus = {
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
        collection: [mockFirstEntry],
      };

      const action = loadActionCreator([mockFirstEntry]);
      const loadedState = diaryReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the deleteEntryActionCreator", () => {
  describe("When invoked with the objectId to be deleted", () => {
    test("Then the collection won't contain this entry", () => {
      let initialState = {
        collection: [mockFirstEntry],
      };

      const expectedState = {
        collection: [],
      };

      const idToBeDeleted = "aa";

      const action = deleteEntryActionCreator(idToBeDeleted);
      const loadedState = diaryReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the createEntryActionCreator", () => {
  describe("When invoked with the entry to be created", () => {
    test("Then the collection will contain the new entries", () => {
      let initialState = {
        collection: [mockFirstEntry],
      };

      const expectedState = {
        collection: [mockFirstEntry, mockSecondEntry],
      };

      const action = createEntryActionCreator(mockSecondEntry);
      const loadedState = diaryReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
