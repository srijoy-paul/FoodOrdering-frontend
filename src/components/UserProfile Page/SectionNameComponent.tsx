import React from "react";
import { AccordionItem } from "@/components/ui/accordion";
import { Link, useLocation } from "react-router-dom";

type Props = {
  name: string;
  comp: string;
  isHeading: boolean;
  firstSection: boolean;
};
function SectionNameComponent({
  name,
  comp,
  isHeading,
  firstSection = false,
}: Props) {
  console.log(comp);
  const location = useLocation();

  const isActive = location.pathname === `/user-profile/${comp}`;

  return isHeading ? (
    <AccordionItem
      className={`hidden md:flex text-xl tracking-widest ${
        firstSection ? "" : "mt-8"
      } py-2 px-1 pl-1  `}
      value="item-1"
    >
      {name}
    </AccordionItem>
  ) : (
    <Link className="flex-1" to={`/user-profile/${comp}`}>
      <AccordionItem
        className={`py-2 px-1 pl-1 border-t-2 border-t-saffron ${
          isActive ? "bg-gradient-to-r from-white to-saffron" : ""
        } md:pl-2 md:border-l-2 border-l-saffron md:border-t-0 `}
        value="item-1"
      >
        {name}
      </AccordionItem>
    </Link>
  );
}

export default SectionNameComponent;
