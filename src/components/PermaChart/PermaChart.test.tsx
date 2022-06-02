import { render, screen } from "@testing-library/react";
import PermaChart from "./PermaChart";

const inputtedValues = [1, 2, 3, 4, 5, 6];

describe("Given the PermaChart component", () => {
  describe("When invoked", () => {
    test("Then a canvas element will be renderized", () => {
      render(<PermaChart values={inputtedValues} />);

      const searchedCanvas = screen.getByRole("img");

      expect(searchedCanvas).toBeTruthy();
    });
  });
});
