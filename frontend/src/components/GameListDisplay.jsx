/* eslint-disable*/
import React, { useState } from "react";
import "../Styles/GameListDisplay.css";
import GameGenreDisplay from "./GameGenreDisplay";
import GameDateDisplay from "./GameDateDisplay";
import Modale from "../Pages/Modale";
import IMGnotFound from "../images/IMGnotFound.png";

function GameListDisplay({
  theme,
  name,
  background_image: backgroundImage,
  metacritic,
  released,
  genres,
  id,
  platforms: [
    {
      platform: { name: platformeName },
    },
  ],
  metacritic_url: metacriticUrl,
}) {
  /* metacritic conditions */
  const colorCritic = () => {
    if (metacritic >= 75) {
      return "metacriticGreen";
    }
    if (metacritic >= 40) {
      return "metacriticYellow";
    }
    return "metacriticRed";
  };

  /* State for the modale */
  const [show, setShow] = useState(false);

  return (
    <div className="container px-4 image-container my-5">
      {/* modale */}
      <Modale show={show} setShow={setShow} id={id} theme={theme} />
      <div className={`row rounded my-3 cards-${theme}`}>
        <div className="col-md-4  col-6 p-0 ">
          {backgroundImage ? (
            <img
              className="img-fluid img-responsive rounded image-list"
              style={{ maxHeight: "300px", minHeight: "150px" }}
              src={backgroundImage}
              alt="jeu"
              onClick={() => setShow(id)}
            />
          ) : (
            <img
              className="img-fluid img-thumbnail"
              src={IMGnotFound}
              alt="not found"
              onClick={() => setShow(id)}
            />
          )}
        </div>
        <div className="col-md-8 col-6 px-2 px-md-3">
          <div className="container p-1 ">
            <div className="row">
              {" "}
              <h2
                className="title-game-list col-md-11 col-8"
                onClick={() => setShow(id)}
              >
                {name}{" "}
              </h2>
              <div className="col-md-6 col-2">
                {metacritic ? (
                  <div className={colorCritic(metacritic)}>
                    <a href={metacriticUrl} target="_blank" rel="noreferrer">
                      {metacritic}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
            {/*   Ternary that sets a display condition by calling the component that contains the release dates */}

            <div className="row-fluid ">
              <span className="text-personalize">
                {" "}
                Released : {""}
                {released ? <GameDateDisplay released={released} /> : null}
              </span>
            </div>

            <div className="row-fluid ">
              <span className="text-personalize">
                {" "}
                Platform : {""}
                {platformeName}
              </span>
            </div>
            {/*            Ternary that sets a display condition by calling the component that contains the genres */}

            <div className="row-fluid d-flex flex-wrap text-personalize">
              <div className="col-fluid"></div>
              {genres ? <GameGenreDisplay genres={genres} /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameListDisplay;
