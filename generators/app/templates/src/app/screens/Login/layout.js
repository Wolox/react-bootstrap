import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';

import InputLabel from '../../components/InputLabel';
import Routes from '../../../constants/routes';
import { FIELDS } from './constants';
import styles from './styles.module.scss';

function Login({ handleEmailChange, handlePasswordChange, handleLogin }) {
  return (
    <form className={`column center full-width m-top-8 ${styles.formContainer}`} onSubmit={handleLogin}>
      <div className="column center m-bottom-3">
        <h2 className="m-bottom-1">{t('Login:login')}</h2>
        <h3>{t('Login:loginExplanation')}</h3>
      </div>
      <div className={`column m-bottom-2 ${styles.sectionContainer}`}>
        <InputLabel
          label={t('Login:email')}
          name={FIELDS.email}
          inputId={FIELDS.email}
          dataFor={FIELDS.email}
          inputType="text"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={t('Login:emailPlaceholder')}
          onChange={handleEmailChange}
        />
        <InputLabel
          label={t('Login:password')}
          name={FIELDS.password}
          inputId={FIELDS.password}
          dataFor={FIELDS.password}
          inputType="password"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={t('Login:passwordPlaceholder')}
          onChange={handlePasswordChange}
        />
      </div>
      <div className={`column center ${styles.sectionContainer}`}>
        <button type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
          {t('Login:enter')}
        </button>
        <a href={Routes.RECOVER_PASSWORD}>{t('Login:forgotPassword')}</a>
      </div>
    </form>
  );
}

Login.propTypes = {
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired
};

export default Login;