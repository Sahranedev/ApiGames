import React, { useState, useEffect } from "react";
import OurLikesDisplay from "./OurLikesDisplay";

function OurLikes({ theme }) {
  const [ourLikes, setOurLikes] = useState([]);

  const getOurLikes = () => {
    fetch(`http://localhost:4000/api/games`)
      .then((response) => response.json())
      .then((result) => {
        setOurLikes(result);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOurLikes();
  }, []);

  return (
    <div>
      {/*
        Display the API call of games
      */}
      {ourLikes?.map((game) => {
        return <OurLikesDisplay key={game.id} {...game} theme={theme} />;
      })}
    </div>
  );
}

export default OurLikes;
