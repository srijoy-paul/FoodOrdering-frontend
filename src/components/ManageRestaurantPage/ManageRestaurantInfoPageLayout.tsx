import React from "react";
import { Accordion } from "../ui/accordion";
import { AttentionSeeker } from "react-awesome-reveal";
import SectionNameComponent from "../UserProfile Page/SectionNameComponent";
import ManageRestaurantPage from "./ManageRestaurantPage";

type Props = {
  children: React.ReactNode;
};

function ManageRestaurantInfoPageLayout({ children }: Props) {
  return (
    <ManageRestaurantPage>
      {/* <div className="flex flex-col h-full gap-8" style={{ height: "100%" }}> */}
      <div className="flex flex-col md:flex-row pb-5 gap-2">
        <div className="border-2 border-saffron" style={{ flex: "1" }}>
          <Accordion
            type="single"
            className="flex flex-row w-full md:flex-col gap-1"
          >
            <AttentionSeeker effect="headShake">
              <SectionNameComponent
                name="Create Your Restaurant"
                comp=""
                isHeading={true}
                firstSection={true}
              />
            </AttentionSeeker>

            <SectionNameComponent
              name="Restaurant Information"
              comp=""
              isHeading={false}
              firstSection={false}
            />
            <SectionNameComponent
              name="Cuisines and Menu Items"
              comp=""
              isHeading={false}
              firstSection={false}
            />
            <SectionNameComponent
              name="Upload Image"
              comp=""
              isHeading={false}
              firstSection={false}
            />
          </Accordion>
        </div>
        <div className="border-2 border-saffron" style={{ flex: "4" }}>
          {children}
        </div>
      </div>
      {/* </div> */}
    </ManageRestaurantPage>
  );
}

export default ManageRestaurantInfoPageLayout;
