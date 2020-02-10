import React from 'react';

interface Props {
  checked: boolean;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  label?: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

function Checkbox({
  checked,
  name,
  onChange,
  className = '',
  inputClassName = '',
  labelClassName = '',
  label = '',
  disabled = false,
  required = false
}: Props) {
  return (
    <div className={className}>
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
  );
}

export default Checkbox;
