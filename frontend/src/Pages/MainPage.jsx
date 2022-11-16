import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Novelties from "../components/Novelties";
import "../Styles/mainpage.css";

function MainPage({ theme }) {
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
    <div className={`container vh-100 favorite-container-${theme}  py-md-5`}>
      <div className="d-flex justify-content-between">
        {" "}
        {/* title */}
        <h2>Incoming games</h2>
        <Link to="/news">
          <button
            className="btn btn-link text-personnalized-color"
            type="button"
          >
            View All
          </button>
        </Link>
      </div>
      <div className="container">
        <div className="row">
          {Maingames.length > 0 ? (
            Maingames.map((game) => <Novelties game={game} key={game.id} />)
          ) : (
            <h2>Please Wait...</h2>
          )}
        </div>
      </div>
      <hr className="mt-md-5 my-md-5" />
      <div className="container random-title d-flex flex-column pt-5">
        <h2 className="d-flex justify-content-center">LOST ?</h2>
        <h2 className="text-personnalized-color d-flex justify-content-center display-1">
          Randomize
        </h2>
        <h2 className="d-flex justify-content-center"> your LIFE</h2>

        <Link to={`/random/${randomID}`}>
          {" "}
          <button
            className="container button-class d-flex justify-content-center btn btn-dark col-6 mt-5 my-md-5 "
            type="button"
            onClick={getRandomID}
          >
            Get random
          </button>
        </Link>
      </div>

      <hr className="mt-4" />

      <div className="game-select">
        <h2>Our selection</h2>
        <div className="d-flex justify-content-center mt-5">
          <div className="like text-center" />{" "}
          <h2 className="mx-1 ">
            {" "}
            Game Name by <span className="text-personnalized-color">Name</span>
          </h2>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div className="like text-center" />{" "}
          <h2 className="mx-1 ">
            {" "}
            Game Name by <span className="text-personnalized-color">Name</span>
          </h2>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div className="like text-center" />{" "}
          <h2 className="mx-1 ">
            {" "}
            Game Name by <span className="text-personnalized-color">Name</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
