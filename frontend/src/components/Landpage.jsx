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
    <div className="d-flex justify-content-center  flex-column  text-center container p-5 my-5">
      {" "}
      <h1 className="my-5 special-text">Welcome on Api Games</h1>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
