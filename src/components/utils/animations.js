import React from "react";
import * as legoData from "./legoloading.json";
import * as doneData from "./doneloading.json";
import Lottie from "react-lottie";

export const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const doneAnimation = () => {
  return <Lottie options={defaultOptions2} height={100} width={100} />;
};

export const loadingAnimation = () => {
  return <Lottie options={defaultOptions} height={120} width={120} />;
};
