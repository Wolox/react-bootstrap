import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import Label from "../Label";

import styles from "./styles";

function TextInput({
  icon,
  placeholder,
  meta,
  input,
  type,
  expanded,
  shouldDisplayErrors,
  onChangeText,
  shouldDisplayDescription,
  style
}) {
  const displayErrors =
    shouldDisplayErrors &&
    !meta.active &&
    meta.invalid &&
    ((meta.visited && !meta.pristine) || meta.submitFailed);

  const wrapOnChange = val => input.onChange(onChangeText(val));
  return (
    <div style={styles.container}>
      <div
        style={[styles.inputContainer, expanded ? styles.expandedInput : null]}
      >
        {icon ? <img src={icon} alt={placeholder} style={styles.icon} /> : null}
        <div
          style={[
            styles.textInputWrapper,
            shouldDisplayDescription ? styles.textInputWrapperWithDesc : null
          ]}
        >
          {shouldDisplayDescription &&
          input.value && (
            <Label light small black>
              {placeholder}
            </Label>
          )}
          <input
            type={type}
            name={input.name}
            placeholder={placeholder}
            style={[
              styles.input,
              shouldDisplayDescription ? styles.inputWithDesc : null,
              style
            ]}
            onChange={wrapOnChange}
            onBlur={input.onBlur}
            onFocus={input.onFocus}
            value={input.value}
          />
        </div>
      </div>
      {displayErrors &&
      meta.error && (
        <div style={styles.errorsContainer}>
          <Label small error>
            {meta.error}
          </Label>
        </div>
      )}
    </div>
  );
}

TextInput.defaultProps = {
  type: "text",
  shouldDisplayErrors: true,
  onChangeText: val => val
};

TextInput.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    error: PropTypes.string,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    visited: PropTypes.bool.isRequired,
    submitFailed: PropTypes.bool
  }).isRequired,
  expanded: PropTypes.bool,
  onChangeText: PropTypes.func,
  shouldDisplayErrors: PropTypes.bool.isRequired,
  shouldDisplayDescription: PropTypes.bool
};

export default Radium(TextInput);
