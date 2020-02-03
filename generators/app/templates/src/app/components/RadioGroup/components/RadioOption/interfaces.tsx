import React from 'react';

export interface IRadioOption {
  checked?: boolean;
  children: React.FunctionComponent;
  className?: string;
  disabled?: boolean;
  key: string | number;
  inputClassName?: string;
  labelClassName?: string;
  label?: string | undefined;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  [rest: string]: any; 
}
