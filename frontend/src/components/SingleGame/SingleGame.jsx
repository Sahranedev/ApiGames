import React, { useState, useEffect } from "react";
import SingleGameAffichage from "./SingleGameAffichage";
import "./singleGame.css";

const API_URL = "https://api.rawg.io/api/games";
const API_KEY = "813e525c42c04986ac0747dddec96609";

function SingleGame({ idObtain }) {
  /*   const getID= 5679; */
  const [game, setGame] = useState([]);

  const getSingleGame = () => {
    /*  5679 ici est la clé que nous devrons récupérer depuis la recherche */
    fetch(`${API_URL}/${idObtain}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((result) => {
        /*  console.log(`${API_URL}/${idObtain}?key=${API_KEY}`);
        console.log(idObtain); */
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
