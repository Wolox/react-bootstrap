import { createContext } from 'react';

interface ContextValues {
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  groupDisabled: boolean;
  selectedValue: string;
}

const RadioGroupContext = createContext<ContextValues>({
  name: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleChange: () => {},
  groupDisabled: false,
  selectedValue: ''
});

export default RadioGroupContext;
