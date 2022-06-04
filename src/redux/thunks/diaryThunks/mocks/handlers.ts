import { rest } from "msw";
import { mockApiGetResponse } from "../../../mocks/diaryMocks";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}diary/all`, (req, res, ctx) =>
    res(ctx.status(201), ctx.json({ entries: mockApiGetResponse }))
  ),
  rest.delete(`${process.env.REACT_APP_API_URL}diary/delete`, (req, res, ctx) =>
    res(ctx.status(201))
  ),
];
