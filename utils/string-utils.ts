import { LocationResponse } from "@/services/queries/useGetLocationQueryAPI";

export const extractLabels = (locations: LocationResponse[]): string[] => {
    return locations.map(location => location.label);
};