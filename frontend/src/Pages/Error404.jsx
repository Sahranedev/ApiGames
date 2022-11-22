import React from "react";
import "../Styles/error404.css";
import Lottie from "react-lottie";
import animationData from "../lotties/error404.json";

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
    </div>
  );
}

export default Error404;
