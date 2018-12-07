import React from "react";
import cxs from "cxs";
import { Slider } from "../Slider";

const defaultStyles = {
  container: {
    position: "relative",
    margin: "2em 0",
    width: "2px",
    height: "100px"
  },
  track: {
    background: "#ddd",
    padding: "0 2px",
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "100px"
  },

  knob: {
    position: "absolute",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    left: "50%",
    transform: "translate(-50%, -11px )",
    backgroundColor: "rgb(248, 248, 248)",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
  }
};

const defaultConfig = {
  start: 0,
  end: 100,
  value: 50
};

const defaultFunc = value => {
  console.log(value);
};

export const VerticalSlider = ({
  handleChange = defaultFunc,
  config = defaultConfig,
  styles = defaultStyles,
  ...props
}) => {
  return (
    <Slider vertical {...config} onChange={handleChange}>
      {({ onMouseDown, onTouchMove, onTouchStart, value, getRef }) => {
        return (
          <div className={cxs(styles.container)} {...props}>
            <div
              className={cxs(styles.track)}
              ref={getRef}
              onMouseDown={onMouseDown}
              onTouchMove={onTouchMove}
              onTouchStart={onTouchStart}
            >
              <div
                className={cxs(styles.knob)}
                style={{
                  top: `${value * 100 / config.end}%`
                }}
              />
            </div>
          </div>
        );
      }}
    </Slider>
  );
};
