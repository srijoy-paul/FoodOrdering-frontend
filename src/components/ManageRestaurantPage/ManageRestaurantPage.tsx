import { useCreateRestaurant } from "@/Api/RestaurantApi";
import ManageRestaurantForm from "@/forms/restaurant-manage-from/ManageRestaurantForm";

function ManageRestaurantPage() {
  const { createRestaurant, isLoading } = useCreateRestaurant();
  return (
    <ManageRestaurantForm onSave={createRestaurant} isLoading={isLoading} />
  );
}

export default ManageRestaurantPage;
