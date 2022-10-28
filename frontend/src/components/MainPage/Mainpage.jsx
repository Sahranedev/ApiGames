import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import ButtonClose from "../Game/ButtonClose";
import Navbar from "./Navbar";
import Novelties from "./Novelties";
import Quizz from "./Quizz/Quizz";
import Ourlikes from "./Ourlikes";
import Likespage from "../LikesPage/Likespage";

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

          <li>
            <Link to="/novelties">Novelties</Link>
          </li>
          <Quizz />
          <li>
            <Link to="/quizz">Quizz</Link>
          </li>
          <Ourlikes />
          <li>
            <Link to="/likes">Likes</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
          <ButtonClose />
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
