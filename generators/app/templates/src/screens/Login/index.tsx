import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

import { useLazyRequest } from 'hooks/useRequest';
import { useDispatch } from 'contexts/UserContext';
import { actionCreators, Credentials, User } from 'contexts/UserContext/reducer';
import { login, setCurrentUser } from 'services/AuthServices';
import FormInput from 'components/FormInput';
import PATHS from 'components/Routes/paths';
import i18n from 'config/i18n';

import styles from './styles.module.scss';

const FIELDS = { email: 'email', password: 'password' };

const getValidations = (t: TFunction) => ({
  email: {
    pattern: {
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: t('emailFormatError')
    },
    required: t('requiredError')
  },
  password: { required: t('requiredError') }
});

function LoginContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation('Login');

  const [, loading, loginError, loginRequest] = useLazyRequest({
    request: (credentials: Credentials) => login(credentials),
    withPostSuccess: response => {
      const userResponse = response as User;
      dispatch(actionCreators.setUser(userResponse));
      setCurrentUser(userResponse);

      history.push('/');
    }
  });
  const { register, handleSubmit, errors } = useForm();
  const errorMessage = loginError?.errorData?.message;

  const handleLogin = useCallback(
    (values: Credentials) => {
      loginRequest(values);
    },
    [loginRequest]
  );

  const onChangeLanguage = () => {
    const lang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(lang);
  };

  const validations = getValidations(t);

  return (
    <div className={`column center full-width ${styles.container}`}>
      <div className="column center m-bottom-3">
        <h1 className="m-bottom-1">{t('login')}</h1>
        <h2>{t('loginExplanation')}</h2>
      </div>
      <form
        className={`column m-bottom-2 ${styles.formContainer}`}
        aria-label="login-form"
        onSubmit={handleSubmit(handleLogin)}
        noValidate
      >
        <FormInput
          label={t('email')}
          name={FIELDS.email}
          inputType="email"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={t('emailPlaceholder') as string}
          disabled={loading}
          inputRef={register(validations.email)}
          error={errors?.email?.message}
        />
        <FormInput
          label={t('password')}
          name={FIELDS.password}
          inputType="password"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={t('passwordPlaceholder') as string}
          disabled={loading}
          inputRef={register(validations.password)}
          error={errors?.password?.message}
        />
        <div className="column center">
          <button disabled={loading} type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
            {t('enter')}
          </button>
          <span className={`row center middle full-width m-top-1 m-bottom-1 ${errorMessage ? '' : 'hidden'}`}>
            {t(`:${errorMessage || 'error'}`)}
          </span>
          <a href={PATHS.recoverPassword}>{t('forgotPassword')}</a>
          <a href={PATHS.registration}>{t('createAccount')}</a>
          <button type="button" onClick={onChangeLanguage}>
            {t('changeLang')}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginContainer;
