import i18next from 'i18next';

import { required, email } from '~utils/inputValidations';

interface Validations {
  [key: string]: ((val: any) => any)[];
}

const validations: Validations = {
  firstName: [required(i18next.t('Registration:required'))],
  email: [required(i18next.t('Registration:required')), email(i18next.t('Registration:emailError'))]
};

export const validate = (values: { [key: string]: string }) =>
  Object.keys(values).reduce((acum, key) => {
    let error = '';
    for (const val of validations[key] || []) {
      if ((error = val(values[key]))) {
        break;
      }
    }
    return { ...acum, [key]: error };
  }, {});
