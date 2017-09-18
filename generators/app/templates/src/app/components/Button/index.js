import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Radium from "radium";

import styles from "./styles";

const variants = ["small", "big", "disabled"];

function Button({
  onPress,
  children,
  link,
  type,
  disabled,
  containerSetter,
  ...props
}) {
  const style = variants
    .filter(variant => props[variant])
    .map(variant => styles[variant]);
  const textStyle = variants
    .filter(variant => props[variant])
    .map(variant => styles[`text${variant}`]);

  const content =
    typeof children === "string" ? (
      <span
        style={[styles.textbase, textStyle, props.textstyle]}
        ref={containerSetter}
      >
        {children}
      </span>
    ) : (
      children
    );

  return link ? (
    <div style={[styles.baseLink, style, props.style]}>
      <Link to={link} target={props.target} style={styles.linkContent}>
        {content}
      </Link>
    </div>
  ) : (
    <button
      type={type}
      style={[styles.base, style, props.style]}
      disabled={disabled}
      onClick={onPress}
    >
      {content}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  disabled: false
};

Button.propTypes = {
  link: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  textstyle: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  containerSetter: PropTypes.func,
  target: PropTypes.string
};

export default Radium(Button);
