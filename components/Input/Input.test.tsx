import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { Input } from "./Input";

test("renders input", () => {
  render(<Input />);
  const input = screen.getByRole("textbox");
  expect(input).toBeTruthy();

  const label = screen.queryByRole("label");
  expect(label).toBeNull();

  const error = screen.queryByText("error");
  expect(error).toBeNull();

  expect(input).toMatchSnapshot();
});
