import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/welcome.json";

export default function Landpage() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      {" "}
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
