import React, { useState } from "react";
import Navbar from "./Navbar";
import Novelties from "./Novelties";
import Quizz from "./Quizz/Quizz";
import Ourlikes from "./Ourlikes";
import Searchbar from "./Searchbar";

function Mainpage() {
  const [searchValue, setSearchValue] = useState("");

  const [games] = useState(["Diablo", "Valorant", "Elden ring"]);
  return (
    <>
      <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
      {games
        .filter((game) => game.includes(searchValue))
        .map((game) => (
          <li>{game}</li>
        ))}
      <Navbar />
      <Novelties />
      <Quizz />
      <Ourlikes />
    </>
  );
}

export default Mainpage;
