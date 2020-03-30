import React, { useEffect } from 'react';

import withProvider from '~components/ProviderWrapper';

import logo from './assets/logo.svg';
import styles from './styles.module.scss';
import { useSelector, Context, useDispatch } from './context';
import { reducer, INITIAL_STATE, actionCreators } from './reducer';

function Home() {
  // Example of how to use these custom hooks
  const foo = useSelector(state => state.foo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.setFoo('React'));
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p className={styles.text}>
          Edit <code>src/app/index.js</code> and save to reload.
        </p>
        <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn {foo}
        </a>
      </header>
    </div>
  );
}

export default withProvider({ Context, reducer, initialState: INITIAL_STATE })(Home);
