import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./Styles/App.css";
import StillLost from "@components/StillLost";
import Navbar from "./components/NavBar";
import Mainpage from "./Pages/MainPage";
import FilteredbyGenre from "./components/FilteredByGenre";
import SingleGame from "./components/SingleGame";
import GameList from "./components/GameList";
import Searchbar from "./components/SearchBar";
import Favorites from "./Pages/Favorites";
import FilteredbyPlatforms from "./components/FilteredByPlatforms";
import News from "./components/News";

const API_URL =
  "https://api.rawg.io/api/games?key=5657950b80b34f3491f12b3319827e0f";

/* b6d47b1b6d1d4e37a348869c6f3fa8a3
13e525c42c04986ac0747dddec96609 
5657950b80b34f3491f12b3319827e0f
*/

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [games, setGames] = useState([]);
  /* Make a hook to get the theme */
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === `light`) {
      setTheme(`dark`);
    } else {
      setTheme(`light`);
    }
  };
  /* update on theme */
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const getGame = () => {
    fetch(`${API_URL}&search=${searchValue}&page_size=10`)
      .then((response) => response.json())
      .then((result) => {
        setGames(result.results);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
    setSearchValue("");
  };
  return (
    <div className={`App  ${theme}`}>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Router>
          <div className="">
            {/* give props to toggle the theme */}
            <Navbar
              getGame={getGame}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              games={games}
              toggleTheme={toggleTheme}
              theme={theme}
            />

            <Searchbar
              className="d-none d-md-block m-3 p-3"
              getGame={getGame}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              games={games}
              theme={theme}
            />

            {games
              .filter((game) => game.name.includes(searchValue))
              .map((game) => (
                <p key={game.id} className="gameListParaph">
                  {game.name}
                </p>
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
              <Route path="/" element={<Mainpage theme={theme} />} />
              <Route
                path="/random/:randomID"
                element={<StillLost games={games} theme={theme} />}
              />
              <Route path="/favorites" element={<Favorites theme={theme} />} />
              <Route
                path="/platforms/:filtredListByPlatforms"
                element={<FilteredbyPlatforms theme={theme} />}
              />
              <Route
                path="/genres/:filtredListByGenre"
                element={<FilteredbyGenre theme={theme} />}
              />
              <Route
                path="/gamelist/"
                element={
                  <GameList
                    searchValue={searchValue}
                    gameList={games}
                    isLoading={isLoading}
                    theme={theme}
                  />
                }
              />
              <Route path="/game/:id" element={<SingleGame games={games} />} />
              <Route
                path="/news"
                element={<News games={games} theme={theme} />}
              />
            </Routes>
          </div>
        </Router>
      </SkeletonTheme>
    </div>
  );
}
