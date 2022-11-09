import React from "react";

function GameParaphDetails({ description }) {
  return <div>{description.replace(/(<([^>]+)>)/gi, "")}</div>;
}

export default GameParaphDetails;
