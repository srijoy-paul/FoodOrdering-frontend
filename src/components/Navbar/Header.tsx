// import React from "react";
import { Link } from "react-router-dom";
import MobileHeader from "./MobileHeader";
import { Button } from "../ui/button";

function Header() {
  /**Saffron: #FF9933
Green: #008000 */
  return (
    <div className=" py-6 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-saffron flex items-center tracking-tighter"
        >
          <img
            src="/logo.png"
            alt=""
            style={{ height: "60px", width: "60px" }}
          />
          <span className="underline decoration-wavy decoration-white border-around-text">
            BengalBiteExpress
          </span>
        </Link>
        <div className="justify-center items-center align-middle md:hidden">
          <MobileHeader />
        </div>
        <div className="hidden md:flex justify-center items-center align-middle">
          <Button
            variant="ghost"
            className="font-bold text-white hover:text-saffron hover:bg-transparent"
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
