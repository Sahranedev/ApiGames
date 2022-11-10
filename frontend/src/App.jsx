import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./Styles/App.css";
import Navbar from "./components/Navbar";
import FiltredbyGenre from "./components/FiltredbyGenre";
import SingleGame from "./components/SingleGame";
import GameList from "./components/GameList";
import Searchbar from "./components/Searchbar";
import Novelties from "./components/Novelties";
import Likespage from "./Pages/Likespage";
import FiltredbyPlatforms from "./components/FiltredbyPlatforms";
import Mainpage from "./Pages/Mainpage";

const API_URL =
  "https://api.rawg.io/api/games?key=813e525c42c04986ac0747dddec96609";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [games, setGames] = useState([]);

  const getGame = () => {
    fetch(`${API_URL}&search=${searchValue}&page_size=5`)
      .then((response) => response.json())
      .then((result) => setGames(result.results))
      .catch((err) => console.error(err));
  };
  return (
    <div className="App">
      <Router>
        <div className="">
          <Navbar
            getGame={getGame}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            games={games}
          />
          <Searchbar
            getGame={getGame}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            games={games}
          />
          {games
            .filter((game) => game.name.includes(searchValue))
            .map((game) => (
              <p className="gameListParaph">{game.name}</p>
            ))}

          {/*  On veut que le Nav Bar et la Search Bar soient constamment présentes
Elles sont donc dans le Router et le Router lui-même dans App pour éviter tous les problèmes de routing.
Pour plus de lisibilité on intégère les Routes dans app afin de ne pas avoir à les importer dans chaque page.
Dans les Routes on ajoute la route "/" qu'il manquait et qui correspond à la page principale. On change également la route
'/mainpage' dans la navbar qui n'avait pas lieu d'être actuellement.
Lors de l'arrivée de la WelcomePage, il faudra toutefois créer une page qui renverra donc '/' et mainpage '/mainpage'
A voir
 */}

          <Routes>
            <Route path="/" element={<Mainpage />} />
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
            <Route
              path="/gamelist/"
              element={<GameList searchValue={searchValue} gameList={games} />}
            />
            <Route path="/game/:id" element={<SingleGame games={games} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
