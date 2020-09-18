import React from 'react';
import i18next from 'i18next';

import logo from './assets/logo.svg';
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt={i18next.t('Home:logoAlt') as string} />
        <p className={styles.text}>{i18next.t('Home:welcome')}</p>
      </header>
    </div>
  );
}

export default Home;
