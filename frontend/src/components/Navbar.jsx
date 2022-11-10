import { NavLink, Link } from "react-router-dom";
import "../Styles/navBar.css";
import home from "../images/home.png";
import favoris from "../images/favoris.png";
import Searchbar from "./Searchbar";

function Navbar({ searchValue, setSearchValue, getGame }) {
  return (
    <nav className="navbar navbar-fluid fixed-bottom important-bg-color">
      <div className="bg-specify">
        <ul className="navigation-ul  d-flex justify-content-space-between specify-ul">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>
              <img src={home} alt="Home" />
            </li>
          </NavLink>
          <NavLink
            to="/likes"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>
              <img src={favoris} alt="Favoris" />
            </li>
          </NavLink>

          <li>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </li>
        </ul>
        {/* /////////////////////// Nav bar  ////////////////////  */}
        {/* NAV BAR CONTAINER 
         bg-warning text-dark */}

        <div
          className="offcanvas offcanvas-end  bg-specify text-center text-white"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="container  justify-content-space-between">
            <div className="text-right" />
          </div>
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Filtered by :
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>

          <div className="offcanvas-body ">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 ">
              {/* Filtered by Platform dropdown menu  */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Platforms
                </a>
                <ul className="dropdown-menu text-white text-center bg-specify-second links">
                  <Link to="/platforms/pc">
                    <li>PC</li>
                  </Link>
                  <Link to="/platforms/playstation5">
                    <li>PS5 </li>
                  </Link>
                  <Link to="/platforms/playstation4">
                    <li>PS4</li>
                  </Link>
                  <Link to="/platforms/xbox-one">
                    <li>XBOX</li>
                  </Link>
                  <Link to="/platforms/nintendo-switch">
                    <li>SWITCH</li>
                  </Link>
                </ul>
              </li>

              {/* Filtered by genre dropdown menu  */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Genres
                </a>
                <ul className="dropdown-menu text-white text-center bg-specify-second">
                  <Link to="/genres/arcade">
                    <li>arcade</li>
                  </Link>
                  <Link to="/genres/action">
                    <li>action</li>
                  </Link>
                  <Link to="/genres/adventure">
                    <li>adventure</li>
                  </Link>
                  <Link to="/genres/simulation">
                    <li>simulation</li>
                  </Link>
                  <Link to="/genres/racing">
                    <li>racing</li>
                  </Link>
                  <Link to="/genres/shooter">
                    <li>shooter</li>
                  </Link>
                  <Link to="/genres/strategy">
                    <li>strategy</li>
                  </Link>
                  <Link to="/genres/puzzle">
                    <li>puzzle</li>
                  </Link>
                  <Link to="/genres/platformer">
                    <li>platformer</li>
                  </Link>
                  <Link to="/genres/massively-multiplayer">
                    <li>massively-multiplayer</li>{" "}
                  </Link>
                  <Link to="/genres/sports">
                    <li>sports</li>
                  </Link>
                  <Link to="/genres/fighting">
                    <li>fighting</li>
                  </Link>
                </ul>
              </li>
              <li>
                <Searchbar
                  searchValue={searchValue}
                  getGame={getGame}
                  setSearchValue={setSearchValue}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
