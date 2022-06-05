import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import CreateForm from "../../components/CreateForm/CreateForm";
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
      {loading && <Loading />}
      <ToastContainer />
      <CreateContainer>
        <Row>
          <h1>Create a new well-being entry:</h1>
          <CreateForm />
        </Row>
      </CreateContainer>
    </>
  );
};

export default Create;
