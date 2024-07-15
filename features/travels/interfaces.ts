export interface Travel {
  id: string;
  title: string;
  description: string;
  introduction?: string;
  photo_url: string;
  status: TravelStatus;
  itinerary: Itinerary[];
}

export interface TravelCreation {
  title: string;
  description: string;
  introduction?: string;
  photo_url: string;
  itinerary: Itinerary[];
}

export interface Itinerary {
  day: number;
  location: string;
  description: string;
}

export enum TravelStatus {
  TODO = "todo",
  DONE = "done",
}
