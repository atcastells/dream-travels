import {
  QueryKey,
  UndefinedInitialDataOptions,
  useQuery,
} from "@tanstack/react-query";
import { Travel } from "./interfaces";
import { getTravels } from "./service";

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
