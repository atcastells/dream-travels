import { expect, jest, test } from "@jest/globals";

import { render, screen } from "@testing-library/react";
import { NavigationBar } from "./NavigationBar";

test("NavigationBar renders", () => {
  const onCreateTripSpy = jest.fn();

  render(<NavigationBar onCreateTrip={onCreateTripSpy} />);
  expect(screen.getByText("Create new trip")).toBeTruthy();
  expect(screen.getByRole("button")).toBeTruthy();

  screen.getByRole("button").click();

  expect(onCreateTripSpy).toHaveBeenCalledTimes(1);

  //Snapshot testing

  expect(screen.getByRole("button")).toMatchSnapshot();
});
