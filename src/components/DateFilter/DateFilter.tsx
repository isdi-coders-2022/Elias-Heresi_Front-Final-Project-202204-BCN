import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FilterDates } from "../../redux/interfaces/DiaryInterface";
import { useAppDispatch } from "../../redux/store/hooks";
import { loadEntriesThunk } from "../../redux/thunks/diaryThunks/diaryThunks";
import { dateToNumber, numberToDate } from "../../utils/todaysDate";
import { DateFilterContainer } from "./DateFilterContainer";

const DateFilter = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const todaysDate = new Date();
  let previousDate = new Date();
  previousDate.setMonth(todaysDate.getMonth() - 3);

  const formInitialState = {
    startDate: dateToNumber(previousDate),
    endDate: dateToNumber(todaysDate),
  } as FilterDates;

  const unfilteredDates = {
    startDate: dateToNumber(new Date(1900, 1, 1)),
    endDate: dateToNumber(new Date(2100, 1, 1)),
  } as FilterDates;

  const [formData, setFormData] = useState(formInitialState);

  const changeData = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.id]: +event.target.value.replaceAll("-", ""),
    });
    console.log(event.target.value);
  };

  const filterEntries = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(loadEntriesThunk({ dates: formData, page: 1, perPage: 4 }));
  };

  const showAll = (): void => {
    dispatch(loadEntriesThunk({ dates: unfilteredDates, page: 1, perPage: 4 }));
    setFormData(formInitialState);
  };

  return (
    <DateFilterContainer>
      <Form autoComplete="off" onSubmit={filterEntries} noValidate>
        <Form.Control
          placeholder="startDate"
          type="date"
          id="startDate"
          defaultValue={numberToDate(formData.startDate)}
          onChange={changeData}
        />
        <Form.Control
          placeholder="endDate"
          type="date"
          id="endDate"
          defaultValue={numberToDate(formData.endDate)}
          onChange={changeData}
        />
        <div>
          <Button variant="primary" type="submit">
            Filter
          </Button>
          <Button variant="secondary" type="button" onClick={showAll}>
            Show all
          </Button>
        </div>
      </Form>
    </DateFilterContainer>
  );
};

export default DateFilter;
