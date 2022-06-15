import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import EditForm from "../../components/EditForm/EditForm";
import Loading from "../../components/Loading/Loading";
import NavBar from "../../components/NavBar/NavBar";
import { DiaryState } from "../../redux/interfaces/DiaryInterface";
import { Ui } from "../../redux/interfaces/UiInterface";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loadEntryThunk } from "../../redux/thunks/diaryThunks/diaryThunks";
import { CreateContainer } from "../Create/CreateContainer";

const Edit = (): JSX.Element => {
  const { loading }: Ui = useAppSelector((state) => state.ui);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { collection }: DiaryState = useAppSelector((state) => state.diary);

  useEffect(() => {
    if (id) {
      dispatch(loadEntryThunk(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <NavBar />
      {loading && <Loading />}
      <ToastContainer />
      <CreateContainer>
        <h1>Edit your well-being entry:</h1>

        {collection.length > 0 && collection[0].id === id ? (
          <EditForm entry={collection[0]} />
        ) : (
          <h2>Entry doesn't exist</h2>
        )}
      </CreateContainer>
    </>
  );
};

export default Edit;
