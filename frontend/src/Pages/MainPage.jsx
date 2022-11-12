import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/mainpage.css";

function MainPage() {
  // Function to get a random game from the API from the mainpage
  const [randomID, setRandomID] = useState(Math.floor(Math.random() * 1000));

  const getRandomID = () => {
    setRandomID(Math.floor(Math.random() * 1000));
  };

  return (
    <div className="container vh-100">
      <ul>
        <h2 className="trollpresentation">THE MAIN PAGE</h2>
        <Link to={`/random/${randomID}`}>
          {" "}
          <button type="button" onClick={getRandomID}>
            Get random
          </button>
        </Link>
      </ul>
      <Link to="/news">
        <button type="button">News</button>
      </Link>

      <div />
    </div>
  );
}

export default MainPage;
