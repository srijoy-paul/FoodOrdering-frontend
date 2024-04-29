import { MenuItemType } from "@/types";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import foodimage from "../../assets/Default_indian_culture_food_image_realistic_2.jpg";
import { AspectRatio } from "../ui/aspect-ratio";

type Props = {
  menuitem: MenuItemType;
};

function MenuItem({ menuitem }: Props) {
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
        <CardContent className="text-sm font-medium flex ">
          ₹{menuitem.price}
        </CardContent>
      </Card>
    </div>
  );
}

export default MenuItem;
