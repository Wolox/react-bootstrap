import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles.module.scss';

function AuthButtons({ isLoggedIn, onLogin, onLogout, registerAction }) {
  return (
    <div className="row">
      {isLoggedIn ? (
        <button className={styles.button} onClick={onLogout} type="button">
          Log Out {/* TODO add i18n here*/}
        </button>
      ) : (
        <Fragment>
          <button type="button" className={`${styles.button} ${styles.withBorder}`} onClick={onLogin}>
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
  registerAction: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool
};

export default AuthButtons;
