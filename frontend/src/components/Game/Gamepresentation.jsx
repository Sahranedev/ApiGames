import React from "react";
import ButtonClose from "./ButtonClose";
import GamePageGenre from "./GamePageGenre";
import GamePageCreators from "./GamePageCreators";
import GamePageCarrousel from "./GamePageCarrousel";

function Gamepresentation() {
  return (
    <div className="gamePageContainer">
      <ButtonClose />
      <img src="props" alt="jeu" />
      {/* La div gamepagetitle comprennd le titre du jeu et le coeur pour mettre en favori  */}
      <div className="gamePageInformations">
        <div className="gamePageTitle">
          <h2>Titre du jeu</h2>
          <div>Coeur favori</div>
        </div>
        {/* La div gamepagecarrousel contient les trois images fixe ou le carrousel si on a le temps + le score métacritique */}
        <GamePageCarrousel />
        {/* onclick qui changera l'url de l'image de base -> useState Div qui changera de couleur en fonction du score */}
        <div>Score métacritique</div>
        <GamePageGenre />
        <GamePageCreators />
        <p className="gamePageDescription">Lorem</p>
      </div>
    </div>
  );
}

export default Gamepresentation;
