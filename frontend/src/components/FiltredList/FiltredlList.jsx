import React from "react";
import { useParams } from "react-router-dom";

function FiltredList() {
  const params = useParams();

  return (
    <div>
      <h2>Jeux filtrés - : {params.filtredList}</h2>
    </div>
  );
}

export default FiltredList;
