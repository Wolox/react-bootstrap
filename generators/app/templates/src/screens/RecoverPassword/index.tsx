import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import FormInput from 'components/FormInput';
import PATHS from 'components/Routes/paths';

import styles from './styles.module.scss';

function RecoverPasswordContainer() {
  const { t } = useTranslation('RecoverPassword');

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
        <h1 className="m-bottom-1">{t('recoverPassword')}</h1>
        <h2>{t('recoverPasswordDescription')}</h2>
      </div>
      <form className={`full-width ${styles.formContainer}`}>
        <FormInput
          label={t('email')}
          name="email"
          inputType="text"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={t('emailPlaceholder') as string}
          onChange={handleEmailChange}
          className={`m-bottom-2 ${styles.sectionContainer}`}
        />
        <div className={`column center ${styles.sectionContainer}`}>
          <button type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
            {t('enter')}
          </button>
          <a href={PATHS.login}>{t('returnToLogin')}</a>
        </div>
      </form>
    </div>
  );
}

export default RecoverPasswordContainer;
