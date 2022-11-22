import React from "react";

function GameGenreDisplay({ genres: genre }) {
  return (
    <>
      {/* We use the map function to display all the genres of the game */}

      {genre.slice(0, 3).map((el) => (
        // eslint-disable-next-line react/no-array-index-key

        <div className="col-fluid" key={el.name}>
          <div className="btn btn-warning btn-sm text-personalize button-personalize">
            {el.name}
          </div>
        </div>
      ))}
    </>
  );
}

export default GameGenreDisplay;
