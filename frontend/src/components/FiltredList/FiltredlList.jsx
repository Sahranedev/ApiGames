import React from "react";
import { useParams } from "react-router-dom";

function FiltredList() {
  const params = useParams();

  return (
    <div>
      <h2>Filtred games by "{params.filtredList}"</h2>
    </div>
  );
}

export default FiltredList;
