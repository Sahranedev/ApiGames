import { NavLink, Link } from "react-router-dom";
import "./navBar.css";
import home from "../../assets/home.png";
import favoris from "../../assets/favoris.png";

function Navbar() {
  return (
    <nav className="navbar navbar-fluid fixed-bottom important-bg-color">
      <div className="bg-specify">
        <ul className="navigation-ul  d-flex justify-content-space-between specify-ul">
          <NavLink
            to="/mainpage"
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
                <ul className="dropdown-menu text-white text-center bg-specify-second">
                  <li>
                    <Link to="/platforms/pc">PC</Link>
                  </li>
                  <li>
                    <Link to="/platforms/playstation5">PS5</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/platforms/playstation4">PS4</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/platforms/xbox">XBOX</Link>
                  </li>
                  <li>
                    <Link to="/platforms/nintendo">SWITCH</Link>
                  </li>
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
                  <li>
                    <Link to="/genres/arcade">arcade</Link>
                  </li>
                  <li>
                    <Link to="/genres/action">action</Link>
                  </li>

                  <li>
                    <Link to="/genres/adventure">adventure</Link>
                  </li>

                  <li>
                    <Link to="/genres/simulation">simulation</Link>
                  </li>
                  <li>
                    <Link to="/genres/racing">racing</Link>
                  </li>
                  <li>
                    <Link to="/genres/shooter">shooter</Link>
                  </li>

                  <li>
                    <Link to="/genres/strategy">strategy</Link>
                  </li>
                  <li>
                    <Link to="/genres/puzzle">puzzle</Link>
                  </li>
                  <li>
                    <Link to="/genres/platformer">platformer</Link>
                  </li>
                  <li>
                    <Link to="/genres/massively-multiplayer">
                      massively-multiplayer
                    </Link>
                  </li>
                  <li>
                    <Link to="/genres/sports">sports</Link>
                  </li>
                  <li>
                    <Link to="/genres/fighting">fighting</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
