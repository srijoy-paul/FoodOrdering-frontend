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

type Props = {
  restaurant: Restaurant;
};
function RestaurantInfo({ restaurant }: Props) {
  return (
    <Card className="border-sla space-y-2 my-2">
      <CardHeader>
        <CardTitle className="text-3xl font-bold tarcking-tight border-2 border-red-400">
          {restaurant.restaurantname}
        </CardTitle>
        <CardDescription className="border-2 border-red-400">
          {restaurant.city}, {restaurant.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="flex flex-wrap">
          {restaurant.cuisines.map((item, index) => (
            <span className="flex text-xs">
              <span>{item}</span>
              {index < restaurant.cuisines.length - 1 && <Dot size={20} />}
            </span>
          ))}
        </div>
        <div id="buttons" className="flex gap-3 my-3">
          <Button
            variant={"outline"}
            className="border border-orange-100 hover:bg-orange-50 flex gap-1"
          >
            <LiaDirectionsSolid
              className="text-saffron "
              size={18}
              strokeWidth={1}
            />
            <span className="text-lg font-light">Direction</span>
          </Button>
          <Button
            variant={"outline"}
            className="border border-orange-100 hover:bg-orange-50 flex gap-2"
          >
            <FaRegHeart className="text-saffron" size={18} strokeWidth={1} />
            <span className="text-lg font-light">Favourite</span>
          </Button>
          <Button
            variant={"outline"}
            className="border border-orange-100 hover:bg-orange-50 flex gap-2"
          >
            <RiShareForwardLine className="text-saffron " size={18} />
            <span className="text-lg font-light">Share</span>
          </Button>
        </div>
        <div className="flex gap-2 border-b border-saffron">
          <span className="p-3 cursor-pointer hover:bg-orange-50 border-b border-saffron">
            Order Online
          </span>
          <span className="p-3 cursor-pointer hover:bg-orange-50">Reviews</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default RestaurantInfo;
