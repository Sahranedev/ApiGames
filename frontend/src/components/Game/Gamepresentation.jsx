import React from "react";
import ButtonClose from "./ButtonClose";

function Gamepresentation() {
  return (
    <>
      <ButtonClose />
      <img src="props" alt="jeu" />
      {/* La div gamepagetitle comprennd le titre du jeu et le coeur pour mettre en favori  */}
      <div className="gamepagetotal">
        <div className="gamepagetitle">
          <h2>Titre du jeu</h2>
          <div>Coeur favori</div>
        </div>
        {/* La div gamepagecarrousel contient les trois images fixe ou le carrousel si on a le temps + le score métacritique */}
        <div className="gamepagecarrousel">
          <img src="props" alt="futur carrousel" />
          <img src="props" alt="futur carrousel" />
          <img src="props" alt="futur carrousel" />
        </div>
        {/* onclick qui changera l'url de l'image de base -> useState */}
        <div>
          {/* Div qui changera de couleur en fonction du score */}
          <div>Score métacritique</div>
          <div className="gamepagetypeofgame">
            <div>type 1</div>
            <div>type 2</div>
            <div>type 3</div>
          </div>
          <div className="gamepageinfos">
            <h3>Editor</h3>
            <h3>Développeur</h3>
            <h3>Date de sortie</h3>
          </div>
          <p className="gamepagedescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquid eligendi nisi ratione eveniet eos, dolor blanditiis magni
            enim, qui incidunt ut voluptates! Vel, asperiores voluptatum?
            Commodi repudiandae incidunt maxime.
          </p>
        </div>
      </div>
    </>
  );
}

export default Gamepresentation;
