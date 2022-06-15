export interface PaginationState {
  page: number;
  perPage: number;
  total: number;
  dates: { startDate: number; endDate: number };
}

export interface PaginatorProps {
  pagination: { page: number; perPage: number; total: number };
}
