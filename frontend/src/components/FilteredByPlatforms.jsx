import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import ButtonOrder from "./ButtonOrder";
import LinkToMainPage from "./LinkToMainPage";
import GameListDisplay from "./GameListDisplay";

function FiltredByPlatforms({ theme }) {
  const API_URL = "https://api.rawg.io/api/games";
  const API_KEY = "5954a0ffab034307b0f8bb9adcd5f008";
  /* useRef permet ici de gérer l'état du lancement des fonctions fetch */
  const isMount = useRef(false);
  const { filtredListByPlatforms } = useParams();
  /* Transmets l'ID de la plateforme pour la donner au prochain fetch */
  const [filter, setFilter] = useState();
  /* Permet de stocker les jeux de la plateforme */
  const [gamesFiltred, setGamesFiltred] = useState([]);
  /* Permet d'ajuster le filtrage, remonter de state pour le faire passer au composant buttonOrder */
  const [order, setOrder] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
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
      <div className="row d-flex justify-content-between ml-5 mr-5 p-3">
        <h2 className="col-10">Filtered {filtredListByPlatforms} games</h2>
        <div className="container">
          {isLoading && <Skeleton height={200} count={5} />}
        </div>
        <div className="container ">
          <div className="d-flex flex-row justify-content-center">
            <ButtonOrder order={order} setOrder={setOrder} />
            <div className="">
              <LinkToMainPage />
            </div>
          </div>
        </div>
        <div className="col-1" />
      </div>

      {gamesFiltred?.map((game) => (
        <GameListDisplay {...game} key={game.id} theme={theme} />
      ))}
    </div>
  );
}

export default FiltredByPlatforms;
