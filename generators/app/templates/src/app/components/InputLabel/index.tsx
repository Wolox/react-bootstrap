import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  dataFor: string;
  handleChange: () => void;
  inputId: string;
  inputType: string;
  label: string;
  name: string;
  className?: string;
  disabled?: boolean;
  inputClassName?: string;
  placeholder?: string;
  textClassName?: string;
}

function InputLabel({
  className = '',
  textClassName = '',
  dataFor,
  label,
  inputClassName = '',
  name,
  placeholder = '',
  inputId,
  inputType,
  handleChange,
  disabled
}: Props) {
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

export default InputLabel;
