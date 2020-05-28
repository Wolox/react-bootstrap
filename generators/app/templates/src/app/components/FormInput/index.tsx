import React from 'react';

import styles from './styles.module.scss';

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
  touched?: boolean;
  submitCount?: number;
}

function FormInput({
  className = '',
  disabled = false,
  error = '',
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
  readOnly = false,
  touched,
  submitCount
}: Props) {
  const InputComponent = isTextarea ? 'textarea' : 'input';
  const showError =
    (touched === undefined || touched) && error && (submitCount === undefined || submitCount > 0);
  return (
    <div className={`column start ${className}`}>
      {label && (
        <label htmlFor={name} className={`${labelClassName} m-bottom-1`}>
          {label}
        </label>
      )}
      <InputComponent
        className={`${inputClassName} ${styles.input} ${showError ? styles.error : ''}`}
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
      <span className={`${errorClassName} ${styles.errorText} ${showError ? styles.visible : ''}`}>
        {error}
      </span>
    </div>
  );
}

export default FormInput;
