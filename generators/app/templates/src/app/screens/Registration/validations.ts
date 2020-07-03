import i18next from 'i18next';

import { required, email } from '~utils/inputValidations';

interface Validations {
  [key: string]: ((val: string | undefined) => string | undefined)[];
}

const validations: Validations = {
  firstName: [required(i18next.t('Registration:required'))],
  email: [required(i18next.t('Registration:required')), email(i18next.t('Registration:emailError'))]
};

export const validate = (values: UserData) =>
  Object.keys(values).reduce((acum, key) => {
    let error: string | undefined = '';
    for (const val of validations[key] || []) {
      error = val(values[key as keyof UserData]);
      if (error) {
        break;
      }
    }
    return { ...acum, [key]: error };
  }, {});
