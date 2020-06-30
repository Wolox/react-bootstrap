import i18next from 'i18next';

import { Fields } from '~utils/types';

const personalData = {
  id: 'personalData',
  fields: [
    {
      name: 'firstName',
      label: i18next.t('Registration:firstName'),
      type: 'text',
      placeholder: i18next.t('Registration:firstNamePlaceholder'),
      required: true
    },
    {
      name: 'lastName',
      label: i18next.t('Registration:lastName'),
      type: 'text',
      placeholder: i18next.t('Registration:lastNamePlaceholder'),
      required: true
    }
  ]
};

const address = {
  id: 'address',
  fields: [
    {
      name: 'streetAndNumber',
      label: i18next.t('Registration:streetAndNumber'),
      type: 'text',
      placeholder: i18next.t('Registration:streetAndNumberPlaceholder')
    },
    {
      name: 'postCode',
      label: i18next.t('Registration:postCode'),
      type: 'text',
      placeholder: i18next.t('Registration:postCodePlaceholder')
    },
    {
      name: 'city',
      label: i18next.t('Registration:city'),
      type: 'text',
      placeholder: i18next.t('Registration:cityPlaceholder')
    }
  ]
};

const credentials = {
  id: 'credentials',
  fields: [
    {
      name: 'email',
      label: i18next.t('Registration:email'),
      type: 'email',
      placeholder: i18next.t('Registration:emailPlaceholder'),
      required: true
    },
    {
      name: 'password',
      label: i18next.t('Registration:password'),
      type: 'password',
      placeholder: i18next.t('Registration:passwordPlaceholder'),
      required: true
    },
    {
      name: 'confirmPassword',
      label: i18next.t('Registration:confirmPassword'),
      type: 'password',
      placeholder: i18next.t('Registration:confirmPasswordPlaceholder'),
      required: true
    }
  ]
};

export const steps: any[] = [personalData, address, credentials];

export const initialValues = steps.reduce(
  (acum, step) => ({
    ...acum,
    ...step.fields.reduce((acu: Fields, field: Fields) => ({ ...acu, [field.name]: field.initialValue }), {})
  }),
  {}
);
