import React, { useCallback } from 'react';
import i18next from 'i18next';

import FormInput from '~components/FormInput';
import PATHS from '~components/Routes/paths';
import { stringArrayToObject } from '~utils/array';

import styles from './styles.module.scss';

const FIELDS = stringArrayToObject(['name', 'surname', 'email', 'password', 'confirmPassword']);

function RegistrationContainer() {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const handleSubmit = useCallback((event: React.FormEvent<Element>) => {
    // TODO: Implement
  }, []);

  const handleInputChange = useCallback((event: React.FormEvent<Element>) => {
    // TODO: Implement method
  }, []);

  return (
    <form className={`column center full-width ${styles.formContainer}`} onSubmit={handleSubmit}>
      <div className="column center m-bottom-3">
        <h1 className="m-bottom-1">{i18next.t('Registration:registration')}</h1>
        <h2>{i18next.t('Registration:registrationExplanation')}</h2>
      </div>
      <div className={`row space-between ${styles.sectionContainer}`}>
        <FormInput
          className={styles.inputContainer}
          label={i18next.t('Registration:name')}
          name={FIELDS.name}
          inputType="text"
          inputClassName={styles.input}
          placeholder={i18next.t('Registration:namePlaceholder') as string}
          onChange={handleInputChange}
        />
        <FormInput
          className="full-width m-left-1"
          label={i18next.t('Registration:surname')}
          name={FIELDS.surname}
          inputType="text"
          inputClassName={styles.input}
          placeholder={i18next.t('Registration:surnamePlaceholder') as string}
          onChange={handleInputChange}
        />
      </div>
      <div className={`row ${styles.sectionContainer}`}>
        <FormInput
          className={styles.inputContainer}
          label={i18next.t('Registration:email')}
          name={FIELDS.email}
          inputType="text"
          inputClassName={styles.input}
          placeholder={i18next.t('Registration:emailPlaceholder') as string}
          onChange={handleInputChange}
        />
      </div>
      <div className={`row space-between ${styles.sectionContainer}`}>
        <FormInput
          className={styles.inputContainer}
          label={i18next.t('Registration:password')}
          name={FIELDS.password}
          inputType="password"
          inputClassName={styles.input}
          placeholder={i18next.t('Registration:passwordPlaceholder') as string}
          onChange={handleInputChange}
        />
        <FormInput
          className="full-width m-left-1"
          label={i18next.t('Registration:confirmPassword')}
          name={FIELDS.confirmPassword}
          inputType="password"
          inputClassName={styles.input}
          placeholder={i18next.t('Registration:confirmPasswordPlaceholder') as string}
          onChange={handleInputChange}
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

export default RegistrationContainer;
