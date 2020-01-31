import React, { useState } from 'react';

interface Props {
  checked?: boolean;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  label?: string | undefined;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (event: React.FormEvent<Element>) => void;
}

function CheckboxContainer({
  checked = false,
  className = '',
  inputClassName = '',
  labelClassName = '',
  label = '',
  name = '',
  disabled = false,
  required = false,
  onChange
}: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleToggle = (event: React.FormEvent<Element>) => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={className}>
      <input
        className={inputClassName}
        type="checkbox"
        id={label}
        name={name}
        value={label}
        checked={isChecked}
        onChange={handleToggle}
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

export default CheckboxContainer;
