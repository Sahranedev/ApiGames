import React from "react";
import { Link } from "react-router-dom";
import "../Styles/searchBar.css";

function Searchbar({ searchValue, setSearchValue, getGame }) {
  return (
    <div className="d-md-none m-3 p-3 search">
      <form className="d-flex d-md-none  m-1 p-1 " role="search">
        {/* Take the input on change to find make a game list */}
        <input
          value={searchValue}
          className="search-bar"
          type="text"
          placeholder="Type here"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <Link to="/gamelist">
          <button
            type="submit"
            className="search-button"
            onClick={() => {
              getGame();
            }}
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
  );
}

export default Searchbar;
