/* import React, { useState, useRef, useEffect } from "react";
import SingleGameDisplay from "./SingleGameDisplay";

function StillLost() {
  const API_URL = "https://api.rawg.io/api/games";
  const API_KEY = "813e525c42c04986ac0747dddec96609";

  const [randomID, setRandomID] = React.useState(0);
  const [randomGame, setRandomGame] = React.useState(null);
  const isMount = useRef(false);

  const getRandomID = () => {
    setRandomID(Math.floor(Math.random() * 1000));
  };
  // I want to get a random ID
  // I want to use the random ID to get a random game from the API
  // I want to call the API with the random ID
  // I want to display the random game on the main page

  const getRandomGame = async () => {
    const response = await fetch(`${API_URL}/${randomID}?key=${API_KEY}`);
    const resultRandom = await response.json();
    resultRandom.detail ? null : setRandomGame(resultRandom);
    console.log(resultRandom);
  };

  useEffect(() => {
    if (isMount.current) {
      getRandomGame();
    } else {
      isMount.current = true;
    }
  }, [randomID]);

  return (
    <div>
      <button type="button" onClick={getRandomID}>
        Get a random ID
      </button>
      {randomID}
      <SingleGameDisplay {...randomGame} />
    </div>
  );
}

export default StillLost;
 */
