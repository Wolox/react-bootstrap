import React, { useState } from 'react';

import RadioGroupContext from '~components/RadioGroup/context';

export interface Props {
  disabled?: boolean;
  className?: string;
  name: string;
  children: React.ReactNode[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  initialValue: string;
}

function RadioGroup({
  disabled = false,
  className = '',
  name,
  children,
  onChange,
  initialValue = ''
}: Props) {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={className}>
      <RadioGroupContext.Provider value={{ selectedValue, handleChange, name, groupDisabled: disabled }}>
        {children}
      </RadioGroupContext.Provider>
    </div>
  );
}

export default RadioGroup;
