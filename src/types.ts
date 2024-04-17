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
    restaurantname:string;
    city:string;
    country:string;
    deliveryprice:number;
    cuisines:string[];
    menuitems:MenuItemType[];
    imageUrl:string;
    lastupdated:string;
}