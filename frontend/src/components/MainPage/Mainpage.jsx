import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";
import Novelties from "./Novelties";
import Links from "./Links";
import Likespage from "../LikesPage/Likespage";
import LinkToMainPage from "../Game/LinkToMainPage";

import Game from "../Game/Game";
import "./mainpage.css";

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
