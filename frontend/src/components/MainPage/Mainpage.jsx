import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Novelties from "./Novelties";
import Quizz from "./Quizz/Quizz";
import Ourlikes from "./Ourlikes";
import Likespage from "../LikesPage/Likespage";
import Game from "../Game/Game";

function Mainpage() {
  return (
    <Router>
      <div>
        <ul>
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
        </ul>
        <Routes>
          <Route path="/novelties" element={<Novelties />} />
          <Route path="/likes" element={<Likespage />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Mainpage;
