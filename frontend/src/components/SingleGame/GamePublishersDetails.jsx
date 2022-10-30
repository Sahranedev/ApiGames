import React from "react";

function GamePublishersDetails({ publishers: [{ name: publisher }] }) {
  return <span> {publisher}</span>;
}

export default GamePublishersDetails;
