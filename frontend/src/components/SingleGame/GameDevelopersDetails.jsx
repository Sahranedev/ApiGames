import React from "react";

function GameDevelopersDetails({ developers: [{ name: developer }] }) {
  return <span className="detailed"> {developer}</span>;
}

export default GameDevelopersDetails;
