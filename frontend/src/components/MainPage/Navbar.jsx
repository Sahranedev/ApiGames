import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";

function Navbar() {
  const [menuClass, setMenuClass] = useState("burger hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClass("burger visible");
    } else {
      setMenuClass("burger hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <div>
      <nav className="navigation">
        <ul className="navigation-ul">
          <NavLink
            to="/mainpage"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>
              <img src="./src/assets/home.png" alt="Home" />
            </li>
          </NavLink>
          <NavLink
            to="/likes"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>
              <img src="./src/assets/favoris.png" alt="Favoris" />
            </li>
          </NavLink>
          <NavLink onClick={updateMenu}>
            <li>
              <img src="./src/assets/menu2.png" alt="Menu" />
            </li>
          </NavLink>
        </ul>
      </nav>
      <div className={menuClass}>
        <h3>Platform</h3>
        <ul className="menu-ul">
          <li>PC</li>
          <li>PS5</li>
          <li>XBOX</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
