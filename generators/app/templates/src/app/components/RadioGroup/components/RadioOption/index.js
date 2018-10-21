import React from 'react';
import PropTypes from 'prop-types';

function RadioOption({
  className,
  inputClassName,
  labelClassName,
  value,
  label,
  name,
  checked,
  disabled,
  onChange,
  children
}) {
  return (
    <div className={className}>
      <input
        type="radio"
        id={label}
        className={inputClassName}
        value={value}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {label && (
        <label htmlFor={label} className={labelClassName}>
          {label}
        </label>
      )}
      {children}
    </div>
  );
}

RadioOption.defaultProps = {
  className: '',
  inputClassName: '',
  labelClassName: '',
  label: '',
  checked: false,
  disabled: false
};

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
