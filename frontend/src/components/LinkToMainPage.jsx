import React from "react";
import { Link } from "react-router-dom";
import "../Styles/linktomainpage.css";

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
            <div className="btn-center">
              <button
                type="button"
                className="btn btn-outline-light col-6 "
                onClick={closePage}
              >
                X
              </button>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default LinkToMainPage;
