import {
  QueryKey,
  UndefinedInitialDataOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Travel, TravelCreation } from "./interfaces";
import {
  createTravel,
  deleteTravel,
  getTravels,
  updateTravel,
} from "./service";

export const TRAVEL_KEY = "travels";

export const useTravels = (
  travelFilters?: Partial<Travel>,
  options?: UndefinedInitialDataOptions<Travel[], Error, Travel[], QueryKey>
) => {
  const { data, ...rest } = useQuery<Travel[]>({
    ...options,
    queryKey: [TRAVEL_KEY, { travelFilters }],
    queryFn: () => getTravels(travelFilters),
  });

  return { travels: data, ...rest };
};

export const useCreateTravel = () => {
  const queryClient = useQueryClient();
  const { mutate, mutateAsync } = useMutation({
    mutationFn: (travel: TravelCreation) => {
      return createTravel(travel);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [TRAVEL_KEY],
      });
    },
  });

  return {
    createTravel: mutate,
    createTravelAsync: mutateAsync,
  };
};

export const useDeleteTravel = () => {
  const queryClient = useQueryClient();
  const { mutate, mutateAsync } = useMutation({
    mutationFn: deleteTravel,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [TRAVEL_KEY],
      });
    },
  });

  return {
    deleteTravel: mutate,
    deleteTravelAsync: mutateAsync,
  };
};

export const useUpdateTravel = () => {
  const queryClient = useQueryClient();
  const { mutate, mutateAsync } = useMutation({
    mutationFn: updateTravel,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [TRAVEL_KEY],
      });
    },
  });

  return {
    updateTravel: mutate,
    updateTravelAsync: mutateAsync,
  };
};
