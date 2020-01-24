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
  dataFor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string,
  textClassName: PropTypes.string
};

InputLabel.defaultProps = {
  className: '',
  inputClassName: '',
  placeholder: '',
  textClassName: ''
};

export default InputLabel;
