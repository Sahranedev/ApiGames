import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FiltredbyGenre from "../components/FiltredbyGenre";
import SingleGame from "../components/SingleGame";
import GameList from "../components/GameList";
import Searchbar from "../components/Searchbar";
import Navbar from "../components/Navbar";
import Novelties from "../components/Novelties";
import Links from "../components/Links";
import Likespage from "./Likespage";
import LinkToMainPage from "../components/LinkToMainPage";
import FiltredbyPlatforms from "../components/FiltredbyPlatforms";
import "../Styles/mainpage.css";

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
          <Route
            path="/platforms/:filtredListByPlatforms"
            element={<FiltredbyPlatforms />}
          />
          <Route
            path="/genres/:filtredListByGenre"
            element={<FiltredbyGenre />}
          />
          <Route path="/gamelist/" element={<GameList gameList={games} />} />
          <Route path="/game/:id" element={<SingleGame games={games} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Mainpage;
