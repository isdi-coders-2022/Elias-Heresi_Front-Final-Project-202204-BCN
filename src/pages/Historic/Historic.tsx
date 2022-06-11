import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import DateFilter from "../../components/DateFilter/DateFilter";
import EntrySummary from "../../components/EntrySummary/EntrySummary";
import Loading from "../../components/Loading/Loading";
import NavBar from "../../components/NavBar/NavBar";
import Paginator from "../../components/Paginator/Paginator";
import { DiaryState } from "../../redux/interfaces/DiaryInterface";
import { PaginationState } from "../../redux/interfaces/PageInterfaces";
import { Ui } from "../../redux/interfaces/UiInterface";
import { UserState } from "../../redux/interfaces/UserInterface";
import { useAppDispatch } from "../../redux/store/hooks";
import { RootState } from "../../redux/store/store";
import { loadPaginatedEntriesThunk } from "../../redux/thunks/diaryThunks/diaryThunks";
import { HistoricContainer } from "./HistoricContainer";

const Historic = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { loading }: Ui = useSelector((state: RootState) => state.ui);
  const diary: DiaryState = useSelector((state: RootState) => state.diary);
  const { collection } = diary;
  const { username, name }: UserState = useSelector(
    (state: RootState) => state.user
  );
  const pagination: PaginationState = useSelector(
    (state: RootState) => state.page
  );

  useEffect(() => {
    dispatch(loadPaginatedEntriesThunk(pagination));
  }, [dispatch, pagination]);

  return (
    <>
      <NavBar />
      <ToastContainer />
      {loading && <Loading />}
      <HistoricContainer>
        <h1>{name}'s well-being history</h1>

        <Container>
          {collection.length > 0 ? (
            <>
              <Row>
                <Col>
                  <DateFilter />
                </Col>
              </Row>
              <Row>
                {collection.map((entry, index) => (
                  <Col key={index}>
                    <EntrySummary entry={entry} />
                  </Col>
                ))}
              </Row>
              <Row>
                <Paginator pagination={pagination} />
              </Row>
            </>
          ) : (
            <h2>@{username} hasn't created any entries!</h2>
          )}
        </Container>
      </HistoricContainer>
    </>
  );
};

export default Historic;
