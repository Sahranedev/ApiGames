import React from "react";
import { Link } from "react-router-dom";

function ButtonClose() {
  // function to return to the main page. Need to make a Route to '/' and let click event to change the url
  const closePage = () => {
    ("close and return");
  };

  return (
    <>
      <button type="button" onClick={closePage} className="buttonclose">
        X
      </button>
      <nav>
        <ul>
          <li>
            <Link to="/">Main Page</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default ButtonClose;
