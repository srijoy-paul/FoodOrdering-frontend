import Layout from "@/layouts/Layout";
import React from "react";
import UserProfileHero from "./UserProfileHero";
import { Accordion } from "@radix-ui/react-accordion";
import SectionNameComponent from "./SectionNameComponent";
import {
  AttentionSeeker,
  Fade,
  Hinge,
  JackInTheBox,
  Slide,
  Zoom,
} from "react-awesome-reveal";

type Props = {
  children: React.ReactNode;
};
function UserProfilePage({ children }: Props) {
  return (
    <Layout>
      <div
        className="flex flex-col h-full container gap-8"
        style={{ height: "100%" }}
      >
        <UserProfileHero />
        {/* 👆🏻img tag inside a div tag */}

        {/* Profile sections*/}
        <div className="flex flex-col md:flex-row pb-5 gap-2">
          <div className=" " style={{ flex: "1" }}>
            <Accordion
              type="single"
              className="flex flex-row w-full md:flex-col gap-1"
            >
              <AttentionSeeker effect="headShake">
                <SectionNameComponent
                  name="User Profile"
                  comp=""
                  isHeading={true}
                  firstSection={true}
                />
              </AttentionSeeker>

              <SectionNameComponent
                name="User Info"
                comp="info"
                isHeading={false}
                firstSection={false}
              />
              <SectionNameComponent
                name="Online Orders"
                isHeading={true}
                comp=""
                firstSection={false}
              />
              <SectionNameComponent
                name="Order History"
                comp=""
                isHeading={false}
                firstSection={false}
              />
              <SectionNameComponent
                name="My Addresses"
                comp=""
                isHeading={false}
                firstSection={false}
              />
              <SectionNameComponent
                name="Favorite Orders"
                comp=""
                isHeading={false}
                firstSection={false}
              />
            </Accordion>
          </div>
          <div style={{ flex: "4" }} className="">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserProfilePage;
