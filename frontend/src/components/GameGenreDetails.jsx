import React from "react";

function GameGenreDetails({ genres: genre }) {
  return (
    <ul className="genreContainer">
      {genre.map((el, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <li className="genre" key={i}>
          {el.name}
        </li>
      ))}
    </ul>
  );
}

export default GameGenreDetails;
