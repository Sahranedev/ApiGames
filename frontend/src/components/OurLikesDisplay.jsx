import React from "react";

function OurLikesDisplay({
  //   id,
  name,
  released,
  metacritic,
  description,
  author,
  opinion,
  developer,
  //   code,
  picture,
}) {
  return (
    <div>
      <img src={picture} alt="Our favorite games" className="w-100" />
      <h1>{name}</h1>
      <h2>{released}</h2>
      <button type="button">{metacritic}</button>
      <p>{description}</p>
      <h3>{author}</h3>
      <p>{opinion}</p>
      <h3>{developer}</h3>
    </div>
  );
}

export default OurLikesDisplay;
