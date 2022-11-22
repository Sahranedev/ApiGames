import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Novelties from "../components/Novelties";
import "../Styles/mainpage.css";

const API_KEY = "17de4caa2f4543e6878ebbdafe4072c8";

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
      `https://api.rawg.io/api/games?key=17d306a6417e451dbac7946b20c1301c&dates=${date1},${nextYear}&ordering=-added&page_size=2`
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

  /* API call for GOTY on the mainpage  */
  const [GOTYgames, setGOTYgames] = useState([]);
  const lastYear = currentYear - 2;

  const getGOTYGames = () => {
    fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&dates=${lastYear},${date1}&ordering=-added&page_size=2`
    )
      .then((response) => response.json())
      .then((data) => {
        setGOTYgames(data.results);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getGOTYGames();
  }, []);

  return (
    <div className={`container mainpage-container-${theme}  py-md-5`}>
      <div className=" container p-md-5 vh-100 ">
        {/*  New Games */}
        <div className="d-flex justify-content-between">
          {" "}
          {/* title */}
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#EDA017"
              className="bi bi-clock"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>{" "}
            Incoming games
          </h2>
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
            {/* APi call display */}
            {Maingames.length > 0
              ? Maingames.map((game) => (
                  <Novelties game={game} key={game.id} theme={theme} />
                ))
              : null}
          </div>
        </div>
        <hr className="mt-md-5 my-md-5" />

        {/*  Second part - Randomise */}

        <div className="container m-0 p-0 d-md-flex align-items-center">
          <div className="col-md-6 m-0 p-0">
            {/* Randomise */}

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
            <hr className="d-md-none mt-md-5 my-md-5" />
          </div>
          <div className="col-md-6 m-0 p-0">
            {/* Best of the year */}

            <div className="d-flex justify-content-between ">
              {" "}
              {/* title */}
              <h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#EDA017"
                  className="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>{" "}
                Games of the Year
              </h2>
              <Link to="/goty">
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
                {GOTYgames.length > 0
                  ? GOTYgames.map((game) => (
                      <Novelties game={game} key={game.id} theme={theme} />
                    ))
                  : null}
              </div>
            </div>
            <hr className="d-md-none mt-md-5 my-md-5" />
          </div>
        </div>

        {/*  Our selection */}
        <hr className="mt-4 d-none d-md-block" />

        <div className="container">
          <div className="game-select" />
        </div>

        <div className="container random-title d-flex flex-column pt-5 pb-5">
          <h2 className="d-flex justify-content-center">Discover</h2>
          <h2 className="text-personnalized-color d-flex justify-content-center display-1">
            Our Selection
          </h2>
          <h2 className="d-flex justify-content-center">
            {" "}
            (We have good taste...)
          </h2>
          <h3 className="d-flex justify-content-center"> (Really.)</h3>

          <Link to="/ourlikes">
            {" "}
            <button
              className="mb-5 container button-class d-flex justify-content-center btn btn-dark col-6 mt-5 my-md-5 "
              type="button"
              onClick={getRandomID}
            >
              Let's go
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
