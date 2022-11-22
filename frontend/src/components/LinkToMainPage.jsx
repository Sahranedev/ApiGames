import React from "react";
import { Link } from "react-router-dom";

function LinkToMainPage() {
  // function to return to the main page. Need to make a Route to '/' and let click event to change the url
  const closePage = () => {
    ("close and return");
  };

  return (
    <div>
      <Link to="/">
        <button type="button" className="btn btn-dark" onClick={closePage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
      </Link>
    </div>
  );
}

export default LinkToMainPage;
