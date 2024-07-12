import axios from "axios"
import { Travel } from "./interfaces"
// You can use GET, POST, PUT, PATCH and DELETE. Changes aren't persisted between calls.

export const apiInstance = axios.create({
    baseURL: "https://my-json-server.typicode.com/mariosanz92/dream-travels-data",
})


export const getTravels = async (): Promise<Travel[]> => {
  const response = await apiInstance.get("/travels")
  return response.data
}

export const getTravel = async (id: number): Promise<Travel> => {
    const response = await apiInstance.get(`/travels/${id}`)
    return response.data
    }

export const createTravel = async (travel: Travel): Promise<Travel> => {
    const response = await apiInstance.post("/travels", travel)
    return response.data
    }

export const updateTravel = async (travel: Travel): Promise<Travel> => {
    const response = await apiInstance.put(`/travels/${travel.id}`, travel)
    return response.data
    }

    
    