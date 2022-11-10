import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import GameListAffichage from "./GameListDisplay";
import ButtonOrder from "./ButtonOrder";

function FiltredByGenre() {
  const API_URL = "https://api.rawg.io/api/games";
  const API_KEY = "813e525c42c04986ac0747dddec96609";

  /* useRef permet ici de gérer l'état du lancement des fonctions fetch */
  const isMount = useRef(false);
  const { filtredListByGenre } = useParams();
  /* Transmets l'ID du genre  pour la donner au prochain fetch */
  const [filter, setFilter] = useState();
  /* Permet de stocker les jeux selon le genre */
  const [gamesFiltred, setGamesFiltred] = useState([]);
  /* Permet d'ajuster le filtrage, remonter de state pour le faire passer au composant buttonOrder */
  const [order, setOrder] = useState(false);

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
    const gamesresult = await response.json();
    setGamesFiltred(gamesresult.results);
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
      <div className="row d-flex justify-content-between ml-5 mr-5">
        <h2 className="col-10">Filtred games by " {filtredListByGenre} "</h2>
        <ButtonOrder order={order} setOrder={setOrder} />
        <div className="col-1" />
      </div>

      {gamesFiltred?.map((game) => (
        <GameListAffichage {...game} key={game.id} />
      ))}
    </div>
  );
}

export default FiltredByGenre;
