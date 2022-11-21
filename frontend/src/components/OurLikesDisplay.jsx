import React from "react";

import "../Styles/OurLikesDisplay.css";

function OurLikesDisplay({
  theme,
  name,
  released,
  metacritic,
  author,
  opinion,
  developer,
  picture,
}) {
  const colorCritic = () => {
    if (metacritic >= 75) {
      return "metacritic75100";
    }
    if (metacritic >= 40) {
      return "metacritic4074";
    }
    return "metacritic039";
  };

  return (
    <div className="container border-dark rounded my-2">
      <div className="container d-flex align-items-center justify-content-around">
        <h1 className="col-fluid title text-center mt-4 mb-4 ">{name}</h1>
      </div>
      <img
        src={picture}
        alt="Our favorite games"
        className="w-100 mt-3 rounded ourpi-img"
      />
      <div className={`card-personnalized-${theme} rounded p-2`}>
        <div className="container d-flex align-items-center justify-content-around">
          {metacritic ? (
            <div className={`col-1 text-white ${colorCritic(metacritic)}`}>
              {metacritic}
            </div>
          ) : null}
          <h3 className="col-fluid align-items-center developer text-personalized">
            {" "}
            Developed by : {developer}
          </h3>

          <h3 className="col-fluid text-personalized">
            Released : {released.slice(0, 4)}
          </h3>
        </div>

        <h3 className="title">Why ?</h3>
        <p className="opinion my-3 mx-5 text-justify">{opinion}</p>
        <h3 className="h6 author mt-4 mb-3 mx-5 title">@{author}</h3>
      </div>
    </div>
  );
}

export default OurLikesDisplay;
