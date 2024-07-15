import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { Button } from "./Button";

test("Button renders children", () => {
  render(<Button className="text-red-400">Click me</Button>);
  expect(screen.getByText("Click me")).toBeTruthy();

  const button = screen.getByRole("button");

  expect(button.className).toContain("text-red-400");

  //Snapshot testing
  expect(button).toMatchSnapshot();
});
