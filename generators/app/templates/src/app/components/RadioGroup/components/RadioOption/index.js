import React from 'react';
import PropTypes from 'prop-types';

function RadioOption({ className, inputClassName, labelClassName, label, children, ...rest }) {
  return (
    <div className={className}>
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
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  children: PropTypes.node
};

export default RadioOption;
