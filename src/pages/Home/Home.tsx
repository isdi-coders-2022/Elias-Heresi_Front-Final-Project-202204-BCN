import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import Loading from "../../components/Loading/Loading";
import { Ui } from "../../redux/interfaces/UiInterface";
import { ToastContainer } from "react-toastify";
import { HomeContainer } from "./HomeContainer";
import NavBar from "../../components/NavBar/NavBar";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = (): JSX.Element => {
  const { loading }: Ui = useSelector((state: RootState) => state.ui);
  const navigate = useNavigate();

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
                    src="https://as2.ftcdn.net/v2/jpg/01/78/70/03/1000_F_178700374_qzWajp295ELwEDqqW0d7xPTXyX3mgkUM.jpg"
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
                    src="https://as2.ftcdn.net/v2/jpg/01/78/70/03/1000_F_178700374_qzWajp295ELwEDqqW0d7xPTXyX3mgkUM.jpg"
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
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://as2.ftcdn.net/v2/jpg/01/78/70/03/1000_F_178700374_qzWajp295ELwEDqqW0d7xPTXyX3mgkUM.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Know yourself</Card.Title>
                    <Card.Text>
                      More information about what is positive psychology and
                      ways to discover your strengths which will help you create
                      the life you want.
                    </Card.Text>
                    <Button variant="primary">Know yourself</Button>
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
