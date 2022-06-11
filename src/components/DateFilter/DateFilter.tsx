import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { FilterDates } from "../../redux/interfaces/DiaryInterface";
import { useAppDispatch } from "../../redux/store/hooks";
import { loadFilteredEntriesThunk } from "../../redux/thunks/diaryThunks/diaryThunks";
import { dateToNumber } from "../../utils/todaysDate";
import { DateFilterContainer } from "./DateFilterContainer";

const DateFilter = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const formInitialState = {
    startDate: dateToNumber(new Date(2100, 1, 1)),
    endDate: dateToNumber(new Date(1900, 1, 1)),
  } as FilterDates;

  const [formData, setFormData] = useState(formInitialState);

  const changeData = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.id]: +event.target.value.replaceAll("-", ""),
    });
  };

  const resetDates = (): void => {
    setFormData(formInitialState);
  };

  const filterEntries = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(loadFilteredEntriesThunk(formData));
  };

  return (
    <DateFilterContainer>
      <Form autoComplete="off" onSubmit={filterEntries} noValidate>
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
      </Form>
    </DateFilterContainer>
  );
};

export default DateFilter;
