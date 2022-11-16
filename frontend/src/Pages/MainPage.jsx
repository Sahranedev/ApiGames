import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Novelties from "../components/Novelties";
import "../Styles/mainpage.css";

function MainPage() {
  // Function to get a random game from the API from the mainpage
  const [randomID, setRandomID] = useState(Math.floor(Math.random() * 1000));
  const [Maingames, setMaingames] = useState([]);

  const getRandomID = () => {
    setRandomID(Math.floor(Math.random() * 1000));
  };

  const date1 = new Date().toISOString().slice(0, 10);
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 2;

  const getNewsGames = () => {
    fetch(
      `https://api.rawg.io/api/games?key=5954a0ffab034307b0f8bb9adcd5f008&dates=${date1},${nextYear}&ordering=-added&page_size=2`
    )
      .then((response) => response.json())
      .then((result) => {
        setMaingames(result.results);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getNewsGames();
  }, []);

  return (
    <div className="container vh-100 padding0">
      <ul>
        <h2 className="trollpresentation">THE MAIN PAGE</h2>
        <Link to={`/random/${randomID}`}>
          {" "}
          <button type="button" onClick={getRandomID}>
            Get random
          </button>
        </Link>
      </ul>
      <div className="title">
        <h2>Incoming games</h2>
        <Link to="/news">
          <button type="button">View All</button>
        </Link>
      </div>
      <div className="news-img">
        {Maingames.length > 0 ? (
          Maingames.map((game) => <Novelties game={game} key={game.id} />)
        ) : (
          <h2>Please Wait...</h2>
        )}
      </div>
      <div />
    </div>
  );
}

export default MainPage;
