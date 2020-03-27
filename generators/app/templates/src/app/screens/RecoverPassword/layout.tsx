import React from 'react';
import i18next from 'i18next';

import FormInput from '~components/FormInput';
import PATHS from '~components/Routes/paths';

import styles from './styles.module.scss';

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onEmailChange: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function RecoverPassword({ onSubmit, onEmailChange }: Props) {
  return (
    <form className={`column center full-width m-top-8 ${styles.formContainer}`} onSubmit={onSubmit}>
      <div className="column center m-bottom-3">
        <h1 className="m-bottom-1">{i18next.t('RecoverPassword:recoverPassword')}</h1>
        <h2>{i18next.t('RecoverPassword:recoverPasswordDescription')}</h2>
      </div>
      <div className={`column m-bottom-2 ${styles.sectionContainer}`}>
        <FormInput
          label={i18next.t('RecoverPassword:email')}
          name="email"
          inputType="text"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('RecoverPassword:emailPlaceholder') as string}
          onChange={onEmailChange}
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

export default RecoverPassword;
