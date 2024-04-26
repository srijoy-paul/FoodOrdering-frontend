// import { Restaurant } from "@/types";
import { SearchState } from "@/components/SearchPage/SearchPage";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchRestaurants = (
  searchState: SearchState,
  city?: string
) => {
  const createSearchRequest = async () => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchquery);
    params.set("page", searchState.page.toString());
    params.set("selectedCuisines", searchState.selectedcuisines.join(","));

    const response = await fetch(
      `${API_BASE_URL}/api/v1/restaurants/search/${city}?${params.toString()}`
    );
    if (!response.ok) {
      throw new Error("Failed to get restaurants");
    }
    const parsedResponse = await response.json();
    console.log("parsedRes", parsedResponse);

    return parsedResponse;
  };

  const { data: results, isLoading } = useQuery(
    ["searchRestaurants", searchState],
    createSearchRequest,
    { enabled: !!city }
  );

  return { results, isLoading };
};
