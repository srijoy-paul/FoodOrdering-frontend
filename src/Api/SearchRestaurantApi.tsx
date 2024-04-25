// import { Restaurant } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchRestaurants = (city?: string) => {
  const createSearchRequest = async () => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/restaurants/search/${city}`
    );
    if (!response.ok) {
      throw new Error("Failed to get restaurants");
    }
    const parsedResponse = await response.json();
    console.log("parsedRes", parsedResponse);

    return parsedResponse;
  };

  const { data: results, isLoading } = useQuery(
    ["searchRestaurants"],
    createSearchRequest,
    { enabled: !!city }
  );

  return { results, isLoading };
};
