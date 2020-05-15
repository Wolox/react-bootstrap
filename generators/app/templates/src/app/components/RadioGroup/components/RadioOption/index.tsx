import React, { useContext } from 'react';

import RadioGroupContext from '~components/RadioGroup/context';

export interface RadioOptionProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  inputClassName?: string;
  labelClassName?: string;
  label: string;
  id: string;
}

function RadioOption({
  children,
  className = '',
  inputClassName = '',
  labelClassName = '',
  label,
  id,
  disabled = false,
  ...props
}: RadioOptionProps) {
  const { name, handleChange, groupDisabled, selectedValue } = useContext(RadioGroupContext);
  return (
    <div className={className}>
      <input
        type="radio"
        id={id}
        name={name}
        className={inputClassName}
        disabled={disabled || groupDisabled}
        value={id}
        onChange={handleChange}
        checked={selectedValue === id}
        data-testid={`${name}-${id}`}
        {...props}
      />
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default RadioOption;
