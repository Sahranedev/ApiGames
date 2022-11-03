import { NavLink } from "react-router-dom";
import "./navBar.css";

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
              Platforms
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
              <li className="nav-item text-white">
                {/* <a className="nav-link active" aria-current="page" href="#"> */}
                PC
                {/* </a> */}
              </li>
              <li className="nav-item">
                {/*  <a className="nav-link" href="#"> */}
                PS5
                {/* </a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#"> */}
                SWITCH
                {/* </a> */}
              </li>
              <li className="nav-item">
                {/*  <a className="nav-link" href="#"> */}
                XBOX
                {/* </a> */}
              </li>
            </ul>
          </div>

          <div className="offcanvas-header ">
            <h5
              className="offcanvas-title text-center"
              id="offcanvasDarkNavbarLabel"
            >
              Genres
            </h5>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav flex-grow-1 pe-3">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#"> */}
                Action
                {/* </a> */}
              </li>
              <li className="nav-item">
                {/*  <a className="nav-link" href="#"> */}
                Horror
                {/*  </a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#"> */}
                MMORPG
                {/* </a> */}
              </li>
              <li className="nav-item">
                {/*  <a className="nav-link" href="#"> */}
                Adventure
                {/* </a> */}
              </li>
            </ul>
          </div>

          <div className="offcanvas-header">
            <h5
              className="offcanvas-title text-center"
              id="offcanvasDarkNavbarLabel"
            >
              Players
            </h5>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center text-center flex-grow-1 pe-3">
              <li className="nav-item">
                {/*  <a className="nav-link active" aria-current="page" href="#"> */}
                Single Player
                {/* </a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#"> */}
                {/*     Mu */}ltiplayer
                {/*   </a> */}
              </li>
              <li className="nav-item">
                {/*  <a className="nav-link" href="#"> */}
                Cooperation
                {/*  </a> */}
              </li>
              <li className="nav-item">
                {/*  <a className="nav-link" href="#"> */}
                Competitive
                {/*  </a> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
