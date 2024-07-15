import {
  QueryKey,
  UndefinedInitialDataOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Travel } from "./interfaces";
import { getTravels, updateTravel } from "./service";

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
