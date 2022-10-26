import React from "react";
import dataTest from "./DataTest";
import Gamepresentation from "./Gamepresentation";

function Game() {
  return (
    <div>
      <Gamepresentation {...dataTest} />
    </div>
  );
}

export default Game;
