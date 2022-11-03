import React from "react";

function GameDateAffichage({ released }) {
  return (
    <span className="release-detail">
      {released.split("-").join(" ").slice(4)}
    </span>
  );
}

export default GameDateAffichage;
