import { useGetRestaurant } from "@/Api/SearchRestaurantApi";
import { useParams } from "react-router-dom";
import { AspectRatio } from "../ui/aspect-ratio";
import RestaurantInfo from "./RestaurantInfo";
import MenuItem from "./MenuItem";

function RestaurantDetailPage() {
  const { restaurantid } = useParams();
  console.log("From detail page", restaurantid);

  const { restaurant, isLoading } = useGetRestaurant(restaurantid);

  console.log(restaurant);

  if (isLoading || !restaurant) {
    return <div className="container">loading...</div>;
  }
  return (
    <div className="container">
      <AspectRatio ratio={16 / 5}>
        <img
          className="rounded-md object-cover zoom-out-50 h-full w-full"
          src={restaurant.imageurl}
          alt={restaurant.restaurantname}
          title={restaurant.restaurantname}
        />
      </AspectRatio>
      <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32 border-2 border-emerald-300 pb-2">
        <div className="flex flex-col gap-4">
          <RestaurantInfo restaurant={restaurant} />
          <span className="text-2xl font-bold tracking-tight">Menu</span>
          {restaurant.menuitems.map((menuitem) => (
            <MenuItem menuitem={menuitem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailPage;
