import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LinkToMainPage from "../Game/LinkToMainPage";
import Navbar from "./Navbar";
import Novelties from "./Novelties";
import Links from "./Links";
import Likespage from "../LikesPage/Likespage";
import Searchbar from "./Searchbar";
import Game from "../Game/Game";

const API_URL =
  "https://api.rawg.io/api/games?key=813e525c42c04986ac0747dddec96609";

function Mainpage() {
  const [searchValue, setSearchValue] = useState("call of");

  const [games, setGames] = useState([]);

  const getGame = () => {
    fetch(`${API_URL}&search=${searchValue}&page_size=5`)
      .then((response) => response.json())
      .then((result) => setGames(result.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getGame();
  }, []);
  return (
    <Router>
      <div>
        <ul>
          <Searchbar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          {games
            .filter((game) => game.name.includes(searchValue))
            .map((game) => (
              <p>{game.name}</p>
            ))}
          <Navbar />

          <Links />

          <LinkToMainPage />
        </ul>
        <Routes>
          <Route path="/novelties" element={<Novelties />} />
          <Route path="/likes" element={<Likespage />} />
          <Route path="/game" element={<Game gameList={games} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Mainpage;
