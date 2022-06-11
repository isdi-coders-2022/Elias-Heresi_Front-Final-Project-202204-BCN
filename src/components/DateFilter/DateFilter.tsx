import { Button, Form, Row, Col } from "react-bootstrap";
import { DateFilterContainer } from "./DateFilterContainer";

const DateFilter = (): JSX.Element => {
  return (
    <DateFilterContainer>
      <Row>
        <Col>
          <Form.Control type="date" name="startDate" />
        </Col>
        <Col>
          <Form.Control type="date" name="endDate" />
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Filter
          </Button>
        </Col>
      </Row>
    </DateFilterContainer>
  );
};

export default DateFilter;
