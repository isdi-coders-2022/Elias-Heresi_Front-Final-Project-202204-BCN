import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { feedbackOffActionCreator } from "../../redux/features/uiSlice";
import { ConfirmationInput, Ui } from "../../redux/interfaces/UiInterface";
import { useAppDispatch } from "../../redux/store/hooks";
import { RootState } from "../../redux/store/store";

const ConfirmationModal = ({ displayText, action }: ConfirmationInput) => {
  const dispatch = useAppDispatch();
  const { feedback }: Ui = useSelector((state: RootState) => state.ui);
  const handleClose = () => {
    dispatch(feedbackOffActionCreator());
  };

  return (
    <Modal show={feedback} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Bonanza</Modal.Title>
      </Modal.Header>
      <Modal.Body>{displayText}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={action}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
