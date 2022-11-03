import React from "react";
import { Link } from "react-router-dom";
import Quizz from "./Quizz/Quizz";
import Ourlikes from "./Ourlikes";

function Links({ searchValue }) {
  return (
    <div className="links">
      <li>
        <Link to="/novelties">Novelties</Link>
      </li>
      <Quizz />
      <li>
        <Link to="/quizz">Quizz</Link>
      </li>
      <Ourlikes />
      <li>
        <Link to="/likes">Likes</Link>
      </li>
      <li>
        <Link to="/gamelist">Liste de jeux filtrés par : "{searchValue}"</Link>
      </li>
      <li>
        <Link to="/game">Affichage du jeu selectionné: </Link>
      </li>
    </div>
  );
}

export default Links;
