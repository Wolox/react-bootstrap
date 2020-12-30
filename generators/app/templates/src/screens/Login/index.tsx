import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';

import { useLazyRequest } from 'hooks/useRequest';
import { useDispatch } from 'contexts/UserContext';
import { actionCreators, Credentials, User } from 'contexts/UserContext/reducer';
import { login, setCurrentUser } from 'services/AuthServices';
import FormInput from 'components/FormInput';
import PATHS from 'components/Routes/paths';

import styles from './styles.module.scss';

const FIELDS = { email: 'email', password: 'password' };

const VALIDATIONS = {
  email: {
    pattern: {
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: i18next.t('Login:emailFormatError') as string
    },
    required: i18next.t('Login:requiredError') as string
  },
  password: { required: i18next.t('Login:requiredError') as string }
};

function LoginContainer() {
  const history = useHistory();
  const dispatch = useDispatch();

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

  return (
    <div className={`column center full-width ${styles.container}`}>
      <div className="column center m-bottom-3">
        <h1 className="m-bottom-1">{i18next.t('Login:login')}</h1>
        <h2>{i18next.t('Login:loginExplanation')}</h2>
      </div>
      <form
        className={`column m-bottom-2 ${styles.formContainer}`}
        aria-label="login-form"
        onSubmit={handleSubmit(handleLogin)}
        noValidate
      >
        <FormInput
          label={i18next.t('Login:email')}
          name={FIELDS.email}
          inputType="email"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Login:emailPlaceholder') as string}
          disabled={loading}
          inputRef={register(VALIDATIONS.email)}
          error={errors?.email?.message}
        />
        <FormInput
          label={i18next.t('Login:password')}
          name={FIELDS.password}
          inputType="password"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Login:passwordPlaceholder') as string}
          disabled={loading}
          inputRef={register(VALIDATIONS.password)}
          error={errors?.password?.message}
        />
        <div className="column center">
          <button disabled={loading} type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
            {i18next.t('Login:enter')}
          </button>
          <span className={`row center middle full-width m-top-1 m-bottom-1 ${errorMessage ? '' : 'hidden'}`}>
            {i18next.t(`Login:${errorMessage || 'error'}`)}
          </span>
          <a href={PATHS.recoverPassword}>{i18next.t('Login:forgotPassword')}</a>
          <a href={PATHS.registration}>{i18next.t('Login:createAccount')}</a>
        </div>
      </form>
    </div>
  );
}

export default LoginContainer;
