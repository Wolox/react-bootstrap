import React from "react";
import PropTypes from "prop-types";
import Radium from "radium";

import styles from "./styles";

/* eslint-disable jsx-a11y/interactive-supports-focus */
function Touchable({ children, style, onClick, containerSetter, ...props }) {
  return (
    <div
      {...props}
      role="button"
      onClick={onClick}
      style={[styles.container, style]}
      ref={containerSetter}
    >
      {children}
    </div>
  );
}
/* eslint-enable jsx-a11y/interactive-supports-focus */

Touchable.propTypes = {
  onClick: PropTypes.func.isRequired,
  containerSetter: PropTypes.func
};

export default Radium(Touchable);
