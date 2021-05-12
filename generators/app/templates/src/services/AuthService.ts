import { ApiResponse } from 'apisauce';

import { User, Credentials } from 'contexts/UserContext/reducer';

import LocalStorageService from './LocalStorageService';

const TOKEN_FIELD_NAME = 'sessionToken';
const TIMEOUT_TIME = 1000;

export interface LoginError {
  message: string;
}

export interface RegistrationUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const setCurrentUserToken = (currentUser: User) => {
  // TODO: Implement call to authentication API here
  // api.setHeader('Authorization', currentUser.sessionToken);
  LocalStorageService.setValue(TOKEN_FIELD_NAME, currentUser.sessionToken);
};

export const getCurrentUserToken = () => LocalStorageService.getValue(TOKEN_FIELD_NAME);

export const removeCurrentUserToken = () => LocalStorageService.removeValue(TOKEN_FIELD_NAME);

export const login = (credentials: Credentials): Promise<ApiResponse<User, LoginError>> =>
  // TODO: Implement call to authentication API here
  // api.post('/login', credentials);
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        data: { sessionToken: credentials.password === 'asd1' ? 'invalid' : 'token', id: 1234 },
        problem: null,
        originalError: null
      });
    }, TIMEOUT_TIME);
  });

export const signup = (user: RegistrationUser): Promise<ApiResponse<User, LoginError>> =>
  // TODO: Implement call to authentication API here
  // api.post('/sign_up', credentials);
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        data: { sessionToken: user.password === 'asd1' ? 'invalid' : 'token', id: 1234 },
        problem: null,
        originalError: null
      });
    }, TIMEOUT_TIME);
  });

export const logout = (): Promise<ApiResponse<User, LoginError>> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        data: { sessionToken: '', id: 1234 },
        problem: null,
        originalError: null
      });
    }, TIMEOUT_TIME);
  });
