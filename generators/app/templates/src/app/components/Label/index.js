import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import styles from "./styles";

const variants = [
  "small",
  "big",
  "white",
  "gray",
  "black",
  "title",
  "semibold",
  "bold",
  "onHover",
  "left",
  "right"
];

function Label({ children, ...props }) {
  const style = variants
    .filter(variant => props[variant])
    .map(variant => styles[variant]);

  return <span style={[styles.base, style, props.style]}>{children}</span>;
}

Label.propTypes = {
  strong: PropTypes.bool
};

export default Radium(Label);
