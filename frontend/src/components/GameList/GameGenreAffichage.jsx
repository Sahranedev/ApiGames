import React from "react";

function GameGenreAffichage({ genres: genre }) {
  return (
    <ul className="genreAffichage">
      {genre.map((el, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <li className="genreMap" key={i}>
          {el.name}
        </li>
      ))}
    </ul>
  );
}

export default GameGenreAffichage;
