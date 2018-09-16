import React from 'react';
import PropTypes from 'prop-types';

function InputLabel({
  containerClassName,
  textClassName,
  dataFor,
  label,
  inputClassName,
  inputName,
  placeholder,
  inputId,
  inputType,
  handleChange,
  disabled
}) {
  return (
    <div className={containerClassName}>
      <span className={`${textClassName} m-bottom-1`} data-for={dataFor}>
        {label}
      </span>
      <input
        className={inputClassName}
        name={inputName}
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
  containerClassName: PropTypes.string,
  textClassName: PropTypes.string,
  dataFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputClassName: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

InputLabel.defaultProps = {
  containerClassName: 'column start',
  textClassName: '',
  inputClassName: '',
  placeholder: ''
};

export default InputLabel;
