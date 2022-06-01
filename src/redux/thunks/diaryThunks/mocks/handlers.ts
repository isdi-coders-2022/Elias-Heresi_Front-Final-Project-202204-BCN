import { rest } from "msw";
export const mockToken: string = "xxx";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}diary/all`, (req, res, ctx) =>
    res(ctx.status(201), ctx.json({ token: mockToken }))
  ),
];
