import uiReducer, {
  loadingActionCreator,
  finishedLoadingActionCreator,
  feedbackOffActionCreator,
  feedbackOnActionCreator,
  saveEntryIdActionCreator,
  resetEntryIdActionCreator,
} from "./uiSlice";

describe("Given the loadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to true", () => {
      const initialState = {
        loading: false,
        feedback: false,
        entryId: "",
      };
      const expectedState = {
        loading: true,
        feedback: false,
        entryId: "",
      };

      const action = loadingActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the finiushedLoadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to false", () => {
      const initialState = {
        loading: true,
        feedback: false,
        entryId: "",
      };
      const expectedState = {
        loading: false,
        feedback: false,
        entryId: "",
      };

      const action = finishedLoadingActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the feedbackOnActionCreator", () => {
  describe("When invoked", () => {
    test("Then the feedback ui state should change to true", () => {
      const initialState = {
        loading: false,
        feedback: false,
        entryId: "",
      };
      const expectedState = {
        loading: false,
        feedback: true,
        entryId: "",
      };

      const action = feedbackOnActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the feedbackOffActionCreator", () => {
  describe("When invoked", () => {
    test("Then the feedback ui state should change to true", () => {
      const initialState = {
        loading: false,
        feedback: true,
        entryId: "",
      };
      const expectedState = {
        loading: false,
        feedback: false,
        entryId: "",
      };

      const action = feedbackOffActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

const newId = "savedId";

describe("Given the saveEntryActionCreator", () => {
  describe("When invoked", () => {
    test("Then the feedback ui state should change to true", () => {
      const initialState = {
        loading: false,
        feedback: false,
        entryId: "",
      };
      const expectedState = {
        loading: false,
        feedback: false,
        entryId: newId,
      };

      const action = saveEntryIdActionCreator(newId);
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the resetEntryIdActionCreator", () => {
  describe("When invoked", () => {
    test("Then the feedback ui state should change to true", () => {
      const initialState = {
        loading: false,
        feedback: false,
        entryId: newId,
      };
      const expectedState = {
        loading: false,
        feedback: false,
        entryId: "",
      };

      const action = resetEntryIdActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
