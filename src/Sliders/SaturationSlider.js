import React from "react";
import { HorizontalSlider } from "./HorizontalSlider";

export const SaturationSlider = ({ h, s, l, ...props }) => {
  const styles = {
    container: {
      position: "relative",
      margin: "1em 0"
    },
    track: {
      background: `linear-gradient(
      to right,
      hsla(${h},0%, ${l}%, 1),
      hsla(${h},100%, ${l}%, 1)
    )`,
      padding: "0 2px",
      position: "relative",
      width: "50%",
      height: "2px",
      marginLeft:"10px",
      borderRadius: "100px"
    },

    knob: {
      position: "absolute",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      transform: "translate(-11px, -7px)",
      backgroundColor: "rgb(248, 248, 248)",
      boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
    }
  };
  return <HorizontalSlider styles={styles} {...props} />;
};
