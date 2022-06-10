import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import EditForm from "../../components/EditForm/EditForm";
import Loading from "../../components/Loading/Loading";
import NavBar from "../../components/NavBar/NavBar";
import { Ui } from "../../redux/interfaces/UiInterface";
import { RootState } from "../../redux/store/store";
import { CreateContainer } from "./CreateContainer";

const Create = (): JSX.Element => {
  const { loading }: Ui = useSelector((state: RootState) => state.ui);

  return (
    <>
      <NavBar />
      <ToastContainer />
      <CreateContainer>
        {loading && <Loading />}
        <Row>
          <h1>Create a new well-being entry:</h1>
          <EditForm />
        </Row>
      </CreateContainer>
    </>
  );
};

export default Create;
