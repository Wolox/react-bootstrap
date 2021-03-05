import React, { useEffect } from 'react';
import withProvider from 'components/ProviderWrapper';
import { actionCreators as authActions } from 'contexts/UserContext/reducer';
import { useDispatch as useUserDispatch } from 'contexts/UserContext';
import { logout, removeCurrentUserToken } from 'services/AuthService';

import logo from './assets/logo.svg';
import styles from './styles.module.scss';
import { useSelector, Context, useDispatch } from './context';
import { reducer, INITIAL_STATE, actionCreators } from './reducer';

function Home() {
  // Example of how to use these custom hooks
  const foo = useSelector((state) => state.foo);
  const dispatch = useDispatch();
  const userDispatch = useUserDispatch();

  useEffect(() => {
    dispatch(actionCreators.setFoo('React'));
  }, [dispatch]);

  const handleLogout = async () => {
    await logout();
    userDispatch(authActions.resetUser());
    removeCurrentUserToken();
  };

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p className={styles.text}>You are logged in.</p>
        <p className={styles.text}>Foo value is: {foo}.</p>
        <button type="button" className={styles.appLink} onClick={handleLogout}>
          Logout
        </button>
      </header>
    </div>
  );
}

export default withProvider({ context: Context, reducer, initialState: INITIAL_STATE })(Home);
