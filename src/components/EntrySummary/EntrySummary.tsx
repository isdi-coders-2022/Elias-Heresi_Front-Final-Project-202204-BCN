import { Button, Card, Row, Col } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";
import PermaChart from "../PermaChart/PermaChart";

const EntrySummary = (): JSX.Element => {
  return (
    <Card style={{ width: "30rem" }}>
      <Row className="no-gutters">
        <Col xs={{ span: 6 }}>
          <PermaChart values={[1, 2, 3, 4, 5, 6]} />
        </Col>
        <Col>
          <Card.Body>
            <Row>
              <Col xs={{ span: 5 }}>
                <Card.Title style={{ fontSize: 24 }}>20/5</Card.Title>
              </Col>
              <Col xs={{ span: 2, offset: 4 }}>
                <FaTimesCircle size={30} color={"red"} />
              </Col>
            </Row>

            <Card.Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Well being: 6
            </Card.Text>
            <Card.Text>Fell down the stairs. Had a hard a time...</Card.Text>
            <Row>
              <Col xs={{ offset: 2 }}>
                <Button
                  variant="primary"
                  className="d-flex align-items-center justify-content-center"
                >
                  See details
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default EntrySummary;
