export interface PaginationState {
  page: number;
  perPage: number;
  total: number;
}

export interface PaginatorProps {
  pagination: { page: number; perPage: number; total: number };
}
