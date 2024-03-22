// import Layout from "@/layouts/layout";
// import React from "react";

import Layout from "../../layouts/Layout";
import Hero from "./Hero";
import moblieDisplayTransparent from "../../assets/moblieDisplayTransparent.png";
import googlePlay from "../../assets/getOnGooglePlay.png";
import iosAppStore from "../../assets/getOnIosAppStore.png";

function Home() {
  return (
    <Layout>
      <Hero />

      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 z-40 container mx-auto border-3 border-purple-400 relative">
        <h1 className="text-5xl text-saffron">Tuck into a takeway today</h1>
        <span className="text-xl">Food is just a clickway</span>
      </div>

      <div className="container grid md:grid-cols-2 gap-5 sm:items-center ">
        <div className="flex place-content-center ">
          <img src={moblieDisplayTransparent} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the BengalBiteExpress App for the faster ordering and
            personalized recommendations
          </span>
          <span className="flex ">
            <span className="cursor-pointer">
              <img
                src={googlePlay}
                style={{ height: "100%", width: "100%" }}
                alt=""
              />
            </span>
            <span className="cursor-pointer flex items-center justify-center ">
              <img
                className=""
                style={{ height: "84%", width: "100%" }}
                src={iosAppStore}
                alt=""
              />
            </span>
          </span>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
