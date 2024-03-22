// import Layout from "@/layouts/layout";
// import React from "react";

import Layout from "../../layouts/Layout";
import Hero from "./Hero";

function Home() {
  return (
    <Layout>
      <Hero />
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col text-center -mt-16 z-10 absolute top-[95%] left-16 container mx-auto border-3 border-purple-400">
        <h1 className="text-5xl text-orange-300">Tuck into a takeway today</h1>
        <span className="text-xl">Food is just a clickway</span>
      </div>
    </Layout>
  );
}

export default Home;
