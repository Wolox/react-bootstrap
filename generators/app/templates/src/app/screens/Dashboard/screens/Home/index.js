import React from 'react';

import logo from './assets/logo.svg';
import styles from './styles.scss';

function Home() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1 className={styles.appTitle}>Welcome to Wolox React Bootstrap</h1>
      </header>
      <p className={styles.appIntro}>
        To get started, edit the Dashboard component in <code>src/app/screens/Dashboard</code> folder.
      </p>
    </div>
  );
}

export default Home;
