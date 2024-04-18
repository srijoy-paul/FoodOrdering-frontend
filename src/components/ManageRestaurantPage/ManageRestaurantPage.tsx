import { useCreateRestaurant, useGetRestaurant } from "@/Api/RestaurantApi";
import ManageRestaurantForm from "@/forms/restaurant-manage-from/ManageRestaurantForm";

function ManageRestaurantPage() {
  const { createRestaurant, isLoading } = useCreateRestaurant();
  const { restaurant } = useGetRestaurant();
  return (
    <ManageRestaurantForm
      onSave={createRestaurant}
      isLoading={isLoading}
      restaurant={restaurant}
    />
  );
}

export default ManageRestaurantPage;
