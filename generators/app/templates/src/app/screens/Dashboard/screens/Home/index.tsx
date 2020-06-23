import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import i18next from 'i18next';

import withProvider from '~components/ProviderWrapper';
import PATHS from '~components/Routes/paths';
import { actionCreators as authActions } from '~contexts/UserContext/reducer';
import { useDispatch as useUserDispatch } from '~contexts/UserContext';
import { logout, removeCurrentUser } from '~services/AuthServices';
import { useLazyRequest } from '~app/hooks/useRequest';

import logo from './assets/logo.svg';
import styles from './styles.module.scss';
import { useSelector, Context, useDispatch } from './context';
import { reducer, INITIAL_STATE, actionCreators } from './reducer';

function Home() {
  // Example of how to use these custom hooks
  const foo = useSelector(state => state.foo);
  const dispatch = useDispatch();
  const userDispatch = useUserDispatch();
  const [, , , logoutRequest] = useLazyRequest({
    request: logout,
    withPostSuccess: () => {
      userDispatch(authActions.resetUser());
      removeCurrentUser();
    }
  });

  useEffect(() => {
    dispatch(actionCreators.setFoo('React'));
  }, [dispatch]);

  const handleLogout = () => {
    userDispatch(authActions.logout());
    logoutRequest(null);
  };

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p className={styles.text}>{foo}</p>
        <p className={styles.text}>
          Edit <code>src/app/index.js</code> and save to reload.
        </p>
        <Link className={styles.appLink} to={PATHS.list}>
          {i18next.t('ListExample:title')}
        </Link>
        <p className={styles.text}>You are logged in.</p>
        <button type="button" className={styles.appLink} onClick={handleLogout}>
          Logout
        </button>
      </header>
    </div>
  );
}

export default withProvider({ Context, reducer, initialState: INITIAL_STATE })(Home);
