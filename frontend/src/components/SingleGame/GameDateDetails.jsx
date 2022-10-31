import React from "react";

function GameDateDetails({ released }) {
  return (
    <span className="detailed">
      {released.split("-").reverse().join(" ").slice(2)}
    </span>
  );
}

export default GameDateDetails;
