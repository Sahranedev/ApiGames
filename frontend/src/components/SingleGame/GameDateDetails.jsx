import React from "react";

function GameDateDetails({ released }) {
  return <span className="detailed">{released.split("-").join("-")}</span>;
}

export default GameDateDetails;
