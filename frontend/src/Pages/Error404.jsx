import React from "react";
import "../Styles/error404.css";
import Lottie from "react-lottie";
import animationData from "../lotties/error404.json";
import { NavLink } from "react-router-dom";

function Error404() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="error404">
      <Lottie options={defaultOptions} height={400} width={400} />
      <NavLink to="/">
        <span>Return to home page</span>
      </NavLink>
    </div>
  );
}

export default Error404;
