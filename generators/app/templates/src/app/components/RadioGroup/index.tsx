import React, { useState } from 'react';

import RadioOption from './components/RadioOption';

interface Props {
  disabled?: boolean,
  className?: string;
  selectedValue?: string;
  name?: string;
  options?: any[];
  onChange?: (event: React.FormEvent<Element>) => void;
  [rest: string]: any; 
}

function RadioGroup({ disabled = false, selectedValue: selectedValueProp = '', className = '', name = '', options = [], onChange, ...rest }: Props) {
  const [selectedValue, setSelectedValue] = useState<string>(selectedValueProp);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={className}>
      {options.map((childProps: any, index: number) =>
        <RadioOption
          {...childProps}
          key={index}
          name={name}
          onChange={handleChange}
          checked={selectedValue === childProps.value}
          disabled={disabled || childProps.disabled}
        />)}
    </div>
    );
}

export default RadioGroup;
