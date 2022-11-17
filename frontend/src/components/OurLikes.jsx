import React, { useState, useEffect } from "react";
import OurLikesDisplay from "./OurLikesDisplay";

function OurLikes() {
  const [ourLikes, setOurLikes] = useState([]);

  const getOurLikes = () => {
    fetch(`http://localhost:5000/api/games`)
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
      {/* Affichage appel API */}
      {ourLikes?.map((game) => {
        return <OurLikesDisplay key={game.id} {...game} />;
      })}
    </div>
  );
}

export default OurLikes;
