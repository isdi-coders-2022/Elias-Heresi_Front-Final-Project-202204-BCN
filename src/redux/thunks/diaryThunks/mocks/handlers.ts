import { rest } from "msw";
import { mockApiGetResponse, mockApiId } from "../../../mocks/diaryMocks";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}diary/all`, (req, res, ctx) =>
    res(ctx.status(201), ctx.json({ entries: mockApiGetResponse }))
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}diary/all?perPage=1&page=1`,
    (req, res, ctx) =>
      res(ctx.status(201), ctx.json({ entries: mockApiGetResponse }))
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}diary/byId/testedId`,
    (req, res, ctx) =>
      res(ctx.status(201), ctx.json({ entry: mockApiGetResponse[0] }))
  ),
  rest.delete(`${process.env.REACT_APP_API_URL}diary/delete`, (req, res, ctx) =>
    res(ctx.status(201))
  ),
  rest.patch(
    `${process.env.REACT_APP_API_URL}diary/edit/testedId`,
    (req, res, ctx) => res(ctx.status(201))
  ),

  rest.post(`${process.env.REACT_APP_API_URL}diary`, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        id: mockApiId,
        msg: "The entry was successfully created in marta's diary",
      })
    )
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}diary/date?startDate=20200101&endDate=20220101`,
    (req, res, ctx) =>
      res(ctx.status(201), ctx.json({ entries: mockApiGetResponse }))
  ),
];
