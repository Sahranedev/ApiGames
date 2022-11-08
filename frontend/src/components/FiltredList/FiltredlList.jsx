import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import GameListAffichage from "@components/GameList/GameListAffichage";

function FiltredList() {
  const API_URL = "https://api.rawg.io/api/games";
  const API_KEY = "813e525c42c04986ac0747dddec96609";
  const isMount = useRef(false);
  const { filtredList } = useParams();
  /* Transmets l'ID de la plateforme pour la donner au prochain fetch */
  const [filter, setFilter] = useState();
  /* Permet de stocker les jeux de la plateforme */
  const [gamesFiltred, setGamesFiltred] = useState([]);

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
        setFilter(platform.id);
        // Si ce n'est pas bon, puisqu'il existe des sous catégories (ex:PS5) je fais pose la condition
        // sur le sous-tableau afin de faire la même vérification.
      } else if (platform.slug !== filtredList) {
        platform.platforms.forEach((sousplatforms) => {
          if (sousplatforms.slug === filtredList) {
            setFilter(sousplatforms.id);
            // Si vraiment rien ne se passe on renvoie null
          } else {
            null;
          }
        });
      } else {
        console.log("après tout check non");
      }
    });
  };

  // Requête pour récupérer les jeux en fonction de la plateforme
  const getFiltredList = async () => {
    const response = await fetch(
      `${API_URL}?key=${API_KEY}&platforms=${filter}&ordering=-metacritic&page_size=5`
    );
    const gamesresult = await response.json();
    setGamesFiltred(gamesresult.results);
    console.log(gamesresult.results);
  };

  // On utilise un useEffect basé sur l'évolution du filtredList pour réactualiser la requête
  // quand on change de plateforme depuis le menu, vu qu'onn ne change pas de composant sinon ça ne recharge pas
  useEffect(() => {
    getPlatformsList();
    console.log(filter);
  }, [filtredList]);

  // On utilise un useEffect basé sur le montage du composant pour ne pas déclencher la requête du listing en début de chargement de page
  useEffect(() => {
    if (isMount.current) {
      console.log(filter);
      getFiltredList();
    } else {
      isMount.current = true;
    }
  }, [filter]);

  return (
    <div>
      <h2>Filtred games by "{filtredList}"</h2>

      <h1>{filter}</h1>

      {gamesFiltred?.map((game) => (
        <GameListAffichage {...game} key={game.id} />
      ))}
    </div>
  );
}

export default FiltredList;
