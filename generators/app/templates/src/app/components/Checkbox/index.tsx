import React from 'react';

interface Props {
  checked: boolean;
  className?: string;
  disabled?: boolean;
  error?: string;
  errorClassName?: string;
  inputClassName?: string;
  label?: string;
  labelClassName?: string;
  name: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function Checkbox({
  checked,
  className = '',
  disabled = false,
  error = '',
  errorClassName = '',
  inputClassName = '',
  label = '',
  labelClassName = '',
  name,
  onChange,
  required = false
}: Props) {
  return (
    <div className={`column start ${className}`}>
      <div>
        <input
          className={inputClassName}
          type="checkbox"
          id={label}
          name={name}
          value={label}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          required={required}
        />
        {label && (
          <label className={labelClassName} htmlFor={label}>
            {label}
          </label>
        )}
      </div>
      {error && <label className={`text-error ${errorClassName}`}>{error}</label>}
    </div>
  );
}

export default Checkbox;
