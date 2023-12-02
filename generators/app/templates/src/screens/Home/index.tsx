import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import { actionCreators as authActions } from 'contexts/UserContext/reducer';
import { useDispatch as useUserDispatch } from 'contexts/UserContext';
import { logout, removeCurrentUserToken } from 'services/AuthService';
import FormInput from 'components/FormInput';

import logo from './assets/logo.svg';
import styles from './styles.module.scss';
import { withContextProvider, useSelector, useDispatch } from './context';
import { actionCreators } from './context/reducer';

interface TechForm {
  tech: string;
}

function Home() {
  const { t, i18n } = useTranslation();

  // Example of how to use these custom hooks
  const tech = useSelector((state) => state.tech);
  const dispatch = useDispatch();
  const userDispatch = useUserDispatch();
  const { register, handleSubmit } = useForm<TechForm>();

  const handleLogout = async () => {
    await logout();
    userDispatch(authActions.resetUser());
    removeCurrentUserToken();
  };

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const onSubmit = handleSubmit((values) => {
    if (values.tech) {
      dispatch(actionCreators.setTech(values.tech));
    }
  });

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p className={styles.text}>{t('Home:loggedIn')}</p>
        <p className={styles.text}>{t('Home:techIs', { tech })}</p>
        <form className="column center m-bottom-10" onSubmit={onSubmit}>
          <FormInput
            className="m-bottom-2"
            placeholder={t('Home:newTech')}
            inputRef={register('tech')}
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
