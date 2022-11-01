import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu";
import "./navBar.css";

function Navbar() {
  return (
    <nav className="navigation">
      <ul className="navigation-ul">
        <li>
          <Link to="/mainpage">
            <img src="./src/assets/home.png" alt="Home" />
          </Link>
        </li>
        <li>
          <Link to="/likes">
            <img src="./src/assets/favoris.png" alt="Favoris" />
          </Link>
        </li>
        <li>
          <img src="./src/assets/menu2.png" alt="Menu" />
        </li>
        <BurgerMenu />
      </ul>
    </nav>
  );
}

export default Navbar;
