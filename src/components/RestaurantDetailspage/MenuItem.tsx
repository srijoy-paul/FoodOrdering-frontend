import { MenuItemType } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import foodimage from "../../assets/Default_indian_culture_food_image_realistic_2.jpg";
import { Button } from "../ui/button";
import { IoAddOutline } from "react-icons/io5";
import { CartItem } from "./RestaurantDetailPage";

type Props = {
  menuitem: MenuItemType;
  cartitems: CartItem | undefined;
  addToCart: () => void;
};

function MenuItem({ menuitem, cartitems, addToCart }: Props) {
  return (
    <div className="flex  rounded-lg">
      <div className="w-[30%] h-[100%]">
        <img
          src={foodimage}
          alt=""
          className="h-full w-full rounded-tl-lg rounded-bl-lg"
        />
      </div>
      <Card className="w-[70%] cursor-pointer rounded-bl-none rounded-tl-none">
        <CardHeader className="">
          <CardTitle className="text-lg font-semibold ">
            {menuitem.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm font-medium flex justify-between">
          <span>₹{menuitem.price}</span>
          <span>
            {cartitems ? (
              <Button
                onClick={addToCart}
                variant="outline"
                className="flex items-center hover:bg-orange-50 gap-1"
              >
                - {cartitems.quantity} +
              </Button>
            ) : (
              <Button
                onClick={addToCart}
                variant="outline"
                className="flex items-center hover:bg-orange-50 gap-1"
              >
                Add <IoAddOutline />
              </Button>
            )}
          </span>
        </CardContent>
      </Card>
    </div>
  );
}

export default MenuItem;
