import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dateToNumber } from "../../utils/todaysDate";
import { PaginationState } from "../interfaces/PageInterfaces";

const todaysDate = new Date();
let previousDate = new Date();
previousDate.setMonth(todaysDate.getMonth() - 3);

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
    changeStartDate: (
      pagination: PaginationState,
      action: PayloadAction<number>
    ) => ({
      ...pagination,
      dates: { ...pagination.dates, startDate: action.payload },
    }),
    changeEndDate: (
      pagination: PaginationState,
      action: PayloadAction<number>
    ) => ({
      ...pagination,
      dates: { ...pagination.dates, endDate: action.payload },
    }),
  },
});

export const {
  totalEntries: totalPagesActionCreator,
  nextPage: nextPageActionCreator,
  previousPage: previousPageActionCreator,
  changePage: changePageActionCreator,
  changePerPage: changePerPageActionCreator,
  changeStartDate: changeStartDateActionCreator,
  changeEndDate: changeEndDateActionCreator,
} = pageSlice.actions;
export default pageSlice.reducer;
