import React from "react";
import HeroImage from "../../assets/HeroImage.jpeg";
import HeroImage1 from "../../assets/HeroImage1.jpeg";
import HeroImage2 from "../../assets/HeroImage2.jpeg";
function Hero() {
  return (
    <div className="h-[100vh] z-0">
      <img src={HeroImage2} className="w-full h-full object-cover" alt="" />
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "
        style={{ height: "100vh" }}
      ></div>
    </div>
  );
}

export default Hero;
