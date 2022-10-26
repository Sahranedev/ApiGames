import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Navbar from "./Navbar";
import Novelties from "./Novelties";
import Quizz from "./Quizz/Quizz";
import Ourlikes from "./Ourlikes";
import Game from "../Game/Game";

function Mainpage() {
  return (
    <>
      <Navbar />
      <Novelties />
      <Link to="/novelties">Novelties</Link>
      <Quizz />
      <Link to="/quizz">Quizz</Link>
      <Ourlikes />
      <Link to="/likes">Likes</Link>
      <Game />
      <Link to="/game">Game</Link>
    </>
  );
}

export default Mainpage;
