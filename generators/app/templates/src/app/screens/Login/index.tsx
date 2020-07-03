import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import i18next from 'i18next';

import FormInput from '~components/FormInput';
import PATHS from '~components/Routes/paths';
import { useDispatch } from '~contexts/UserContext';
import { actionCreators, Credentials, User } from '~contexts/UserContext/reducer';
import { useLazyRequest } from '~app/hooks/useRequest';
import { login, setCurrentUser } from '~services/AuthServices';
import { stringArrayToObject } from '~utils/array';

import styles from './styles.module.scss';

const FIELDS = stringArrayToObject(['email', 'password']);

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

  const handleLogin = ({ email, password }: { email: string; password: string }) => {
    loginRequest({ username: email, password });
  };

  const { handleChange, handleSubmit } = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: handleLogin
  });

  const errorMessage = loginError?.errorData?.message;

  return (
    <div className={`column center full-width ${styles.container}`}>
      <div className="column center m-bottom-3">
        <h1 className="m-bottom-1">{i18next.t('Login:login')}</h1>
        <h2>{i18next.t('Login:loginExplanation')}</h2>
      </div>
      <form className={`column m-bottom-2 ${styles.formContainer}`} onSubmit={handleSubmit}>
        <FormInput
          label={i18next.t('Login:email')}
          name={FIELDS.email}
          inputType="text"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Login:emailPlaceholder') as string}
          onChange={handleChange}
          disabled={loading}
        />
        <FormInput
          label={i18next.t('Login:password')}
          name={FIELDS.password}
          inputType="password"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Login:passwordPlaceholder') as string}
          onChange={handleChange}
          disabled={loading}
        />
        <div className="column center">
          <button disabled={loading} type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
            {i18next.t('Login:enter')}
          </button>
          <span className={`row center middle full-width m-top-1 m-bottom-1 ${errorMessage ? '' : 'hidden'}`}>
            {i18next.t(`Login:${errorMessage || 'error'}`)}
          </span>
          <Link to={PATHS.recoverPassword}>{i18next.t('Login:forgotPassword')}</Link>
          <Link to={PATHS.registration}>{i18next.t('Login:createAccount')}</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginContainer;
