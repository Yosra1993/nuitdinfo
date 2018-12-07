import React from "react";
import { HorizontalSlider } from "./HorizontalSlider";

export const LightnessSlider = ({ h, s, l, ...props }) => {
  const styles = {
    container: {
      position: "relative",
      margin: "1em 0"
    },
    track: {
      background: `linear-gradient(
      to right,
      hsla(${h}, ${s}%, 0%, 1),
      hsla(${h}, ${s}%, 90%, 1)
    )`,
      padding: "0 2px",
      position: "relative",
      width: "50%",
      height: "2px",
      marginLeft:"5px",
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
