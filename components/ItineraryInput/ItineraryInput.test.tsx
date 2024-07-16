import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import { ItineraryInput } from "./ItineraryInput";

class ResizeObserver {
  observe() {}
  unobserve() {}

  disconnect() {}
}

test("ItineraryInput renders correctly", () => {
  window.ResizeObserver = ResizeObserver;
  const { findAllByText, baseElement } = render(
    <ItineraryInput
      itinerary={{ day: 1, location: "Paris", description: "Eiffel Tower" }}
      numberOfDays={1}
      index={0}
      onChange={() => {}}
    />
  );

  expect(findAllByText("1")).toBeTruthy();
  expect(findAllByText("Paris")).toBeTruthy();
  expect(findAllByText("Eiffel Tower")).toBeTruthy();

  expect(baseElement).toMatchSnapshot();
});
