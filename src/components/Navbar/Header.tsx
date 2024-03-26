// import React from "react";
import { Link } from "react-router-dom";
import MobileHeader from "./MobileHeader";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import DropDownMenu from "./DropDown";

function Header({ isAbsolute }) {
  /**Saffron: #FF9933
Green: #008000 */
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div className={` py-6 w-full z-10 ${isAbsolute ? "absolute" : ""} `}>
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

        {isAuthenticated ? (
          <div>
            <DropDownMenu />
          </div>
        ) : (
          <div className="hidden md:flex justify-center items-center align-middle">
            <Button
              variant="ghost"
              className="font-bold text-white hover:text-saffron hover:bg-transparent"
              onClick={async () => loginWithRedirect()}
            >
              Log In
            </Button>
          </div>
        )}

        {isAuthenticated ? (
          ""
        ) : (
          <div className="justify-center items-center align-middle md:hidden">
            <MobileHeader />
          </div>
        )}

        {/*
        <div className="hidden md:flex justify-center items-center align-middle">
          <Button
            variant="ghost"
            className="font-bold text-white hover:text-saffron hover:bg-transparent"
            onClick={async () => loginWithRedirect()}
          >
            Log In
          </Button>
        </div> */}

        {/* <div>
          <DropDownMenu />
          
        </div> */}
      </div>
    </div>
  );
}

export default Header;
