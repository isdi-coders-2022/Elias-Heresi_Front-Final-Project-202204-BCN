import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dateToNumber } from "../../utils/todaysDate";
import { FilterDates } from "../interfaces/DiaryInterface";
import { PaginationState } from "../interfaces/PageInterfaces";

const todaysDate = new Date();
let previousDate = new Date();
previousDate.setMonth(todaysDate.getMonth() - 24);

const initialState = {
  page: 1,
  perPage: 4,
  total: 0,
  dates: {
    startDate: dateToNumber(previousDate),
    endDate: dateToNumber(todaysDate),
  },
} as PaginationState;

const pageSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    totalEntries: (
      pagination: PaginationState,
      action: PayloadAction<number>
    ) => ({
      ...pagination,
      total: action.payload,
    }),
    nextPage: (pagination: PaginationState) => ({
      ...pagination,
      page: pagination.page + 1,
    }),
    previousPage: (pagination: PaginationState) => ({
      ...pagination,
      page: pagination.page - 1,
    }),
    changePage: (
      pagination: PaginationState,
      action: PayloadAction<number>
    ) => ({
      ...pagination,
      page: action.payload,
    }),
    changePerPage: (
      pagination: PaginationState,
      action: PayloadAction<number>
    ) => ({
      ...pagination,
      perPage: action.payload,
    }),
    changeDate: (
      pagination: PaginationState,
      action: PayloadAction<FilterDates>
    ) => ({
      ...pagination,
      dates: action.payload,
    }),
  },
});

export const {
  totalEntries: totalPagesActionCreator,
  nextPage: nextPageActionCreator,
  previousPage: previousPageActionCreator,
  changePage: changePageActionCreator,
  changePerPage: changePerPageActionCreator,
  changeDate: changeDateActionCreator,
} = pageSlice.actions;
export default pageSlice.reducer;
