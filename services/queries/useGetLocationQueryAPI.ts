import { APP_CONFIG } from "@/config/app-config";
import { REACT_QUERY_KEYS } from "@/config/keys";
import { useQuery } from "@tanstack/react-query";

export interface LocationResponse {
  label: string;
  terms: string[];
  displayLocation: string;
}

const fetchLocations = async (query: string): Promise<LocationResponse[]> => {
  try {
    const response = await fetch(`${APP_CONFIG.BASE_URL}?q=${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return [];
      }
      throw new Error("No response received from the server");
    }

    const data = await response.json();
    return data as LocationResponse[];
  } catch (error: any) {
    console.error("Error fetching locations:", error);
    throw new Error("Error fetching locations");
  }
};

export const useGetLocationQueryAPI = (query: string, shouldFetch: boolean = true) => {
  return useQuery<LocationResponse[], Error>({
    queryKey: [REACT_QUERY_KEYS.GET_LOCATIONS, query],
    queryFn: () => fetchLocations(query),
    enabled: shouldFetch && query.length >= 2,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};
