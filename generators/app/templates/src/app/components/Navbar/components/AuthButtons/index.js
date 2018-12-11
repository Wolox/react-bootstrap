import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles.module.scss';

function AuthButtons({ isLoggedIn, logoutAction, loginAction, registerAction }) {
  return (
    <div className={styles.logButtons}>
      {isLoggedIn ? (
        <button className={styles.button} onClick={logoutAction} type="button">
          Log Out {/* TODO add i18n here*/}
        </button>
      ) : (
        <Fragment>
          <button type="button" className={`${styles.button} ${styles.withBorder}`} onClick={loginAction}>
            Log In {/* TODO add i18n here*/}
          </button>
          <button className={styles.button} onClick={registerAction} type="button">
            Register {/* TODO add i18n here*/}
          </button>
        </Fragment>
      )}
    </div>
  );
}

AuthButtons.propTypes = {
  loginAction: PropTypes.func.isRequired,
  logoutAction: PropTypes.func.isRequired,
  registerAction: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool
};

export default AuthButtons;
