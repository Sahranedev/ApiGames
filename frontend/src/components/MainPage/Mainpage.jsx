import React, { useState } from "react";
import Navbar from "./Navbar";
import Novelties from "./Novelties";
import Quizz from "./Quizz/Quizz";
import Ourlikes from "./Ourlikes";
import Searchbar from "./Searchbar";

function Mainpage() {
  const [searchValue, setSearchValue] = useState("");

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
      <Quizz />
      <Ourlikes />
    </>
  );
}

export default Mainpage;
