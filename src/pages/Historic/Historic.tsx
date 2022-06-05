import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import EntrySummary from "../../components/EntrySummary/EntrySummary";
import Loading from "../../components/Loading/Loading";
import NavBar from "../../components/NavBar/NavBar";
import { loginActionCreator } from "../../redux/features/userSlice";
import { DiaryState } from "../../redux/interfaces/DiaryInterface";
import { Ui } from "../../redux/interfaces/UiInterface";
import {
  UserState,
  UserData,
  Token,
} from "../../redux/interfaces/UserInterface";
import { useAppDispatch } from "../../redux/store/hooks";
import { RootState } from "../../redux/store/store";
import { loadEntriesThunk } from "../../redux/thunks/diaryThunks/diaryThunks";
import { logOutUserThunk } from "../../redux/thunks/userThunks/userThunks";
import { HistoricContainer } from "./HistoricContainer";

const Historic = (): JSX.Element => {
  const { loading }: Ui = useSelector((state: RootState) => state.ui);
  const { collection }: DiaryState = useSelector(
    (state: RootState) => state.diary
  );
  const { username, name }: UserState = useSelector(
    (state: RootState) => state.user
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const token: Token = localStorage.getItem("token");

    if (token) {
      const userInfo: UserData = jwtDecode(token);
      dispatch(loginActionCreator(userInfo));
      dispatch(loadEntriesThunk(token));
    } else {
      dispatch(logOutUserThunk());
    }
  }, [dispatch]);

  return (
    <>
      <NavBar />
      {loading && <Loading />}
      <ToastContainer />
      <HistoricContainer>
        <Row>
          <h1>{name}'s well-being history</h1>
          {collection.length > 0 ? (
            collection.map((entry, index) => (
              <Col key={index}>
                <EntrySummary entry={entry} />
              </Col>
            ))
          ) : (
            <h2>@{username} hasn't created any entries!</h2>
          )}
        </Row>
      </HistoricContainer>
    </>
  );
};

export default Historic;
