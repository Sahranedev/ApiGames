import React from "react";

function GameGenreDisplay({ genres: genre }) {
  return (
    <div className="">
      <ul className="d-flex justify-content-between">
        {genre.map((el, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className="genreList mb-4" key={i}>
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameGenreDisplay;
