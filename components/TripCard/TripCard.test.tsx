import { expect, test } from "@jest/globals";

import { render, screen } from "@testing-library/react";

import { TravelStatus } from "@/features/travels/interfaces";
import { TripCard } from "./TripCard";

test("renders TripCard component", () => {
  const { baseElement, findByText } = render(
    <TripCard
      travel={{
        id: "1",
        title: "Trip to Portugal",
        description:
          "Classic tour of Portugal's vibrant cities and cultural heritage, including Lisbon, Porto, Fatima and the flamboyant architecture of Sintra.",
        photo_url: "https://source.unsplash.com/1600x900/?portugal",
        status: TravelStatus.TODO,
        itinerary: [
          {
            day: 1,
            location: "Lisbon",
            description:
              "Visit the historic district of Belem and the Jeronimos Monastery.",
          },
          {
            day: 2,
            location: "Porto",
            description:
              "Explore the city's historic center and the Douro River.",
          },
          {
            day: 3,
            location: "Fatima",
            description: "Visit the Sanctuary of Our Lady of Fatima.",
          },
          {
            day: 4,
            location: "Sintra",
            description:
              "Discover the flamboyant architecture of the Pena Palace and the Moorish Castle.",
          },
        ],
      }}
      onDelete={() => {}}
      onDetail={() => {}}
      onEdit={() => {}}
    />
  );

  expect(screen.getByText("Trip to Portugal")).toBeTruthy();
  expect(
    screen.getByText(
      "Classic tour of Portugal's vibrant cities and cultural heritage, including Lisbon, Porto, Fatima and the flamboyant architecture of Sintra."
    )
  ).toBeTruthy();
  expect(screen.getByText("See trip detail")).toBeTruthy();
  expect(screen.getByText("Edit")).toBeTruthy();
  expect(screen.getByText("Delete")).toBeTruthy();

  expect(findByText("Lisbon")).toBeTruthy();

  expect(findByText("Porto")).toBeTruthy();

  // snapshot testing

  expect(baseElement).toMatchSnapshot();
});
