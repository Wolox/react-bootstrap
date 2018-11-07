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
        id={label} // eslint-disable-line react/forbid-dom-props
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
  onToggle: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  inputClassName: PropTypes.string,
  isChecked: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool
};

export default Checkbox;
