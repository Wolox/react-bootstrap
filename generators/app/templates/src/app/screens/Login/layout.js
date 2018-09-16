import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';

import InputLabel from '../../components/InputLabel';

import { FIELDS } from './constants';
import styles from './styles.scss';

function Login({ handleChange, handleSubmit }) {
  return (
    <div className={`column center middle full-width ${styles.loginContainer}`}>
      <form className={`column center space-between ${styles.formContainer}`} onSubmit={handleSubmit}>
        <div className="column center full-width">
          <h2 className="m-bottom-1">{i18next.t('Login:login')}</h2>
          <h2>{i18next.t('Login:loginExplanation')}</h2>
        </div>
        <div className="column full-width">
          <InputLabel
            label={i18next.t('Login:email')}
            inputName={FIELDS.email}
            inputId={FIELDS.email}
            dataFor={FIELDS.email}
            inputType="text"
            inputClassName={`m-bottom-2 full-width ${styles.input}`}
            placeholder={i18next.t('Login:emailPlaceholder')}
            onChange={handleChange}
          />
          <InputLabel
            label={i18next.t('Login:password')}
            inputName={FIELDS.password}
            inputId={FIELDS.password}
            dataFor={FIELDS.password}
            inputType="password"
            inputClassName={`m-bottom-2 full-width ${styles.input}`}
            placeholder={i18next.t('Login:passwordPlaceholder')}
            onChange={handleChange}
          />
        </div>
        <div className="column center full-width">
          <button type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
            {i18next.t('Login:enter')}
          </button>
          <a href="/forgotPassword">{i18next.t('Login:forgotPassword')}</a>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Login;
