import axios from "axios";
import { Travel, TravelCreation } from "./interfaces";
// You can use GET, POST, PUT, PATCH and DELETE. Changes aren't persisted between calls.

export const apiInstance = axios.create({
  baseURL: "https://my-json-server.typicode.com/mariosanz92/dream-travels-data",
});

export const getTravels = async (
  travelFilters?: Partial<Travel>
): Promise<Travel[]> => {
  const filterParams = new URLSearchParams();

  if (travelFilters) {
    Object.entries(travelFilters).forEach(([key, value]) => {
      if (value) {
        filterParams.append(key, value as string);
      }
    });
  }

  const response = await apiInstance.get("/travels", {
    params: filterParams,
  });
  return response.data;
};

export const getTravel = async (id: number): Promise<Travel> => {
  const response = await apiInstance.get(`/travels/${id}`);
  return response.data;
};

export const createTravel = async (travel: TravelCreation): Promise<Travel> => {
  const response = await apiInstance.post("/travels", travel);
  return response.data;
};

export const updateTravel = async (travel: Travel): Promise<Travel> => {
  const response = await apiInstance.patch(`/travels/${travel.id}`, travel);
  return response.data;
};

export const deleteTravel = async (id: string): Promise<void> => {
  await apiInstance.delete(`/travels/${id}`);
};
