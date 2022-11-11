import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import GameListAffichage from "./GameListDisplay";
import ButtonOrder from "./ButtonOrder";
import LinkToMainPage from "./LinkToMainPage";

function FiltredByPlatforms() {
  const API_URL = "https://api.rawg.io/api/games";
  const API_KEY = "813e525c42c04986ac0747dddec96609";
  /* useRef permet ici de gérer l'état du lancement des fonctions fetch */
  const isMount = useRef(false);
  const { filtredListByPlatforms } = useParams();
  /* Transmets l'ID de la plateforme pour la donner au prochain fetch */
  const [filter, setFilter] = useState();
  /* Permet de stocker les jeux de la plateforme */
  const [gamesFiltred, setGamesFiltred] = useState([]);

  /* Permet d'ajuster le filtrage, remonter de state pour le faire passer au composant buttonOrder */
  const [order, setOrder] = useState(false);

  // Requête pour récupérer les ID des plateformes
  const getPlatformsList = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/platforms?key=${API_KEY}`
    );
    const result = await response.json();
    const platformsList = result.results;

    // Pour chaque plateforme de la liste je vérifie si le nom est égal à la valeur du params.
    platformsList.forEach((platform) => {
      if (platform.slug === filtredListByPlatforms) {
        setFilter(platform.id);
      }
    });
  };

  // Requête pour récupérer les jeux en fonction de la plateforme
  const getFiltredList = async () => {
    const response = await fetch(
      `${API_URL}?key=${API_KEY}&platforms=${filter}&ordering=${
        order ? `+metacritic` : `-metacritic`
      }&page_size=20`
    );
    const gamesResult = await response.json();
    setGamesFiltred(gamesResult.results);
  };

  // On utilise un useEffect basé sur l'évolution du filtredList pour réactualiser la requête
  // quand on change de plateforme depuis le menu, vu qu'onn ne change pas de composant sinon ça ne recharge pas
  useEffect(() => {
    getPlatformsList();
  }, [filtredListByPlatforms]);

  // On utilise un useEffect basé sur le montage du composant pour ne pas déclencher la requête du listing en début de chargement de page
  useEffect(() => {
    if (isMount.current) {
      getFiltredList();
    } else {
      isMount.current = true;
    }
  }, [filter]);

  // Mise à jour de l'ordre de tri en rappelant l'API lorsque order change
  useEffect(() => {
    getFiltredList();
  }, [order]);

  return (
    <div>
      <h2>Filtred games by " {filtredListByPlatforms.toUpperCase()} "</h2>
      <LinkToMainPage />
      <ButtonOrder order={order} setOrder={setOrder} />

      {gamesFiltred?.map((game) => (
        <GameListAffichage {...game} key={game.id} />
      ))}
    </div>
  );
}

export default FiltredByPlatforms;
