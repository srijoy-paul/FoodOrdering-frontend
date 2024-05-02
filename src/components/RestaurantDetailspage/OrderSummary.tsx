import { MenuItemType, Restaurant } from "@/types";
import { CartItem } from "./RestaurantDetailPage";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { useEffect, useMemo } from "react";

type Props = {
  restaurant: Restaurant;
  cartitems: CartItem[];
  removeFromCart: (cartitem: CartItem) => void;
  addToCart: (menuitem: MenuItemType) => void;
};

function OrderSummary({
  restaurant,
  cartitems,
  addToCart,
  removeFromCart,
}: Props) {
  const freeDelivery = useMemo(() => {
    const totalCost = cartitems.reduce(
      (total, cartitem) => total + cartitem.price * cartitem.quantity,
      0
    );
    return totalCost >= 199;
  }, [cartitems]);

  useEffect(() => {}, []);
  const getTotalCost = () => {
    const totalCost = cartitems.reduce(
      (total, cartitem) => total + cartitem.price * cartitem.quantity,
      0
    );
    if (freeDelivery) {
      return totalCost;
    }
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
                <Badge
                  variant={"outline"}
                  className="px-2 flex items-center rounded-md gap-2"
                >
                  <span
                    onClick={() =>
                      addToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                      })
                    }
                    className="cursor-pointer"
                    id="increaseQuantity"
                  >
                    <FaPlus size={10} />
                  </span>
                  <span className="flex items-center">
                    {/* <RxCross2 size={10} /> */}
                    {item.quantity}
                  </span>
                  <span
                    onClick={() => removeFromCart(item)}
                    className="cursor-pointer"
                    id="decreaseQuantity"
                  >
                    <TiMinus size={10} />
                  </span>
                </Badge>
                <span className="text-sm">{item.name}</span>
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
        </div>
        <Separator />
        <div className="flex justify-between py-2">
          <span className="px-3 flex gap-3 items-center">
            <MdOutlineDeliveryDining />
            Delivery
          </span>
          <span className={`${freeDelivery ? "line-through" : ""}`}>
            ₹{restaurant.deliveryprice}
          </span>
        </div>
        <Separator />
      </CardContent>
    </>
  );
}

export default OrderSummary;
