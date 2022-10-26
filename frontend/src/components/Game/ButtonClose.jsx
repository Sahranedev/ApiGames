import React from "react";

function ButtonClose() {
  // function to return to the main page. Need to make a Route to '/' and let click event to change the url
  const closePage = () => {
    ("close and return");
  };

  return (
    <button type="button" onClick={closePage} className="buttonclose">
      X
    </button>
  );
}

export default ButtonClose;
