import { render, screen } from "@testing-library/react";
import React from "react";
import RegisterForm from "./RegisterForm";

describe("Given the RegisterForm component", () => {
  describe("When instantiated", () => {
    test("Then 2 buttons and 4 input boxes will be rendered", () => {
      const expectedButtons = 2;
      const expectedInputBoxes = 4;

      render(RegisterForm());

      const searchedButtons = screen.getAllByRole("button");
      const searchedInputBoxes = screen.getAllByRole("textbox");

      expect(searchedButtons).toHaveLength(expectedButtons);
      expect(searchedInputBoxes).toHaveLength(expectedInputBoxes);

      screen.debug();
    });
  });
});

export {};
