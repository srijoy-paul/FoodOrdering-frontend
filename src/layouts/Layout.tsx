import React from "react";
// import PropTypes from "prop-types";
import Header from "@/components/Navbar/Header";
import Footer from "@/components/Footer/Footer";

type Props = { children: React.ReactNode; isAbsolute: boolean };

function Layout({ children, isAbsolute }: Props) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header isAbsolute={isAbsolute} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
