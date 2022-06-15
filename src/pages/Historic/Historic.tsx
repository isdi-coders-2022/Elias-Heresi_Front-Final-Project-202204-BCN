import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
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
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loadEntriesThunk } from "../../redux/thunks/diaryThunks/diaryThunks";
import { HistoricContainer } from "./HistoricContainer";

const Historic = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { loading }: Ui = useAppSelector((state) => state.ui);
  const { collection }: DiaryState = useAppSelector((state) => state.diary);
  const { username, name }: UserState = useAppSelector((state) => state.user);
  const { dates, page, perPage, total }: PaginationState = useAppSelector(
    (state) => state.page
  );

  useEffect(() => {
    dispatch(loadEntriesThunk({ dates, page, perPage }));
  }, [dispatch, dates, page, perPage]);

  if (loading) {
    return (
      <>
        <NavBar />
        <ToastContainer />
        <Loading />
        <HistoricContainer>
          <h1>{name}'s well-being entries</h1>
        </HistoricContainer>
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <ToastContainer />
        <HistoricContainer>
          <h1>{name}'s well-being entries</h1>
          <Container>
            <Row>
              <DateFilter perPage={4} />
            </Row>
            {collection.length > 0 ? (
              <>
                <Row>
                  {collection.map((entry, index) => (
                    <Col key={index}>
                      <EntrySummary entry={entry} />
                    </Col>
                  ))}
                </Row>
                <Row>
                  <Paginator pagination={{ page, perPage, total }} />
                </Row>
              </>
            ) : (
              <h2>
                @{username} hasn't got any entries in the selected date range.
              </h2>
            )}
          </Container>
        </HistoricContainer>
      </>
    );
  }
};

export default Historic;
