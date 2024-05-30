import { Restaurant } from "@/types";
import { Link } from "react-router-dom";
import { AspectRatio } from "../ui/aspect-ratio";
import { Dot } from "lucide-react";
import { FaClock } from "react-icons/fa6";
import { MdOutlineDeliveryDining } from "react-icons/md";

type Props = {
  restaurant: Restaurant;
};
function SearchResultCard({ restaurant }: Props) {
  return (
    <Link
      to={`/restaurantDetail/${restaurant.restaurantid}`}
      className=" rounded-lg flex flex-col group md:w-[45%] hover:shadow-md"
    >
      <div
        id="card-media"
        className="w-full rounded-tl-lg rounded-tr-lg"
        // style={{ flex: "3" }}
      >
        <AspectRatio ratio={16 / 6}>
          <img
            src={restaurant.imageurl}
            alt={restaurant.restaurantname}
            title={restaurant.restaurantname}
            className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
          />
        </AspectRatio>
      </div>

      <div
        id="card-content"
        className="grid grid-cols-[3fr_2fr] gap-1"
        // style={{ flex: "3" }}
      >
        <div className="content-left flex flex-col p-2 ">
          <span className="text-2xl font-bold tracking-tight mb-2 group-hover:underline">
            {restaurant.restaurantname}
          </span>
          <span className="flex flex-row flex-wrap">
            {restaurant.cuisines.map((item, index) => (
              <span key={item} className="flex items-center ">
                <span className="text-xs">{item}</span>
                <span>
                  {index < restaurant.cuisines.length - 1 && <Dot size={20} />}
                </span>
              </span>
            ))}
          </span>
        </div>
        <div className="content-righ flex flex-col items-end gap-2 p-2 ">
          <span className="flex items-center gap-1">
            <MdOutlineDeliveryDining />
            Delivery from ₹{restaurant.deliveryprice}
          </span>
          <span className="flex items-center gap-1 text-bgreen">
            <FaClock />
            {restaurant.estimateddeliverytime}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default SearchResultCard;
