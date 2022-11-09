import React from "react";

function GamePublishersDetails({ publishers: [{ name: publisher }] }) {
  return <span className="detailed"> {publisher}</span>;
}

export default GamePublishersDetails;
