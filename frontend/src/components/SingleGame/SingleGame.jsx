import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import SingleGameAffichage from "./SingleGameAffichage";
import "./singleGame.css";

const API_URL = "https://api.rawg.io/api/games";
const API_KEY = "813e525c42c04986ac0747dddec96609";

function SingleGame({ id }) {
  const [game, setGame] = useState([]);
  // const { id } = useParams();
  /* Fetch API to get details of a game */
  const getSingleGame = () => {
    fetch(`${API_URL}/${id}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((result) => {
        setGame(result);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getSingleGame();
  }, []);

  return (
    <div>
      <SingleGameAffichage {...game} />
    </div>
  );
}

export default SingleGame;
