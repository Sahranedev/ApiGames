import React from "react";

function GameGenreDisplay({ genres: genre }) {
  return (
    <>
      {/* On map la props pour permettre l'affichage de plusieurs genres si il y (sinon seul le premier genre du tableau apparaît) */}

      {genre.slice(0, 3).map((el) => (
        // eslint-disable-next-line react/no-array-index-key

        <div className="col-fluid">
          <div className="btn btn-warning btn-sm text-personalize button-personalize">
            {el.name}
          </div>
        </div>
      ))}
    </>
  );
}

export default GameGenreDisplay;
