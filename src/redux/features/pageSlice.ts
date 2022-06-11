import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaginationState } from "../interfaces/PageInterfaces";

const initialState = {
  page: 1,
  perPage: 10,
  total: 100,
} as PaginationState;

const pageSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    totalPages: (
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
  },
});

export const {
  totalPages: totalPagesActionCreator,
  nextPage: nextPageActionCreator,
  previousPage: previousPageActionCreator,
  changePage: changePageActionCreator,
} = pageSlice.actions;
export default pageSlice.reducer;
