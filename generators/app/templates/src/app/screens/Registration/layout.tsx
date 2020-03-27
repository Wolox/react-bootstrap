import React from 'react';
import i18next from 'i18next';

import FormInput from '~components/FormInput';
import PATHS from '~components/Routes/paths';

import { FIELDS } from './constants';
import styles from './styles.module.scss';

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onInputChange: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function Registration({ onSubmit, onInputChange }: Props) {
  return (
    <form className={`column center full-width m-top-8 ${styles.formContainer}`} onSubmit={onSubmit}>
      <div className="column center m-bottom-3">
        <h1 className="m-bottom-1">{i18next.t('Registration:registration')}</h1>
        <h2>{i18next.t('Registration:registrationExplanation')}</h2>
      </div>
      <div className={`row space-between m-bottom-2 full-width ${styles.sectionContainer}`}>
        <FormInput
          className="full-width"
          label={i18next.t('Registration:name')}
          name={FIELDS.name}
          inputType="text"
          inputClassName={`m-right-1 m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Registration:namePlaceholder') as string}
          onChange={onInputChange}
        />
        <FormInput
          className="full-width"
          label={i18next.t('Registration:surname')}
          name={FIELDS.surname}
          inputType="text"
          inputClassName={`m-left-1 m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Registration:surnamePlaceholder') as string}
          onChange={onInputChange}
        />
      </div>
      <div className={`column m-bottom-2 ${styles.sectionContainer}`}>
        <FormInput
          className="full-width"
          label={i18next.t('Registration:email')}
          name={FIELDS.email}
          inputType="text"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Registration:emailPlaceholder') as string}
          onChange={onInputChange}
        />
      </div>
      <div className={`row space-between m-bottom-2 full-width ${styles.sectionContainer}`}>
        <FormInput
          className="full-width"
          label={i18next.t('Registration:password')}
          name={FIELDS.password}
          inputType="password"
          inputClassName={`m-right-1 m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Registration:passwordPlaceholder') as string}
          onChange={onInputChange}
        />
        <FormInput
          className="full-width"
          label={i18next.t('Registration:confirmPassword')}
          name={FIELDS.confirmPassword}
          inputType="password"
          inputClassName={`m-left-1 m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Registration:confirmPasswordPlaceholder') as string}
          onChange={onInputChange}
        />
      </div>
      <div className={`column center ${styles.sectionContainer}`}>
        <button type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
          {i18next.t('RecoverPassword:enter')}
        </button>
        <a href={PATHS.login}>{i18next.t('RecoverPassword:returnToLogin')}</a>
      </div>
    </form>
  );
}

export default Registration;
