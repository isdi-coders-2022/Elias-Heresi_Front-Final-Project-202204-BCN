import { ChangeEvent, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { FilterDates } from "../../redux/interfaces/DiaryInterface";
import { dateToNumber } from "../../utils/todaysDate";
import { DateFilterContainer } from "./DateFilterContainer";

const DateFilter = (): JSX.Element => {
  const todaysDate = dateToNumber(new Date());

  const formInitialState = {
    startDate: todaysDate,
    endDate: todaysDate,
  } as FilterDates;

  const [formData, setFormData] = useState(formInitialState);

  const changeData = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.id]: +event.target.value.replaceAll("-", ""),
    });
  };

  return (
    <DateFilterContainer>
      <Row>
        <Col>
          <Form.Control type="date" id="startDate" onChange={changeData} />
        </Col>
        <Col>
          <Form.Control type="date" id="endDate" onChange={changeData} />
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
