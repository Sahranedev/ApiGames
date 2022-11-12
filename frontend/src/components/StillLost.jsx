import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import LinkToMainPage from "./LinkToMainPage";
import IMGnotFound from "../images/IMGnotFound.png";
import "../Styles/stillLost.css";

function StillLost() {
  const API_URL = "https://api.rawg.io/api/games";
  const API_KEY = "b6d47b1b6d1d4e37a348869c6f3fa8a3";
  const { randomID } = useParams();
  const [randomGame, setRandomGame] = useState(null);
  const [newRandomID, setNewRandomID] = useState(randomID);
  const [open, setOpen] = useState(false);

  // I want to get a new random ID if the user clicks the button
  const getNewRandomID = async () => {
    setNewRandomID(Math.floor(Math.random() * 1000));
  };

  const getRandomGame = async () => {
    // I want to check if the random ID is similar to the new random ID and want to display the good game
    const response = await fetch(
      `${API_URL}/${
        randomID === newRandomID ? randomID : newRandomID
      }?key=${API_KEY}`
    );
    const resultRandom = await response.json();
    setRandomGame(resultRandom);
  };

  useEffect(() => {
    getRandomGame();
  }, [newRandomID]);

  return (
    <div className="container-md  vh-100 p-5 rounded still-container">
      <LinkToMainPage />
      <div className="row">
        {/* Title */}
        {randomGame ? (
          <h2 className="col my-md-5 text-center">
            What about {randomGame.name} ?
          </h2>
        ) : null}
      </div>

      <div className="row">
        {/* Image */}
        {randomGame ? (
          <img
            src={randomGame.background_image}
            className="col-fluid col-md-6 img-responsive  random-img"
            alt="..."
          />
        ) : (
          <img
            src={IMGnotFound}
            className="col-fluid col-md-6 img-responsive  random-img"
            alt="not found"
          />
        )}

        {/* col same row but next to image */}
        <div className="col-fluid col-md-6">
          <div className="container-md">
            <div className="row text-muted">
              {randomGame ? `INFORMATIONS ABOUT ${randomGame.name}` : null}
            </div>
            {/* I want to display the name of the publishers */}
            <div className="row my-md-5">
              {randomGame
                ? `Publishers : ${randomGame.publishers.map(
                    (publisher) => publisher.name
                  )}`
                : null}
            </div>
            {/* I want to display the release date */}
            <div className="row my-md-5">
              Released : {randomGame ? randomGame.released : null}
            </div>
            {/* I want to display genres */}
            <div className="row my-md-5 md-flex align-items-md-center">
              Genres :{" "}
              {randomGame
                ? randomGame.genres.map((genre, i) => (
                    <li className="genreList mx-1 my-1" key={i}>
                      {genre.name}
                    </li>
                  ))
                : null}
            </div>
          </div>
        </div>
        {/* I want to display the description on click when sm-screen */}
        <div className="row d-flex flex-row mt-3 mb-3 d-md-none">
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="d-flex flex-row description-button"
            type="button"
            variant="outline-light"
          >
            {open ? (
              <>
                Description :
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  fill="white"
                  className="bi bi-caret-down-fill"
                  viewBox="0 -2 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </>
            ) : (
              <>
                {" "}
                Description :
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  fill="white"
                  className="bi bi-caret-right"
                  viewBox="0 -2 16 16"
                >
                  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                </svg>
              </>
            )}
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <p>{randomGame ? randomGame.description_raw : null}</p>
            </div>
          </Collapse>
        </div>

        {/* I want to display description on md-screen */}
        <div className="d-none d-md-inline row mt-3 mb-3">
          <p className="text-justify mb-3 ">
            Description {randomGame ? randomGame.description_raw : null}
          </p>
        </div>

        {/* Maybe I want to add to my favorite list */}
        <div className="mb-3 d-flex justify-content-center">
          <button
            type="button"
            className="btn  mb-1 d-flex justify-content-center"
          >
            <div className="unlike text-center" />
          </button>
        </div>

        {/* I want to get a new Random Game */}
        <div className="mb-5 d-flex justify-content-center">
          <button
            className="btn btn-dark mb-5"
            type="button"
            onClick={getNewRandomID}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export default StillLost;
