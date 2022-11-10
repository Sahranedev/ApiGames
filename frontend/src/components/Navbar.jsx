import { NavLink, Link } from "react-router-dom";
import "../Styles/navBar.css";
import home from "../images/home.png";
import favoris from "../images/favoris.png";
import Searchbar from "./Searchbar";

function Navbar({ searchValue, setSearchValue, getGame }) {
  return (
    <nav className="navbar navbar-fluid container-fluid fixed-bottom sticky-md-top important-bg-color">
      <div className="bg-specify">
        <ul className="navigation-ul  d-flex justify-content-space-between specify-ul">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li className="elementsNavbar">
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
                <ul className="dropdown-menu text-white text-center bg-specify-second text-uppercase">
                  <Link to="/platforms/pc">
                    <li className=" m-1 links-a  ">PC</li>
                  </Link>
                  <Link to="/platforms/playstation5">
                    <li className=" m-1 links-a">PS5 </li>
                  </Link>
                  <Link to="/platforms/playstation4">
                    <li className=" m-1 links-a">PS4</li>
                  </Link>
                  <Link to="/platforms/xbox-one">
                    <li className=" m1 links-a">XBOX</li>
                  </Link>
                  <Link to="/platforms/nintendo-switch">
                    <li className=" m1 links-a">SWITCH</li>
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
                <ul className="dropdown-menu text-white text-center bg-specify-second text-uppercase like-search">
                  <Link to="/genres/arcade">
                    <li className=" m-1 links-a">arcade</li>
                  </Link>
                  <Link to="/genres/action">
                    <li className=" m-1 links-a">action</li>
                  </Link>
                  <Link to="/genres/adventure">
                    <li className=" m-1 links-a">adventure</li>
                  </Link>
                  <Link to="/genres/simulation">
                    <li className=" m-1 links-a">simulation</li>
                  </Link>
                  <Link to="/genres/racing">
                    <li className=" m-1 links-a">racing</li>
                  </Link>
                  <Link to="/genres/shooter">
                    <li className=" m-1 links-a">shooter</li>
                  </Link>
                  <Link to="/genres/strategy">
                    <li className=" m-1 links-a">strategy</li>
                  </Link>
                  <Link to="/genres/puzzle">
                    <li className=" m-1 links-a">puzzle</li>
                  </Link>
                  <Link to="/genres/platformer">
                    <li className=" m-1 links-a">platformer</li>
                  </Link>
                  <Link to="/genres/massively-multiplayer">
                    <li className=" m-1 links-a">massively-multiplayer</li>{" "}
                  </Link>
                  <Link to="/genres/sports">
                    <li className=" m-1 links-a">sports</li>
                  </Link>
                  <Link to="/genres/fighting">
                    <li className="m-1 links-a">fighting</li>
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
