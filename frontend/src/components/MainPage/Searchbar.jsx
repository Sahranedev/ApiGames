import React from "react";
import "./searchBar.css";

function Searchbar({ searchValue, setSearchValue }) {
  return (
    <div className="search">
      <input
        value={searchValue}
        className="search-bar"
        type="text"
        placeholder="Nom, plateforme...."
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit" className="search-button">
        🔎️
      </button>
    </div>
  );
}

export default Searchbar;
