import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from '~contexts/UserContext';
import { actionCreators, Credentials, User } from '~contexts/UserContext/reducer';
import { useLazyRequest } from '~app/hooks/useRequest';
import { login, setCurrentUser } from '~services/AuthServices';

import Login from './layout';

function LoginContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, loading, loginError, loginRequest] = useLazyRequest({
    request: (credentials: Credentials) => login(credentials),
    withPostSuccess: response => {
      const userResponse = response as User;
      dispatch(actionCreators.setUser(userResponse));
      setCurrentUser(userResponse);
      history.push('/');
    }
  });

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials = { username: email, password };
    dispatch(actionCreators.login(credentials));
    loginRequest(credentials);
  };

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setEmail((e.target as HTMLInputElement).value || '');

  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword((e.target as HTMLInputElement).value || '');
  };

  return (
    <Login
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onLogin={handleLogin}
      loading={loading}
      loginError={loginError}
    />
  );
}

export default LoginContainer;
