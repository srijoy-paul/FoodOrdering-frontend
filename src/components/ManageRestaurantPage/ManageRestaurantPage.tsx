// import {
//   useCreateRestaurant,
//   useGetRestaurant,
//   useUpdateRestaurant,
// } from "@/Api/RestaurantApi";
// import ManageRestaurantForm from "@/forms/restaurant-manage-from/ManageRestaurantForm";
// import ManageRestaurantHero from "./ManageRestaurantHero";
import Layout from "@/layouts/Layout";
// import { Accordion } from "@radix-ui/react-accordion";
// import { AttentionSeeker } from "react-awesome-reveal";
// import SectionNameComponent from "../UserProfile Page/SectionNameComponent";

type Props = {
  children: React.ReactNode;
};

function ManageRestaurantPage({ children }: Props) {
  // const { createRestaurant, isLoading: isCreateLoading } =
  //   useCreateRestaurant();
  // const { restaurant } = useGetRestaurant();
  // const { updateRestaurant, isLoading: isUpdateLoading } =
  //   useUpdateRestaurant();

  // const isEditing = !!restaurant;
  return (
    <Layout isAbsolute={false}>
      <div className="h-full container" style={{ height: "100%" }}>
        <div className="">{children}</div>
      </div>
    </Layout>
  );
}

export default ManageRestaurantPage;
