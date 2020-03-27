import React from 'react';

interface Props {
  className?: string;
  disabled?: boolean;
  error?: string;
  errorClassName?: string;
  inputClassName?: string;
  isTextarea?: boolean;
  inputType: string;
  label?: string | object;
  labelClassName?: string;
  name: string;
  onBlur?: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
}

function FormInput({
  className = '',
  disabled = false,
  error = undefined,
  errorClassName = '',
  inputClassName = '',
  isTextarea = false,
  inputType,
  label = '',
  labelClassName = '',
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder = '',
  readOnly = false
}: Props) {
  const InputComponent = isTextarea ? 'textarea' : 'input';
  return (
    <div className={`column start ${className}`}>
      {label && (
        <label htmlFor={name} className={`${labelClassName} m-bottom-1`}>
          {label}
        </label>
      )}
      <InputComponent
        className={inputClassName}
        name={name}
        id={name}
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        readOnly={readOnly}
      />
      {error && <p className={errorClassName}>{error}</p>}
    </div>
  );
}

export default FormInput;
