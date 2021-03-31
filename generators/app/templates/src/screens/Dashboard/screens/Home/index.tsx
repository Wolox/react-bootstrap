import { useRef } from 'react';

import { actionCreators as authActions } from 'contexts/UserContext/reducer';
import { useDispatch as useUserDispatch } from 'contexts/UserContext';
import { logout, removeCurrentUserToken } from 'services/AuthService';

import logo from './assets/logo.svg';
import styles from './styles.module.scss';
import { withContextProvider, useSelector, useDispatch } from './context';
import { actionCreators } from './reducer';

function Home() {
  // Example of how to use these custom hooks
  const tech = useSelector((state) => state.tech);
  const dispatch = useDispatch();
  const userDispatch = useUserDispatch();
  const techInputRef = useRef<HTMLInputElement>(null);

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
        <p className={styles.text}>Tech is: {tech}.</p>
        <form
          className="column m-bottom-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (techInputRef.current?.value) {
              dispatch(actionCreators.setTech(techInputRef.current?.value));
            }
          }}
        >
          <input className="m-bottom-2" placeholder="New tech" ref={techInputRef} name="tech" type="text" />
          <button className={styles.appLink} type="submit">
            Set new tech
          </button>
        </form>
        <button type="button" className={styles.appLink} onClick={handleLogout}>
          Logout
        </button>
      </header>
    </div>
  );
}

export default withContextProvider(Home);
