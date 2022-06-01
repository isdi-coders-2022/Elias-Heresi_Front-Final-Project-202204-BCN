import uiReducer, {
  loadingActionCreator,
  finishedLoadingActionCreator,
  feedbackOffActionCreator,
  feedbackOnActionCreator,
} from "./uiSlice";

describe("Given the loadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to true", () => {
      const initialState = {
        loading: false,
        feedback: false,
      };
      const expectedState = {
        loading: true,
        feedback: false,
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
      };
      const expectedState = {
        loading: false,
        feedback: false,
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
      };
      const expectedState = {
        loading: false,
        feedback: true,
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
      };
      const expectedState = {
        loading: false,
        feedback: false,
      };

      const action = feedbackOffActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
