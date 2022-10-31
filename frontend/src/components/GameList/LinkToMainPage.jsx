import React from "react";
import { Link } from "react-router-dom";

function LinkToMainPage() {
  // function to return to the main page. Need to make a Route to '/' and let click event to change the url
  const closePage = () => {
    ("close and return");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <button type="button" onClick={closePage} className="buttonclose">
              X
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default LinkToMainPage;
