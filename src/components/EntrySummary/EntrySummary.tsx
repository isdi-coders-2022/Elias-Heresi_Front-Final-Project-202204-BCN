import { Button, Card, Row, Col } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";
import { DiaryEntry } from "../../redux/interfaces/DiaryInterface";
import PermaChart from "../PermaChart/PermaChart";

const EntrySummary = ({
  entry: {
    positiveEmotion,
    engagement,
    relationships,
    meaning,
    accomplishment,
    vitality,
    commentary,
    wellBeing,
    date,
  },
}: {
  entry: DiaryEntry;
}): JSX.Element => {
  return (
    <Card style={{ width: "30rem" }}>
      <Row className="no-gutters">
        <Col xs={{ span: 6 }}>
          <PermaChart
            values={[
              positiveEmotion,
              engagement,
              relationships,
              meaning,
              accomplishment,
              vitality,
            ]}
          />
        </Col>
        <Col>
          <Card.Body>
            <Row>
              <Col xs={{ span: 8 }}>
                <Card.Title style={{ fontSize: 20 }}>
                  {date.toString().slice(0, 10).replaceAll("-", "/")}
                </Card.Title>
              </Col>
              <Col xs={{ span: 2, offset: 2 }}>
                <FaTimesCircle size={20} color={"red"} />
              </Col>
            </Row>

            <Card.Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Well being: {wellBeing}
            </Card.Text>
            <Card.Text>{`${commentary.slice(0, 90)}...`}</Card.Text>
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
