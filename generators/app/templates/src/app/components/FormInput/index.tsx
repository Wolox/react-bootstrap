import React from 'react';

interface Props {
  className?: string;
  inputClassName?: string;
  errorClassName?: string;
  name?: string;
  label?: string | object | undefined;
  placeholder?: string;
  inputType?: string;
  disabled?: boolean;
  value?: string;
  error?: string | undefined;
  readOnly?: boolean;
  labelClassName?: string;
  isTextarea?: boolean;
  onFocus?: (e: React.FormEvent<Element>) => void;
  onBlur?: (e: React.FormEvent<Element>) => void;
  onChange?: (e: React.FormEvent<Element>) => void;
}

function FormInput({
  className = '',
  inputClassName = '',
  errorClassName = '',
  name = '',
  label = '',
  placeholder = '',
  inputType = '',
  onFocus,
  onBlur,
  onChange: handleOnChange,
  disabled = false,
  error = undefined,
  readOnly = false,
  labelClassName = '',
  isTextarea = false
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (handleOnChange) {
      handleOnChange(e);
    }
  };

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
        onChange={handleChange}
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
