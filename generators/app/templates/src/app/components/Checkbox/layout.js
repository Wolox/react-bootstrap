import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({
  className,
  inputClassName,
  labelClassName,
  label,
  name,
  isChecked,
  onToggle,
  disabled,
  required
}) {
  return (
    <div className={className}>
      <input
        className={inputClassName}
        type="checkbox"
        id={label}
        name={name}
        value={label}
        checked={isChecked}
        onChange={onToggle}
        disabled={disabled}
        required={required}
      />
      {label && (
        <label className={labelClassName} htmlFor={label}>
          {label}
        </label>
      )}
    </div>
  );
}

Checkbox.defaultProps = {
  className: '',
  inputClassName: '',
  labelClassName: ''
};

Checkbox.propTypes = {
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  isChecked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onToggle: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool
};

export default Checkbox;
