import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pagination } from "../interfaces/PageInterfaces";

const initialState = {
  page: 0,
  perPage: 10,
  total: 0,
} as Pagination;

const pageSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    nextPage: (pagination: Pagination) => ({
      ...pagination,
      page: pagination.page + 1,
    }),
    previousPage: (pagination: Pagination) => ({
      ...pagination,
      page: pagination.page - 1,
    }),
    changePage: (pagination: Pagination, action: PayloadAction<number>) => ({
      ...pagination,
      page: action.payload,
    }),
  },
});

export const {
  nextPage: nextPageActionCreator,
  previousPage: previousPageActionCreator,
  changePage: changePageActionCreator,
} = pageSlice.actions;
export default pageSlice.reducer;
