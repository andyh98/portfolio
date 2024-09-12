import React from 'react';
import Lottie from "lottie-react";
import Circle from "./circle.json";

const BackgroundAnimation = () => (
  <div>
    <Lottie loop={false} animationData={Circle}></Lottie>
  </div>
);

export default BackgroundAnimation;