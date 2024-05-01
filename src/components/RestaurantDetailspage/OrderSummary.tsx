import { Restaurant } from "@/types";
import { CartItem } from "./RestaurantDetailPage";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

type Props = {
  restaurant: Restaurant;
  cartitems: CartItem[];
};

function OrderSummary({ restaurant, cartitems }: Props) {
  const getTotalCost = () => {
    const totalCost = cartitems.reduce(
      (total, cartitem) => total + cartitem.price * cartitem.quantity,
      0
    );
    const totalcostWithDelivery = totalCost + restaurant.deliveryprice;
    return totalcostWithDelivery;
  };
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
          <span>Your Orders</span>
          <span>₹{getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1 mb-4">
          {cartitems.map((item: CartItem) => (
            <div key={item.id} className="flex justify-between">
              <span className="flex gap-2 ">
                <Badge variant={"outline"} className="px-2 flex items-center">
                  <RxCross2 size={10} />
                  {item.quantity}
                </Badge>
                <span className="text-sm">{item.name}</span>
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
        </div>
        <Separator />
        <div className="flex justify-between">
          <span className="px-3 flex gap-3 items-center">
            <MdOutlineDeliveryDining />
            Delivery
          </span>
          <span>₹{restaurant.deliveryprice}</span>
        </div>
        <Separator />
      </CardContent>
    </>
  );
}

export default OrderSummary;
