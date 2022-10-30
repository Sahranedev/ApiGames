import React from "react";

function GameGenreDetails({ genres: genre }) {
  return (
    <div>
      {genre.map((el, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={i}>{el.name}</li>
      ))}
    </div>
  );
}

export default GameGenreDetails;
