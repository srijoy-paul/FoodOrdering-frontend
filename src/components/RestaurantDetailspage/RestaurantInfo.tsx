import { Restaurant } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Dot } from "lucide-react";
import { Button } from "../ui/button";
import { LiaDirectionsSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { Link } from "react-router-dom";

type Props = {
  restaurant: Restaurant;
};
function RestaurantInfo({ restaurant }: Props) {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: restaurant.restaurantname,
        text: "Restaurant",
        url: window.location.href,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="border-sla space-y-2 my-2">
      <CardHeader>
        <CardTitle className="text-3xl font-bold tarcking-tight ">
          {restaurant.restaurantname}
        </CardTitle>
        <CardDescription className="">
          {restaurant.city}, {restaurant.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="flex">
          {restaurant.cuisines.map((item, index) => (
            <span className="flex text-xs flex-wrap">
              <span>{item}</span>
              {index < restaurant.cuisines.length - 1 && <Dot size={20} />}
            </span>
          ))}
        </div>
        <div id="buttons" className="flex gap-3 flex-wrap my-3">
          <Button
            variant={"outline"}
            className="border border-orange-100 hover:bg-orange-50 flex gap-1"
          >
            <LiaDirectionsSolid
              className="text-saffron "
              size={18}
              strokeWidth={1}
            />
            <Link to={`https://www.google.com/maps/search/${restaurant.city}`}>
              <span className="text-lg font-light">Direction</span>
            </Link>
          </Button>
          <Button
            variant={"outline"}
            className="border border-orange-100 hover:bg-orange-50 flex gap-2"
          >
            <FaRegHeart className="text-saffron" size={18} strokeWidth={1} />
            <span className="text-lg font-light">Favourite</span>
          </Button>
          <Button
            onClick={handleShare}
            variant={"outline"}
            className="border border-orange-100 hover:bg-orange-50 flex gap-2"
          >
            <RiShareForwardLine className="text-saffron " size={18} />
            <span className="text-lg font-light">Share</span>
          </Button>
        </div>
        <div className="flex gap-2 border-b border-saffron">
          <span className="p-3 cursor-pointer hover:bg-orange-50 border-b border-saffron">
            <Link to="">Order Online</Link>
          </span>
          <span className="p-3 cursor-pointer hover:bg-orange-50">
            <Link to="reviews">Reviews</Link>
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default RestaurantInfo;
