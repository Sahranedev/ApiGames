import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import GameListAffichage from "./GameListDisplay";
import ButtonOrder from "./ButtonOrder";
import LinkToMainPage from "./LinkToMainPage";

function FiltredByGenre({ theme }) {
  const API_URL = "https://api.rawg.io/api/games";
  const API_KEY = "5954a0ffab034307b0f8bb9adcd5f008";

  /* useRef permet ici de gérer l'état du lancement des fonctions fetch */
  const isMount = useRef(false);
  const { filtredListByGenre } = useParams();
  /* Transmets l'ID du genre  pour la donner au prochain fetch */
  const [filter, setFilter] = useState();
  /* Permet de stocker les jeux selon le genre */
  const [gamesFiltred, setGamesFiltred] = useState([]);
  /* Permet d'ajuster le filtrage, remonter de state pour le faire passer au composant buttonOrder */
  const [order, setOrder] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Requête pour récupérer les ID des genres
  const getGenreList = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    const result = await response.json();
    const genreList = result.results;

    // Pour chaque genre de la liste je vérifie si le nom est égal à la valeur du params.
    genreList.forEach((genre) => {
      if (genre.slug === filtredListByGenre) {
        setFilter(genre.id);
      }
    });
  };

  // Requête pour récupérer les jeux en fonction du genre
  const getFiltredList = async () => {
    const response = await fetch(
      `${API_URL}?key=${API_KEY}&genres=${filter}&ordering=${
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
    getGenreList();
  }, [filtredListByGenre]);

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
        <h2 className="col-10">Filtered {filtredListByGenre} games</h2>
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
          <div className="container">
            {isLoading && <Skeleton height={200} count={5} />}
          </div>
        </div>
        <div className="col-1" />
      </div>

      {gamesFiltred?.map((game) => (
        <GameListAffichage {...game} key={game.id} theme={theme} />
      ))}
    </div>
  );
}

export default FiltredByGenre;
