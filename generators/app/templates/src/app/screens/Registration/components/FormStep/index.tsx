import React from 'react';

import FormInput from '~components/FormInput';

import styles from './styles.module.scss';

interface Input {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

interface Props {
  id: string;
  className: string;
  name: string;
  fields: Input[];
  values: any;
  errors: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function FormStep({ className, fields, values, handleChange, errors }: Props) {
  return (
    <div className={className}>
      {fields.map(({ name, label, type, placeholder }) => (
        <FormInput
          className={styles.inputContainer}
          inputClassName={styles.input}
          key={name}
          name={name}
          label={label}
          value={values[name]}
          placeholder={placeholder}
          inputType={type}
          onChange={handleChange}
          error={errors[name]}
        />
      ))}
    </div>
  );
}

export default FormStep;
