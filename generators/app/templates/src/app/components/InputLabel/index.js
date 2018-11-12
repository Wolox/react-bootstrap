import React from 'react';
import PropTypes from 'prop-types';

function InputLabel({
  className,
  textClassName,
  dataFor,
  label,
  inputClassName,
  name,
  placeholder,
  inputId,
  inputType,
  handleChange,
  disabled
}) {
  return (
    <div className={`column start ${className}`}>
      <label className={`${textClassName} m-bottom-1`} htmlFor={dataFor}>
        {label}
      </label>
      <input
        className={inputClassName}
        name={name}
        placeholder={placeholder}
        id={inputId}
        type={inputType}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
}

InputLabel.propTypes = {
  className: PropTypes.string,
  textClassName: PropTypes.string,
  dataFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

InputLabel.defaultProps = {
  className: '',
  textClassName: '',
  inputClassName: '',
  placeholder: ''
};

export default InputLabel;
