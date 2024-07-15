import { expect, jest, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { ButtonGroup } from "./ButtonGroup";

test("should render buttons", () => {
  const buttonText = ["All", "Upcoming", "Completed"];

  const onSelectSpy = jest.fn();

  render(
    <ButtonGroup onSelect={(index) => onSelectSpy()} buttonText={buttonText} />
  );

  const allButton = screen.getByText("All");
  const upcomingButton = screen.getByText("Upcoming");
  const completedButton = screen.getByText("Completed");

  expect(allButton).toBeTruthy();
  expect(upcomingButton).toBeTruthy();
  expect(completedButton).toBeTruthy();

  //Click on the first button
  allButton.click();

  expect(onSelectSpy).toHaveBeenCalledTimes(1);

  //Snapshot testing
  expect(allButton).toMatchSnapshot();
});
