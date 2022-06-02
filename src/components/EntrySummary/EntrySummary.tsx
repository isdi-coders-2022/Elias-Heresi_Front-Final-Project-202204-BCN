import { Button, Card, Row, Col } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";
import { DiaryApiResponse } from "../../redux/interfaces/DiaryInterface";
import PermaChart from "../PermaChart/PermaChart";

const EntrySummary = ({ entry }: { entry: DiaryApiResponse }): JSX.Element => {
  return (
    <Card style={{ width: "30rem" }}>
      <Row className="no-gutters">
        <Col xs={{ span: 6 }}>
          <PermaChart
            values={[
              entry.positiveEmotions,
              entry.engagement,
              entry.relationships,
              entry.meaning,
              entry.accomplishment,
              entry.vitality,
            ]}
          />
        </Col>
        <Col>
          <Card.Body>
            <Row>
              <Col xs={{ span: 7 }}>
                <Card.Title style={{ fontSize: 20 }}>
                  {entry.date.slice(0, 10)}
                </Card.Title>
              </Col>
              <Col xs={{ span: 2, offset: 3 }}>
                <FaTimesCircle size={20} color={"red"} />
              </Col>
            </Row>

            <Card.Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Well being: {entry.wellBeing}
            </Card.Text>
            <Card.Text>{`${entry.commentary.slice(0, 90)}...`}</Card.Text>
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
