import { DefinedInitialDataOptions, QueryClient, QueryKey, UndefinedInitialDataOptions, useQuery } from "@tanstack/react-query";
import { getTravels } from "./service";
import { Travel } from "./interfaces";

export const TRAVEL_KEY = "travels";

export const useTravels = (options?: UndefinedInitialDataOptions<Travel[], Error, Travel[], QueryKey>) => {
    const {data, ...rest} = useQuery<Travel[]>({
        ...options,
        queryKey: ['TRAVEL_KEY'],
        queryFn: getTravels,
    });

    return {travels: data, ...rest};

}