import { render, screen } from "@testing-library/react";
import { mockApiGetResponse } from "../../redux/mocks/diaryMocks";
import EntrySummary from "./EntrySummary";

describe("Given the EntrySummary component", () => {
  describe("When invoked", () => {
    test("Then a canvas element and a button will be renderized", () => {
      render(<EntrySummary entry={mockApiGetResponse[0]} />);
      screen.debug();

      const searchedCanvas = screen.getByRole("img");
      const searchedButton = screen.getByRole("button");

      expect(searchedCanvas).toBeTruthy();
      expect(searchedButton).toBeTruthy();
    });
  });
});
