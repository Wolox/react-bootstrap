import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import Touchable from "../Touchable";
import Label from "../Label";

import styles from "./styles";

const Checkbox = ({ onChange, label, value }) => (
  <div style={styles.container}>
    <Touchable
      style={value ? styles.activeButton : styles.inactiveButton}
      onClick={onChange}
    />
    <Touchable onClick={onChange}>
      <Label black>{label}</Label>
    </Touchable>
  </div>
);

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired
};

export default Radium(Checkbox);
