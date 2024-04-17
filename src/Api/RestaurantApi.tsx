import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<Restaurant> => {
    console.log("enter");

    const accessToken = await getAccessTokenSilently();
    console.log(accessToken);

    restaurantFormData.forEach((value, key) => {
      console.log(`create form data ${key}: Value ${value}`);
    });

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/restaurant/createRestaurant`,
        {
          method: "POST",
          headers: {
            // "Content-Type":
            //   "multipart/form-data; boundary=<calculated when request is sent>",
            Authorization: `Bearer ${accessToken}`,
          },
          body: restaurantFormData,
        }
      );

      const parsedResponse = await response.json();
      console.log("from createRestro hook", parsedResponse);

      if (!response.ok) {
        console.log(response);

        throw new Error("Failed to create your restaurant");
      }

      return parsedResponse;
    } catch (error) {
      console.error("Error creating restaurant:", error);
      throw error;
    }

    // const parsedResponse = await response.json();
    // console.log("from createRestro hook", parsedResponse);

    // return parsedResponse;
  };

  const {
    mutate: createRestaurant,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createRestaurantRequest);

  if (isSuccess) {
    toast.success("Restaurant created!");
  }

  if (error) {
    console.log(error);

    toast.error("Unable to update restaurant");
  }

  return { createRestaurant, isLoading };
};
