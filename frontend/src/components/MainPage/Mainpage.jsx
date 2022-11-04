import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* import Modale from "../SingleGame/Modal";
 */
import SingleGame from "../SingleGame/SingleGame";
import GameList from "../GameList/GameList";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";
import Novelties from "./Novelties";
import Links from "./Links";
import Likespage from "../LikesPage/Likespage";
import LinkToMainPage from "../GameList/LinkToMainPage";
import FiltredList from "../FiltredList/FiltredlList";
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
              <p className="gameListParaph">{game.name}</p>
            ))}
          <Navbar />
          <Links searchValue={searchValue} />
          <h2 className="trollpresentation">
            Please, write on the search bar 👆
            <LinkToMainPage />
          </h2>
        </ul>
        <Routes>
          <Route path="/novelties" element={<Novelties />} />
          <Route path="/likes" element={<Likespage />} />
          <Route path="/gamelist/:filtredList" element={<FiltredList />} />
          <Route path="/gamelist/" element={<GameList gameList={games} />} />
          <Route path="/game/:id" element={<SingleGame games={games} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Mainpage;
