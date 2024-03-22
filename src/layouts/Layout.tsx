import React from "react";
import PropTypes from "prop-types";
import Header from "@/components/Navbar/Header";
import Footer from "@/components/Footer/Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

Layout.propTypes = { children: React.ReactNode };

export default Layout;
