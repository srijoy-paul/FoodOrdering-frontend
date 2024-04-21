import {
  useCreateRestaurant,
  useGetRestaurant,
  useUpdateRestaurant,
} from "@/Api/RestaurantApi";
import ManageRestaurantForm from "@/forms/restaurant-manage-from/ManageRestaurantForm";
// import ManageRestaurantPage from "./ManageRestaurantPage";
import ManageRestaurantInfoPageLayout from "./ManageRestaurantInfoPageLayout";

function ManageRestaurantInfoPage() {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateRestaurant();
  const { restaurant } = useGetRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateRestaurant();

  const isEditing = !!restaurant;
  return (
    <ManageRestaurantInfoPageLayout>
      <ManageRestaurantForm
        onSave={isEditing ? updateRestaurant : createRestaurant}
        isLoading={isCreateLoading || isUpdateLoading}
        restaurant={restaurant}
      />
    </ManageRestaurantInfoPageLayout>
  );
}

export default ManageRestaurantInfoPage;
