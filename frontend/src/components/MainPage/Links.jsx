import React from "react";
import { Link } from "react-router-dom";
import Quizz from "./Quizz/Quizz";
import Ourlikes from "./Ourlikes";

function Links() {
  return (
    <div>
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
        <Link to="/game">Game</Link>
      </li>
    </div>
  );
}

export default Links;
