import React from "react";
import "./navBar.css";

function Navbar() {
  return (
    <nav className="navigation">
      <ul className="navigation-ul">
        <li>Home</li>
        <li>Fave</li>
        <li>Burger</li>
      </ul>
    </nav>
  );
}

export default Navbar;
