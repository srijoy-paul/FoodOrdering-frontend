export type User={
    id:number;
    email:string;
    name:string;
    addressline1:string;
    city:string;
    country:string;
};

export type MenuItemType={
    id:number;
    name:string;
    price:number;
}

export type Restaurant={
    // id:number;
    restaurantid:number,
    restaurantname:string;
    city:string;
    country:string;
    deliveryprice:number;
    estimateddeliverytime:string;
    cuisines:string[];
    menuitems:MenuItemType[];
    imageurl:string;
    lastupdated:string;
}

export type RestaurantSearchResponse={
    data:Restaurant[];
}