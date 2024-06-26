import { useGetRestaurant } from "@/Api/SearchRestaurantApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AspectRatio } from "../ui/aspect-ratio";
import RestaurantInfo from "./RestaurantInfo";
import MenuItem from "./MenuItem";
import { useEffect, useState } from "react";
import { Card, CardFooter } from "../ui/card";
import OrderSummary from "./OrderSummary";
import { MenuItemType } from "@/types";
import CheckOutButton from "./CheckOutButton";
import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";
import { useCreateCheckoutSession } from "@/Api/OrderApi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewsPage from "./ReviewsPage";
export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

function RestaurantDetailPage({ children }) {
  const { restaurantid } = useParams();
  // const navigate = useNavigate();

  const [isOnReviews, setIsOnReviews] = useState(false);
  const url = window.location.href;
  useEffect(() => {
    if (
      url === `http://localhost:5173/restaurantDetail/${restaurantid}/reviews`
    ) {
      console.log("URL Restaurant", url);
      setIsOnReviews(true);
    }
  }, [restaurantid, url]);

  // console.log("From detail page", restaurantid);

  const { restaurant, isLoading } = useGetRestaurant(restaurantid);
  const { createCheckoutSession } = useCreateCheckoutSession();

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = sessionStorage.getItem(`cartItems-${restaurantid}`);
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const addToCart = (menuitem: MenuItemType) => {
    setCartItems((prevCartItems) => {
      const totalQuantity = prevCartItems.reduce(
        (total, cartitem) => total + cartitem.quantity,
        0
      );
      if (totalQuantity >= 10) {
        return prevCartItems;
      }

      const existingCartItem = prevCartItems.find(
        (cartitem) => cartitem.id === menuitem.id
      );
      console.log("existingCartItem", existingCartItem);

      let updatedCartItems;

      if (existingCartItem) {
        updatedCartItems = prevCartItems.map((cartitem) =>
          cartitem.id === menuitem.id
            ? cartitem.quantity < 10
              ? { ...cartitem, quantity: cartitem.quantity + 1 }
              : cartitem
            : cartitem
        );
      } else {
        updatedCartItems = [
          ...prevCartItems,
          {
            id: menuitem.id,
            name: menuitem.name,
            price: menuitem.price,
            quantity: 1,
          },
        ];
      }

      sessionStorage.setItem(
        `cartItems-${restaurantid}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const removeFromCart = (cartItem: CartItem) => {
    setCartItems((prevItems) => {
      // const updatedItems = prevItems.filter((item) => cartitem.id !== item.id);
      const updatedItems = prevItems
        .map((cartitem) =>
          cartitem.id === cartItem.id
            ? cartitem.quantity > 0
              ? { ...cartitem, quantity: cartitem.quantity - 1 }
              : cartitem
            : cartitem
        )
        .filter((item) => item.quantity > 0);

      sessionStorage.setItem(
        `cartItems-${restaurantid}`,
        JSON.stringify(updatedItems)
      );

      return updatedItems;
    });
  };
  console.log(restaurant);

  const onCheckout = async (userFormData: UserFormData) => {
    if (!restaurant) {
      return;
    }

    const checkOutData = {
      cartItems: cartItems.map((cartItem) => ({
        menuItemId: cartItem.id,
        name: cartItem.name,
        quantity: cartItem.quantity.toString(),
      })),
      restaurantId: restaurant.restaurantid,
      deliveryDetails: {
        name: userFormData.name,
        addressLine1: userFormData.addressline1,
        city: userFormData.city,
        country: userFormData.country,
        email: userFormData.email as string,
      },
    };
    const data = await createCheckoutSession(checkOutData);
    console.log("userFormData", userFormData);
  };

  if (isLoading || !restaurant) {
    return <div className="container">Loading...</div>;
  }
  return (
    <div className="container ">
      <AspectRatio ratio={16 / 5}>
        <img
          className="rounded-md object-cover h-full w-full"
          src={restaurant.imageurl}
          alt={restaurant.restaurantname}
          title={restaurant.restaurantname}
        />
      </AspectRatio>
      <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32  pb-2">
        <div className="flex flex-col gap-4 border-3 border-green-200">
          <RestaurantInfo restaurant={restaurant} />

          <div className="flex gap-2 w-full">
            <Tabs
              className=" w-full "
              defaultValue={isOnReviews ? "Reviews" : "OrderOnline"}
            >
              <TabsList className="grid w-full grid-cols-2 ">
                <TabsTrigger value="OrderOnline">Order Online</TabsTrigger>

                <TabsTrigger value="Reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent className=" w-full space-y-5" value="OrderOnline">
                <span className="text-2xl font-bold tracking-tight">Menu</span>
                <span className="flex flex-col gap-3">
                  {restaurant.menuitems.map((menuitem) => (
                    <MenuItem
                      key={menuitem.id}
                      menuitem={menuitem}
                      cartitems={
                        cartItems.length != 0
                          ? cartItems.find(
                              (cartitem) => menuitem.id === cartitem.id
                            )
                          : undefined
                      }
                      addToCart={() => addToCart(menuitem)}
                    />
                  ))}
                </span>
              </TabsContent>
              <TabsContent value="Reviews">
                <ReviewsPage restaurantid={restaurant.restaurantid} />

                {/* {children ? children : <ReviewsPage />} */}
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div>
          <Card className="my-2">
            <OrderSummary
              restaurant={restaurant}
              cartitems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
            <CardFooter>
              <CheckOutButton
                disabled={cartItems.length === 0}
                onCheckout={onCheckout}
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailPage;
