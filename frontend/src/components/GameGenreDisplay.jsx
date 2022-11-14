import React from "react";

function GameGenreDisplay({ genres: genre }) {
  return (
    <div className="">
      <ul className="d-flex justify-content-between">
        {/* On map la props pour permettre l'affichage de plusieurs genres si il y (sinon seul le premier genre du tableau apparaît) */}

        {genre.map((el, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className="genreList my-4 mx-3" key={i}>
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameGenreDisplay;
