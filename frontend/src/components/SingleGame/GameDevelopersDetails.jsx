import React from "react";

function GameDevelopersDetails({ developers: [{ name: developer }] }) {
  return <span> {developer}</span>;
}

export default GameDevelopersDetails;
