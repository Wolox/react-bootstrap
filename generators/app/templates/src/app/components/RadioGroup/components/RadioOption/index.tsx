import React from 'react';

import { IRadioOption } from './interfaces';

function RadioOption({
  children,
  className,
  inputClassName,
  labelClassName,
  label,
  key,
  ...rest
}: IRadioOption) {
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
