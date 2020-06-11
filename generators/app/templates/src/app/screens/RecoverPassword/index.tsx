import React, { useCallback } from 'react';
import i18next from 'i18next';

import FormInput from '~components/FormInput';
import PATHS from '~components/Routes/paths';

import styles from './styles.module.scss';

function RecoverPasswordContainer() {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const handleSubmit = useCallback((event: React.FormEvent<Element>) => {
    // TODO: Implement
  }, []);

  const handleEmailChange = useCallback((event: React.FormEvent<Element>) => {
    // TODO: Implement method
  }, []);

  return (
    <div className={`column center full-width ${styles.container}`} onSubmit={handleSubmit}>
      <div className="column center m-bottom-3">
        <h1 className="m-bottom-1">{i18next.t('RecoverPassword:recoverPassword')}</h1>
        <h2>{i18next.t('RecoverPassword:recoverPasswordDescription')}</h2>
      </div>
      <form className={`full-width ${styles.formContainer}`}>
        <FormInput
          label={i18next.t('RecoverPassword:email')}
          name="email"
          inputType="text"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('RecoverPassword:emailPlaceholder') as string}
          onChange={handleEmailChange}
          className={`m-bottom-2 ${styles.sectionContainer}`}
        />
        <div className={`column center ${styles.sectionContainer}`}>
          <button type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
            {i18next.t('RecoverPassword:enter')}
          </button>
          <a href={PATHS.login}>{i18next.t('RecoverPassword:returnToLogin')}</a>
        </div>
      </form>
    </div>
  );
}

export default RecoverPasswordContainer;
