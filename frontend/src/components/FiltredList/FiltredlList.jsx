import React from "react";

function FiltredList() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h2>Jeux filtrés - : {params.filtredList}</h2>
    </div>
  );
}

export default FiltredList;
