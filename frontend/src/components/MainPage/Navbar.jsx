import { NavLink } from "react-router-dom";
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
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Platforms
                </a>
                <ul className="dropdown-menu text-white text-center bg-specify-second">
                  <li>PC</li>
                  <li>PS5</li>
                  <li>SWITCH</li>
                  <li>XBOX</li>
                  <li>Mobile</li>
                </ul>
              </li>
              {/* Filtered by genre dropdown menu  */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Genres
                </a>
                <ul className="dropdown-menu text-white text-center bg-specify-second">
                  <li>Action</li>

                  <li>Adventure</li>

                  <li>Simulation</li>

                  <li>Shooter</li>

                  <li>Strategy</li>
                </ul>
              </li>
              {/* Filtered by players dropdown menu  */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Players
                </a>
                <ul className="dropdown-menu text-center text-white bg-specify-second">
                  <li className="text-center">Multiplayer</li>

                  <li className="text-center">Casual</li>

                  <li className="text-center">Competitive</li>

                  <li className="text-center">Coopération</li>
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
