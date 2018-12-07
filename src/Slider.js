import React from "react";
import PropTypes from "prop-types";

export class Slider extends React.Component {
  static propTypes = {
    start: PropTypes.number,
    end: PropTypes.number,
    value: PropTypes.number,
    vertical: PropTypes.bool
  };

  static defaultProps = {
    value: 50,
    start: 0,
    end: 100,
    vertical: false
  };

  constructor() {
    super(...arguments);
    this.state = { value: this.props.value };
  }

  componentWillReceiveProps = newProps => {
    if (this.state.value !== newProps.value) {
      this.setState({ value: newProps.value });
    }
  };

  componentWillUnmount = () => {
    this.unbindEventListeners();
  };

  handleChange = e => {
    const value = this.calculateChange(e, this.container);
    this.setState({ value });
  };

  handleMouseDown = e => {
    this.handleChange(e);
    window.addEventListener("mousemove", this.handleChange);
    window.addEventListener("mouseup", this.handleMouseUp);
  };

  handleMouseUp = () => {
    this.props.onChange && this.props.onChange(this.state.value);
    this.unbindEventListeners();
  };

  unbindEventListeners = () => {
    window.removeEventListener("mousemove", this.handleChange);
    window.removeEventListener("mouseup", this.handleMouseUp);
  };

  calculateChange = (e, el) => {
    e.preventDefault();
    const { start, end, vertical } = this.props;
    const { clientHeight, clientWidth } = el;

    if (vertical) {
      const y = typeof e.pageY === "number" ? e.pageY : e.touches[0].pageY;
      const top = y - (el.getBoundingClientRect().top + window.pageYOffset);
      const percent = top * 100 / clientHeight;

      if (top < 0) {
        return start;
      } else if (top > clientHeight) {
        return end;
      }
      return end * percent / 100;
    }

    const x = typeof e.pageX === "number" ? e.pageX : e.touches[0].pageX;
    const left = x - (el.getBoundingClientRect().left + window.pageXOffset);
    const percent = left * 100 / clientWidth;

    if (left < 0) {
      return start;
    } else if (left > clientWidth) {
      return end;
    }
    return end * percent / 100;
  };

  getRef = ref => {
    this.container = ref;
  };

  render = () =>
    React.Children.only(this.props.children({
      value: this.state.value,
      onMouseDown: this.handleMouseDown,
      onTouchMove: this.handleChange,
      onTouchStart: this.handleChange,
      getRef: this.getRef
    }));
}
