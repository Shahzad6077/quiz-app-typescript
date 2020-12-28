import React from "react";

const useAnimations = () => {
  const onFadeMove = (ref, move, config) => {
    const starting = config?.isStart ? 100 : 20;

    let tranlateValueFor1stand3rd;
    let position;
    if (["right", "left"].includes(move)) {
      position = "X";
    } else if (["up", "down"].includes(move)) {
      position = "Y";
    }
    if (["right", "up"].includes(move)) {
      tranlateValueFor1stand3rd = [
        move === "up" ? `-${starting}%` : "-100%",
        "20%",
      ];
    } else if (["left", "down"].includes(move)) {
      tranlateValueFor1stand3rd = [
        move === "down" ? `${starting}%` : "100%",
        "-20%",
      ];
    }

    console.log(position);
    const frames = [
      {
        transform: `translate${position}(${tranlateValueFor1stand3rd[0]})`,
        opacity: 0,
      },
      { transform: `translate${position}(0%)`, opacity: 1 },
      // {
      //   transform: `translate${position}(${tranlateValueFor1stand3rd[1]})`,
      //   opacity: 1,
      // },
      { transform: `translate${position}(0%)`, opacity: 1 },
    ];
    const timingProps = {
      duration: 1600,
      easing: "cubic-bezier(0.42, 0, 0.58, 1)",
      // easing: "linear",
    };
    ref.animate(frames, timingProps).onfinish = (v) => {
      ref.style.opacity = 1;
    };
  };
  return { onFadeMove };
};
export default useAnimations;
