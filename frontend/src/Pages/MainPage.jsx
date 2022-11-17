import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Novelties from "../components/Novelties";
import "../Styles/mainpage.css";

function MainPage({ theme }) {
  /*  Loading page  */
  const [isLoading, setIsLoading] = useState(true);

  // Function to get a random game from the API from the mainpage
  const [randomID, setRandomID] = useState(Math.floor(Math.random() * 1000));
  const getRandomID = () => {
    setRandomID(Math.floor(Math.random() * 1000));
  };

  /* API call for news on the mainpage  */
  const [Maingames, setMaingames] = useState([]);

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
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getNewsGames();
  }, []);

  return (
    <div className={`container mainpage-container-${theme}  py-md-5`}>
      <div className=" container p-md-5 vh-100 ">
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
          <div className="container">
            {isLoading && <Skeleton height={200} count={1} />}
          </div>
          <div className="row">
            {/* Affichage appel API */}
            {Maingames.length > 0
              ? Maingames.map((game) => (
                  <Novelties game={game} key={game.id} theme={theme} />
                ))
              : null}
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
              Game Name by{" "}
              <span className="text-personnalized-color">Name</span>
            </h2>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <div className="like text-center" />{" "}
            <h2 className="mx-1 ">
              {" "}
              Game Name by{" "}
              <span className="text-personnalized-color">Name</span>
            </h2>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <div className="like text-center" />{" "}
            <h2 className="mx-1 ">
              {" "}
              Game Name by{" "}
              <span className="text-personnalized-color">Name</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
