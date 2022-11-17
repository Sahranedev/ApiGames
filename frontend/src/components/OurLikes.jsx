// import React, { useState, useEffect } from "react";

// function OurLikes() {
//   const [Ourlikes, setOurlikes] = useState([]);

//   const getOurLikes = () => {
//     console.log("on est dans le ourLikes");
//     fetch(`http://localhost:5000/api/games`)
//       .then((response) => response.json())
//       .then((result) => {
//         setOurlikes(result.results);
//       })
//       .catch((err) => console.error(err));
//   };

//   useEffect(() => {
//     getOurLikes();
//   }, []);

//   return <div>Ourlikes</div>;
// }

// export default OurLikes;
