import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { actionCreators as authActions } from 'contexts/UserContext/reducer';
import { useDispatch as useUserDispatch } from 'contexts/UserContext';
import { logout, removeCurrentUserToken } from 'services/AuthService';
import i18n from 'config/i18n';
import FormInput from 'components/FormInput';

import logo from './assets/logo.svg';
import styles from './styles.module.scss';
import { withContextProvider, useSelector, useDispatch } from './context';
import { actionCreators } from './context/reducer';

function Home() {
  const { t } = useTranslation();

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

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p className={styles.text}>{t('Home:loggedIn')}</p>
        <p className={styles.text}>{t('Home:techIs', { tech })}</p>
        <form
          className="column center m-bottom-10"
          onSubmit={(e) => {
            e.preventDefault();
            if (techInputRef.current?.value) {
              dispatch(actionCreators.setTech(techInputRef.current?.value));
            }
          }}
        >
          <FormInput
            className="m-bottom-2"
            placeholder={t('Home:newTech')}
            inputRef={techInputRef}
            name="tech"
            inputType="text"
          />
          <button className={styles.appLink} type="submit">
            {t('Home:setNewTech')}
          </button>
        </form>
        <button type="button" onClick={handleChangeLanguage} className={`m-bottom-4 ${styles.appLink}`}>
          {t('Home:changeLang')}
        </button>
        <button type="button" className={styles.appLink} onClick={handleLogout}>
          {t('Home:logout')}
        </button>
      </header>
    </div>
  );
}

export default withContextProvider(Home);
