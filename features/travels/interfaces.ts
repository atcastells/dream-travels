export interface Travel {
    id:          number;
    title:       string;
    description: string;
    photo_url:   string;
    status:      TravelStatus;
    itinerary:   Itinerary[];
}

export interface Itinerary {
    day:         number;
    location:    string;
    description: string;
}

export enum TravelStatus {
    TODO = "todo",
    DONE = "done",
}
