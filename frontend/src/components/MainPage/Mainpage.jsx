import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Navbar from "./Navbar";
import Novelties from "./Novelties";
import Quizz from "./Quizz/Quizz";
import Ourlikes from "./Ourlikes";
import Searchbar from "./Searchbar";
import Game from "../Game/Game";
import "./mainpage.css";

function Mainpage({ games, setSearchValue, searchValue, getGame }) {
  return (
    <div>
      <Searchbar
        getGame={getGame}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {games
        .filter((game) => game.name.includes(searchValue))
        .map((game) => (
          <p>{game.name}</p>
        ))}
      <Navbar />
      <Novelties />
      <Link to="/novelties">Novelties</Link>
      <Quizz />
      <Link to="/quizz">Quizz</Link>
      <Ourlikes />
      <Link to="/likes">Likes</Link>
      <Game />
      <Link to="/game">Game</Link>
    </div>
  );
}

export default Mainpage;
