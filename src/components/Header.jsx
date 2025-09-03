import React from "react";
import HeaderContent from "./HeaderContent";
import Navbar from "./Navbar";

function Header() {
  

  return (
    <header id="header">
      <div className="container">
        <Navbar />
      </div>
      <HeaderContent />
    </header>
  );
}

export default Header;
