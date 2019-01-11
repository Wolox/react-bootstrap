import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles.module.scss';

function AuthButtons({ isLoggedIn, onLogin, onLogout, registerAction, authStyle, authButtonStyle }) {
  return (
    <div className={`row ${styles.authButtons} ${authStyle}`}>
      {isLoggedIn ? (
        <button className={`${styles.button} ${authButtonStyle}`} onClick={onLogout} type="button">
          Log Out {/* TODO add i18n here*/}
        </button>
      ) : (
        <Fragment>
          <button
            type="button"
            className={`${styles.button} ${styles.withBorder} ${authButtonStyle}`}
            onClick={onLogin}
          >
            Log In {/* TODO add i18n here*/}
          </button>
          <button className={`${styles.button} ${authButtonStyle}`} onClick={registerAction} type="button">
            Register {/* TODO add i18n here*/}
          </button>
        </Fragment>
      )}
    </div>
  );
}

AuthButtons.defaultProps = {
  authButtonStyle: '',
  authStyle: ''
};

AuthButtons.propTypes = {
  registerAction: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  authButtonStyle: PropTypes.string,
  authStyle: PropTypes.string,
  isLoggedIn: PropTypes.bool
};

export default AuthButtons;
