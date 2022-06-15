import { useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import DateFilter from "../../components/DateFilter/DateFilter";
import Loading from "../../components/Loading/Loading";
import NavBar from "../../components/NavBar/NavBar";
import SummaryChart from "../../components/SummaryChart/SummaryChart";
import { DiaryState } from "../../redux/interfaces/DiaryInterface";
import { Ui } from "../../redux/interfaces/UiInterface";
import { UserState } from "../../redux/interfaces/UserInterface";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loadEntriesThunk } from "../../redux/thunks/diaryThunks/diaryThunks";
import { createLineChartElements } from "../../utils/definePermaValues";
import { InsightsContainer } from "./InsightsContainer";

const Insights = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { loading }: Ui = useAppSelector((state) => state.ui);
  const { collection }: DiaryState = useAppSelector((state) => state.diary);
  const { username, name }: UserState = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadEntriesThunk({ page: 1, perPage: 100 }));
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <NavBar />
        <ToastContainer />
        <Loading />
        <InsightsContainer>
          <h1>{name}'s well-being history</h1>
        </InsightsContainer>
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <ToastContainer />
        <InsightsContainer>
          <h1>{name}'s well-being history</h1>
          <Container>
            {collection.length > 0 ? (
              <>
                <Row>
                  <DateFilter />
                </Row>
                <Row>
                  <SummaryChart props={createLineChartElements(collection)} />
                </Row>
              </>
            ) : (
              <h2>
                @{username} hasn't got any entries in the selected date range.
              </h2>
            )}
          </Container>
        </InsightsContainer>
      </>
    );
  }
};

export default Insights;
