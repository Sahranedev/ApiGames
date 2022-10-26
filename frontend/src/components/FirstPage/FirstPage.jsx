import React from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import Mainpage from "../MainPage/Mainpage";

function FirstPage() {
  return (
    <Router>
      <div>
        <Link to="/MainPage">
          <button type="button" onClick="" className="buttonclose">
            Lets Explore
          </button>
        </Link>
        <Routes>
          <Route path="/MainPage" element={<Mainpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default FirstPage;
