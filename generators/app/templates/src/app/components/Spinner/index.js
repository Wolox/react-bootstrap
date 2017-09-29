import React from "react";
import PropTypes from "prop-types";
import Radium from "radium";

import { darkestblue } from "../../../utils/colors";

import styles from "./styles";

function withSpinner(WrappedComponent) {
  function Spinner(props) {
    return props.isLoading ? (
      <div style={styles.container}>
        <div style={styles.loader} />
      </div>
    ) : (
      <WrappedComponent {...props} />
    );
  }

  Spinner.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    spinnerColor: PropTypes.string
  };

  return Spinner;
}

export default Radium(withSpinner);
