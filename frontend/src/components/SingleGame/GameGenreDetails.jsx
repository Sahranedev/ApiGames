import React from "react";

function GameGenreDetails({ genres: genre }) {
  return (
    <div>
      {genre.map((el) => (
        <p>{el.name}</p>
      ))}
    </div>
  );
}

export default GameGenreDetails;
