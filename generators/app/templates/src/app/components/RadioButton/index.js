import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import styles from "./styles";

const RadioButton = ({ onPress, ...props }) => (
  <button type="button" style={[styles.base, props.style]} onClick={onPress}>
    <span style={styles.textBase}>?</span>
  </button>
);

RadioButton.propTypes = {
  onPress: PropTypes.func.isRequired
};
export default Radium(RadioButton);
