import React from 'react';
import i18next from 'i18next';

import FormInput from '~components/FormInput';
import PATHS from '~components/Routes/paths';
import { withSpinner } from '~components/Spinner';
import { LoginError } from '~services/AuthServices';
import { Nullable } from '~utils/types';
import { Error } from '~app/hooks/useRequest';

import { FIELDS } from './constants';
import styles from './styles.module.scss';

interface Props {
  onEmailChange: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onLogin: (event: React.FormEvent<HTMLFormElement>) => void;
  onPasswordChange: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  loading?: boolean;
  loginError?: Nullable<Error<LoginError>>;
}

function Login({ onEmailChange, onPasswordChange, onLogin, loginError, loading }: Props) {
  const isError = loginError?.errorData?.message;
  return (
    <form className={`column center full-width m-top-8 ${styles.formContainer}`} onSubmit={onLogin}>
      <div className="column center m-bottom-3">
        <h1 className="m-bottom-1">{i18next.t('Login:login')}</h1>
        <h2>{i18next.t('Login:loginExplanation')}</h2>
      </div>
      <div className={`column m-bottom-2 ${styles.sectionContainer}`}>
        <FormInput
          label={i18next.t('Login:email')}
          name={FIELDS.email}
          inputType="text"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Login:emailPlaceholder') as string}
          onChange={onEmailChange}
          disabled={loading}
        />
        <FormInput
          label={i18next.t('Login:password')}
          name={FIELDS.password}
          inputType="password"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Login:passwordPlaceholder') as string}
          onChange={onPasswordChange}
          disabled={loading}
        />
      </div>
      <div className={`column center ${styles.sectionContainer}`}>
        <button disabled={loading} type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
          {i18next.t('Login:enter')}
        </button>
        <span
          className={`row center middle full-width m-top-1 m-bottom-1
          ${isError ? styles.errorMessage : styles.hidden}`}
        >
          {i18next.t(`Login:${loginError?.errorData?.message}`)}
        </span>
        <a href={PATHS.recoverPassword}>{i18next.t('Login:forgotPassword')}</a>
        <a href={PATHS.registration}>{i18next.t('Login:createAccount')}</a>
      </div>
    </form>
  );
}

export default withSpinner({ classNameContainer: styles.loading })(Login);
