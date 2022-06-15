import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import Loading from "../../components/Loading/Loading";
import { Ui } from "../../redux/interfaces/UiInterface";
import { ToastContainer } from "react-toastify";
import { HomeContainer } from "./HomeContainer";
import NavBar from "../../components/NavBar/NavBar";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/hooks";
import { changePerPageActionCreator } from "../../redux/features/pageSlice";

const Home = (): JSX.Element => {
  const { loading }: Ui = useSelector((state: RootState) => state.ui);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      <NavBar />
      <ToastContainer />
      {loading ? (
        <Loading />
      ) : (
        <HomeContainer>
          <Container>
            <Row>
              <h1 className="homepage__main--title">
                Grow towards a better life
              </h1>
              <p className="homepage__main--subtitle">
                How? Tracking your well-being on a daily basis, identifying
                which aspects have the bigger impact in yourself, as well as
                pinpointing which could be improved.
              </p>
            </Row>
            <Row>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="data:image/jpeg;base64,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"
                    height="250"
                    width="auto"
                  />
                  <Card.Body>
                    <Card.Title>See your past history</Card.Title>
                    <Card.Text>
                      See a collection of your past entries. Revisit all of the
                      feelings, moments and memories which lead you to who you
                      are today.
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        dispatch(changePerPageActionCreator(4));
                        navigate(`/historic`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      See history
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://amtshows.com/wp-content/uploads/2019/11/kids-laughing-lead-crop.jpg"
                    height="250"
                    width="auto"
                  />
                  <Card.Body>
                    <Card.Title>Create a new diary entry</Card.Title>
                    <Card.Text>
                      Register how are you feeling today (or in the past), based
                      on our well-being variables.
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        navigate(`/create`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      Create an entry
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://chopra.brightspotcdn.com/dims4/default/1c49a99/2147483647/strip/true/crop/643x275+0+12/resize/894x383!/quality/90/?url=http%3A%2F%2Fchopra-brightspot.s3.amazonaws.com%2Fe5%2F79%2Ffc12f651d579cc62ae5f34fbcb57%2Fon-again-off-again-meditating-does-it-do-any-good.jpg"
                    height="250"
                    width="auto"
                  />
                  <Card.Body>
                    <Card.Title>Know yourself</Card.Title>
                    <Card.Text>
                      Discover insights on your well-being which will help you
                      create the life you want.
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        dispatch(changePerPageActionCreator(100));
                        navigate(`/insights`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      Know yourself
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </HomeContainer>
      )}
    </>
  );
};

export default Home;
