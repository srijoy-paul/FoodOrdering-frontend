import { FetchDataState } from "@/components/RestaurantDetailspage/ReviewsPage";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const useGetReviews = (fetchDataState: FetchDataState, restaurantid) => {
  const params = new URLSearchParams();
  params.set("page", fetchDataState.page.toString());
  params.set("sortOption", fetchDataState.sortoption);

  const getReviewsRequest = async () => {
    console.log(
      `${API_BASE_URL}/api/v1/reviews/${restaurantid}/getAllReviews?${params.toString()}`
    );

    const response = await fetch(
      `${API_BASE_URL}/api/v1/reviews/${restaurantid}/getAllReviews?${params.toString()}`
    );
    if (!response.ok) {
      console.log("Reviews Fetch Error");

      throw new Error("Failed to fetch Reviews");
    }
    const parsedResponse = await response.json();
    console.log("ParsedResponse from api", parsedResponse);

    return parsedResponse;
  };
  const { data: reviews, isLoading } = useQuery(
    [
      "fetchReviews",
      restaurantid,
      fetchDataState.page,
      fetchDataState.sortoption,
    ],
    getReviewsRequest,
    { keepPreviousData: true }
  );
  return { reviews, isLoading };
};
