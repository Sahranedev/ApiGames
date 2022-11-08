import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FiltredList() {
  const API_URL = "https://api.rawg.io/api/games";
  const API_KEY = "813e525c42c04986ac0747dddec96609";
  const { filtredList } = useParams();
  /* Transmets l'ID de la plateforme pour la donner au prochain fetch */
  const [filter, setFilter] = useState();
  /* Transmets les informations filtrées */
  /* const [filtredGames, setFiltredGames] = useState([]); */

  // Requête pour récupérer les ID des plateformes
  const getPlatformsList = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/platforms/lists/parents?key=813e525c42c04986ac0747dddec96609`
    );
    const result = await response.json();
    const platformsList = result.results;

    // Pour chaque plateforme de la liste je vérifie si le nom est égal à la valeur du params.
    platformsList.forEach((platform) => {
      if (platform.slug === filtredList) {
        /* console.log("c'est good"); */
        setFilter(platform.id);
        /*  console.log(filter); */
        // Si ce n'est pas bon, puisqu'il existe des sous catégories (ex:PS5) je fais pose la condition
        // sur le sous-tableau afin de faire la même vérification.
      } else if (platform.slug !== filtredList) {
        platform.platforms.forEach((sousplatforms) => {
          if (sousplatforms.slug === filtredList) {
            /*  console.log("OK 2"); */
            setFilter(sousplatforms.id);
            /*  console.log(filter); */
            // Si vraiment rien ne se passe on renvoie null
          } else {
            null;
          }
        });
      } else {
        /* console.log("après tout check non"); */
      }
    });
  };

  // Requête pour récupérer les jeux en fonction de la plateforme
  // On envoie les données dans le useState prévu à cet effet
  const getFiltredList = async () => {
    const response = await fetch(
      `${API_URL}?key=${API_KEY}&platforms=${filter}&ordering=-metacritic&page_size=5`
    );
    const filtredGamesData = await response.json();
    /* setFiltredGames(filtredGamesData); */
  };

  useEffect(() => {
    getPlatformsList();
    getFiltredList();
  }, [filtredList]);

  // pour chaque filter if  filter.name === filtredList
  // if yes, then fetch the API with the filter.id
  // if not, fetch the API with the filtredList

  return (
    <div>
      <h2>Filtred games by "{filtredList}"</h2>
      {/*  filtredGames && (
      <div className="game-list">
        {filtredGames.map((game) => (
          <GameListAffichage key={game.id} {...game} />
        ))}
      </div>
      ) */}
    </div>
  );
}

export default FiltredList;
