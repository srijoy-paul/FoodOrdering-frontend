import { FetchDataState } from "@/components/RestaurantDetailspage/ReviewsPage";
import { Review } from "@/forms/create-review-from/CreateReviewForm";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const useGetReviews = (
  fetchDataState: FetchDataState,
  restaurantid: number
) => {
  const params = new URLSearchParams();
  params.set("page", fetchDataState.page.toString());
  params.set("sortOption", fetchDataState.sortoption);

  const getReviewsRequest = async () => {
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

export const useCreateReviews = (restaurantId: number) => {
  const { getAccessTokenSilently } = useAuth0();

  const createReviewsRequest = async (review: Review) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(
      `${API_BASE_URL}/api/v1/reviews/${restaurantId}/createReview`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      }
    );
    if (!response.ok) {
      throw new Error("Unable to Create your review.");
    }
    const parsedResponse = await response.json();
    return parsedResponse;
  };
  const {
    mutateAsync: createReview,
    isLoading,
    error,
    reset,
  } = useMutation(createReviewsRequest);

  if (error) {
    toast.error(error.toString());
    reset();
  }
  return {
    createReview,
    isLoading,
  };
};
