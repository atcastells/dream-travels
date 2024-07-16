import { expect, test } from "@jest/globals";

import { render, screen } from "@testing-library/react";

import { TextArea } from "./TextArea";

test("renders text area", () => {
  const { baseElement } = render(<TextArea />);
  const input = screen.getByRole("textbox");
  expect(input).toBeTruthy();

  const label = screen.queryByRole("label");

  expect(label).toBeNull();

  const error = screen.queryByText("error");

  expect(error).toBeNull();

  //Snapshot testing

  expect(baseElement).toMatchSnapshot();
});
