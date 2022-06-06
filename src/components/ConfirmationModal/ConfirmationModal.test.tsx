import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import {
  feedbackOffActionCreator,
  resetEntryIdActionCreator,
} from "../../redux/features/uiSlice";
import store from "../../redux/store/store";
import ConfirmationModal from "./ConfirmationModal";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => ({ feedback: true }),
}));

describe("Given the ConfirmationModal component", () => {
  describe("When invoked", () => {
    test("Then a cancel and a confirm button will be renderized", () => {
      render(
        <Provider store={store}>
          <ConfirmationModal displayText="Test" action={() => null} />
        </Provider>
      );

      const confirmButton = screen.getByRole("button", { name: "Yes" });
      const cancelButton = screen.getByRole("button", { name: "Cancel" });

      expect(confirmButton).toBeInTheDocument();
      expect(cancelButton).toBeInTheDocument();
    });
  });
  describe("When invoked and the cancel button is clicked", () => {
    test("Then the dispatch action will be called upon twice, with the resetEntryId and the feedbackOff action creators", () => {
      render(
        <Provider store={store}>
          <ConfirmationModal displayText="Test" action={() => null} />
        </Provider>
      );

      const cancelButton = screen.getByRole("button", { name: "Cancel" });
      userEvent.click(cancelButton);

      expect(mockDispatch).toHaveBeenCalledWith(resetEntryIdActionCreator());
      expect(mockDispatch).toHaveBeenCalledWith(feedbackOffActionCreator());
    });
  });
});
