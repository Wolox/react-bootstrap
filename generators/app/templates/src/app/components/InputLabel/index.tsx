import React from 'react';

interface Props {
  dataFor: string;
  handleChange: (event: React.FormEvent<Element>) => void;
  inputId: string;
  inputType: string;
  label: string;
  name: string;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
  placeholder?: string;
  textClassName?: string;
}

function InputLabel({
  dataFor,
  label,
  name,
  inputId,
  inputType,
  handleChange,
  disabled,
  className = '',
  inputClassName = '',
  placeholder = '',
  textClassName = ''
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
