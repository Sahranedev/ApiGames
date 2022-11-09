import React from "react";
import { Link } from "react-router-dom";
import "./searchBar.css";

function Searchbar({ searchValue, setSearchValue, getGame }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getGame();
    }
  };
  return (
    <div className="search">
      <input
        value={searchValue}
        className="search-bar"
        type="text"
        placeholder="Search your game here"
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Link to="/gamelist">
        <button
          type="submit"
          className="search-button"
          onClick={() => getGame()}
        >
          {" "}
          🔎️
        </button>
      </Link>
    </div>
  );
}

export default Searchbar;
