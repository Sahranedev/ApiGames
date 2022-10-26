import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Navbar from "./Navbar";
import Novelties from "./Novelties";
import Quizz from "./Quizz/Quizz";
import Ourlikes from "./Ourlikes";
import Searchbar from "./Searchbar";
import Game from "../Game/Game";

function Mainpage() {
  const [searchValue, setSearchValue] = React.useState("");

  const results = {
    applist: {
      apps: [
        { appid: 1, name: "Valorant" },
        { appid: 2, name: "Fable" },
        { appid: 3, name: "Elden ring" },
      ],
    },
  };
  return (
    <>
      <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
      {results.applist.apps
        .filter((game) => game.name.includes(searchValue))
        .map((game) => (
          <li>{game.name}</li>
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
    </>
  );
}

export default Mainpage;
