import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { changeDateActionCreator } from "../../redux/features/pageSlice";
import { PaginationState } from "../../redux/interfaces/PageInterfaces";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loadEntriesThunk } from "../../redux/thunks/diaryThunks/diaryThunks";
import { defaultDate, numberToDate } from "../../utils/todaysDate";
import { DateFilterContainer } from "./DateFilterContainer";

const DateFilter = ({ perPage }: { perPage: number }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { dates }: PaginationState = useAppSelector((state) => state.page);
  const [formData, setFormData] = useState(dates);

  const changeData = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.id]: +event.target.value.replaceAll("-", ""),
    });
  };

  const filterEntries = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(loadEntriesThunk({ dates: formData, page: 1, perPage }));
  };

  const showAll = (): void => {
    dispatch(loadEntriesThunk({ page: 1, perPage }));
    dispatch(changeDateActionCreator(defaultDate));
    setFormData(defaultDate);
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
