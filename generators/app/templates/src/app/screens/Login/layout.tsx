import React from 'react';
import i18next from 'i18next';

import InputLabel from '~components/InputLabel';
import Routes from '~constants/routes';

import { FIELDS } from './constants';
import styles from './styles.module.scss';

interface Props {
  onEmailChange: (event: React.FormEvent<Element>) => void;
  onLogin: (event: React.FormEvent<HTMLFormElement>) => void;
  onPasswordChange: (event: React.FormEvent<Element>) => void;
}

function Login({ onEmailChange, onPasswordChange, onLogin }: Props) {
  return (
    <form className={`column center full-width m-top-8 ${styles.formContainer}`} onSubmit={onLogin}>
      <div className="column center m-bottom-3">
        <h2 className="m-bottom-1">{i18next.t('Login:login')}</h2>
        <h3>{i18next.t('Login:loginExplanation')}</h3>
      </div>
      <div className={`column m-bottom-2 ${styles.sectionContainer}`}>
        <InputLabel
          label={i18next.t('Login:email')}
          name={FIELDS.email}
          inputId={FIELDS.email}
          dataFor={FIELDS.email}
          inputType="text"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Login:emailPlaceholder') as string}
          handleChange={onEmailChange}
        />
        <InputLabel
          label={i18next.t('Login:password')}
          name={FIELDS.password}
          inputId={FIELDS.password}
          dataFor={FIELDS.password}
          inputType="password"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Login:passwordPlaceholder') as string}
          handleChange={onPasswordChange}
        />
      </div>
      <div className={`column center ${styles.sectionContainer}`}>
        <button type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
          {i18next.t('Login:enter')}
        </button>
        <a href={Routes.RECOVER_PASSWORD}>{i18next.t('Login:forgotPassword')}</a>
      </div>
    </form>
  );
}

export default Login;
