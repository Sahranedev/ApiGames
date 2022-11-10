import { NavLink, Link } from "react-router-dom";
import "../Styles/navBar.css";
import logoTest from "../images/LogoTest.png";

function Navbar({ searchValue, setSearchValue, getGame }) {
  return (
    <nav className="navbar navbar-expand-md fixed-bottom sticky-md-top">
      <div className="container-fluid">
        {/* Home */}
        <NavLink to="/" className="link-nav">
          <img src={logoTest} alt="Home" style={{ width: "5em" }} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* "Body" of the navbar */}
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 ">
            {/* Favorite Page */}
            <li className="nav-item mx-3">
              <a className="nav-link" aria-current="page" href="/likes">
                <NavLink to="/likes"> Favorites</NavLink>
              </a>
            </li>

            {/* Dropdown Menu by platforms */}
            <li className="nav-item mx-3 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Platforms
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="/platforms/pc">PC</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/platforms/playstation5">PS5</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/platforms/playstation4">PS4</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/platforms/xbox-one">Xbox</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/platforms/nintendo-switch">Switch</Link>
                </li>
              </ul>
            </li>

            {/* Dropdown Menu by genres */}
            <li className="nav-item  mx-3 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Genres
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="/genres/arcade">Arcade</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/genres/action">Action</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/genres/adventure">Adventure</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/genres/simulation">Simulation</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/genres/racing">Racing</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/genres/shooter">Shooter</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/genres/strategy">Strategy</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/genres/puzzle">Puzzle</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/genres/platformer">Platformer</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/genres/massively-multiplayer">MMO</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/genres/sports">Sports</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/genres/fighting">Fighting</Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Search Bar  */}
          <form className="d-flex  m-1 p-1 search" role="search">
            <input
              className="search-bar"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <Link to="/gamelist">
              <button
                type="submit"
                className="search-button"
                onClick={() => getGame()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
