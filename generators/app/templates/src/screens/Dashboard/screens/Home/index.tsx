import React, { useRef } from 'react';

import { actionCreators as authActions } from 'contexts/UserContext/reducer';
import { useDispatch as useUserDispatch } from 'contexts/UserContext';
import { logout, removeCurrentUser } from 'services/AuthServices';
import { useLazyRequest } from 'hooks/useRequest';

import logo from './assets/logo.svg';
import styles from './styles.module.scss';
import { withContextProvider, useSelector, useDispatch } from './context';
import { actionCreators } from './reducer';

function Home() {
  // Example of how to use these custom hooks
  const tech = useSelector(state => state.tech);
  const dispatch = useDispatch();
  const userDispatch = useUserDispatch();
  const techInputRef = useRef<HTMLInputElement>(null);

  const [, , , logoutRequest] = useLazyRequest({
    request: logout,
    withPostSuccess: () => {
      userDispatch(authActions.resetUser());
      removeCurrentUser();
    }
  });

  const handleLogout = () => {
    userDispatch(authActions.logout());
    logoutRequest(null);
  };

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p className={styles.text}>You are logged in.</p>
        <p className={styles.text}>Tech is: {tech}.</p>
        <div className="row m-bottom-3">
          <form
            onSubmit={e => {
              if (techInputRef.current?.value) {
                dispatch(actionCreators.setTech(techInputRef.current?.value));
              }
              e.preventDefault();
            }}
          >
            <input ref={techInputRef} name="tech" type="text" />
            <button type="submit">Change Tech</button>
          </form>
        </div>
        <button type="button" className={styles.appLink} onClick={handleLogout}>
          Logout
        </button>
      </header>
    </div>
  );
}

export default withContextProvider(Home);
