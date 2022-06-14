import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import EntryDetail from "../../components/EntryDetail/EntryDetail";
import Loading from "../../components/Loading/Loading";
import NavBar from "../../components/NavBar/NavBar";
import { DiaryState } from "../../redux/interfaces/DiaryInterface";
import { Ui } from "../../redux/interfaces/UiInterface";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { RootState } from "../../redux/store/store";
import { loadEntryThunk } from "../../redux/thunks/diaryThunks/diaryThunks";
import { DetailContainer } from "./DetailContainer";

const Detail = (): JSX.Element => {
  const { loading }: Ui = useAppSelector((state: RootState) => state.ui);
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

      <ToastContainer />
      <DetailContainer>
        {loading && <Loading />}
        <Container>
          <Row>
            <h1>Entry details:</h1>
            {collection.length > 0 && collection[0].id === id ? (
              <EntryDetail entry={collection[0]} />
            ) : (
              <h2>Entry doesn't exist</h2>
            )}
          </Row>
        </Container>
      </DetailContainer>
    </>
  );
};

export default Detail;
