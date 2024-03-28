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
        style={
          isActive
            ? {
                backgroundImage:
                  "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%,rgb(255, 255,255, 1)10%,rgb(255, 255,255, 1)20%,rgb(255, 255,255, 1) 25%, rgb(255, 255,255, 1) 30%,rgba(255, 249, 244, 0.95) 35%,rgb(255, 249, 244) 40%,rgb(255, 249, 244) 45%,rgb(255, 249, 244) 50%,rgb(252, 242, 234) 60%,rgb(255, 241, 230) 65%, rgb(255, 241, 230) 70%,rgb(255, 241, 230) 75%, rgb(255, 241, 230) 80%, rgb(252, 214, 183) 95%, rgb(252, 214, 183) 97%,rgb(252, 214, 183) 99%",
                transition: "2s",
              }
            : {}
        }
      >
        {name}
      </AccordionItem>
    </Link>
  );
}

export default SectionNameComponent;
