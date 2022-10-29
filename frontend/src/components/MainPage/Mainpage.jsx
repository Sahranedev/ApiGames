import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameList from "../GameList/GameList";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";
import Novelties from "./Novelties";
import Links from "./Links";
import Likespage from "../LikesPage/Likespage";
import LinkToMainPage from "../GameList/LinkToMainPage";

import "./mainpage.css";
import SingleGame from "../SingleGame/SingleGame";

function Mainpage({ games, setSearchValue, searchValue, getGame }) {
  return (
    <Router>
      <div>
        <ul>
          <Searchbar
            getGame={getGame}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          {games
            .filter((game) => game.name.includes(searchValue))
            .map((game) => (
              <p className="gameListParaph">{game.name}</p>
            ))}
          <Navbar />
          <Links searchValue={searchValue} />
          <LinkToMainPage />
        </ul>
        <Routes>
          <Route path="/novelties" element={<Novelties />} />
          <Route path="/likes" element={<Likespage />} />
          <Route path="/gamelist" element={<GameList gameList={games} />} />
          <Route path="/game" element={<SingleGame />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Mainpage;
