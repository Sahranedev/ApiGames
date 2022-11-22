import React from "react";

function GameParaphDetails({ description }) {
  return (
    <div className="p-x-5">{description.replace(/(<([^>]+)>)/gi, "")}</div>
  );
}

export default GameParaphDetails;
