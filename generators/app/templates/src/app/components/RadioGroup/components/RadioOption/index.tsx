import React from 'react';

interface Props {
  checked?: boolean;
  children: React.FunctionComponent;
  className?: string;
  disabled?: boolean;
  key: number;
  inputClassName?: string;
  labelClassName?: string;
  label?: string | undefined;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  [rest: string]: any; 
}

function RadioOption({ children, className, inputClassName, labelClassName, label, key, ...rest }: Props) {
  return (
    <div key={key} className={className}>
      <input type="radio" id={label} className={inputClassName} {...rest} />
      {label && (
        <label htmlFor={label} className={labelClassName}>
          {label}
        </label>
      )}
      {children}
    </div>
  );
}

export default RadioOption;

