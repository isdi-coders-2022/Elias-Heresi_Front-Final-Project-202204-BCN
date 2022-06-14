import { render, screen } from "@testing-library/react";
import { mockProps } from "../../redux/mocks/diaryMocks";
import SummaryChart from "./SummaryChart";

jest.mock("react-chartjs-2", () => ({
  Chart: () => <canvas role="img" />,
}));

describe("Given the PermaChart component", () => {
  describe("When invoked", () => {
    test("Then a canvas element will be renderized", () => {
      render(<SummaryChart props={mockProps} />);

      const searchedCanvas = screen.getByRole("img");

      expect(searchedCanvas).toBeTruthy();
    });
  });
});
