import React from "react";
import Lottie from "react-lottie";

import animationData from "../lotties/welcome.json";

/* Import the animation loading screen */
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
    <div className="d-flex justify-content-center align-items-center flex-column  text-center ">
      {" "}
      <h1 className="my-5 special-text">Welcome on Api Games</h1>
      <Lottie options={defaultOptions} height={400} width={400} />
      <h2> presents by</h2>
      <h2 className="my-2 special-text">
        Api Crew <br />
        Sahrane, Samy, Idir, Chloé & Marion
      </h2>
    </div>
  );
}
