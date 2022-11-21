import React from "react";
import "../Styles/OurLikesDisplay.css";

function OurLikesDisplay({
  name,
  released,
  metacritic,
  description,
  author,
  opinion,
  developer,
  picture,
}) {
  return (
    <div className="container border-dark rounded">
      <h1 className="title text-center mt-4 mb-4">{name}</h1>
      <img src={picture} alt="Our favorite games" className="w-100 mt-3" />
      <h2 className="date my-3">{released}</h2>
      <button type="button" className="buttonMeta btn btn-success my-2">
        {metacritic}
      </button>
      <p className="description mt-3 mb-5 mx-5">{description}</p>
      <h3>Why do we have chosed this game ?</h3>
      <p className="opinion my-3 mx-5">{opinion}</p>
      <h3 className="h6 author mt-4 mb-3 mx-5">{author}</h3>
      <h3 className="h4">Developed by :</h3>
      <h3 className="developer mt-4">{developer}</h3>
    </div>
  );
}

export default OurLikesDisplay;
