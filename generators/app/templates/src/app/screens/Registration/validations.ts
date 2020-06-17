import { required, email } from '~utils/inputValidations';

interface Validations {
  [key: string]: ((val: any) => any)[];
}

const validations: Validations = {
  firstName: [required('Requerido')],
  email: [required('Requerido'), email('Email incorrecto')]
};

export const validate = (values: any) => {
  const errors: { [key: string]: string } = {};
  Object.keys(values).forEach((key: string) => {
    validations[key]?.forEach((validation: (arg: string) => string) => {
      const valResult = validation(values[key]);
      if (valResult) {
        errors[key] = valResult;
      }
    });
  });
  return errors;
};
