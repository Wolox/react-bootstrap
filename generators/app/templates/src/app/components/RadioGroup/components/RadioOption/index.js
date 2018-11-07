import React from 'react';
import PropTypes from 'prop-types';

function RadioOption({ className, inputClassName, labelClassName, label, children, ...rest }) {
  return (
    <div className={className}>
      {/* eslint-disable-next-line react/forbid-dom-props */}
      <input type="radio" id={label} className={inputClassName} {...rest} />
      {label && (
        <label htmlFor={label} className={labelClassName}>
          {label}
        </label>
      )}
      {children}
    </div>
  );
}

RadioOption.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  inputClassName: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
};

export default RadioOption;
