import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given the Loading component", () => {
  describe("When invoked", () => {
    test("Then a header will be renderized", () => {
      render(<Loading />);

      const searchedHeader = screen.getByRole("heading");

      expect(searchedHeader).toBeTruthy();
    });
  });
});
