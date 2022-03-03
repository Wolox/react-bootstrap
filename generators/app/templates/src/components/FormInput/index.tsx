import { ReactNode, FormEvent } from 'react';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  disabled?: boolean;
  error?: string;
  errorClassName?: string;
  inputClassName?: string;
  isTextarea?: boolean;
  inputType: string;
  label?: ReactNode;
  labelClassName?: string;
  name: string;
  onBlur?: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  touched?: boolean;
  submitCount?: number;
  inputRef?: any;
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
  submitCount,
  inputRef
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
        {...inputRef}
      />
      <span
        id={`${name}-error`}
        role="alert"
        aria-hidden={!showError}
        className={`${errorClassName} ${styles.errorText} ${showError ? styles.visible : ''}`}
      >
        {error}
      </span>
    </div>
  );
}

export default FormInput;
