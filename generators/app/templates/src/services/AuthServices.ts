import { ApiResponse } from 'apisauce';

import { User, Credentials } from '~app/contexts/UserContext/reducer';

import api from '../config/api';

import LocalStorageService from './LocalStorageService';

const TOKEN_FIELD_NAME = 'sessionToken';

export interface LoginError {
  message: string;
}

export const setCurrentUser = (currentUser: User) => {
  api.setHeader('Authorization', currentUser.sessionToken);
  LocalStorageService.setValue(TOKEN_FIELD_NAME, currentUser.sessionToken);
};

export const getCurrentUser = () => LocalStorageService.getValue(TOKEN_FIELD_NAME);

export const removeCurrentUser = () => LocalStorageService.removeValue(TOKEN_FIELD_NAME);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const login = (credentials: Credentials): Promise<ApiResponse<User, LoginError>> =>
  // TODO: Implement call to authentication API here
  // api.post('/login', credentials );
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        ok: true,
        data: { sessionToken: credentials.password === 'asd1' ? 'invalid' : 'token', id: 1234 },
        problem: null,
        originalError: null
      });
    }, 1000); // eslint-disable-line no-magic-numbers
  });

export const logout = (): Promise<ApiResponse<User, LoginError>> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        ok: true,
        data: { sessionToken: '', id: 1234 },
        problem: null,
        originalError: null
      });
    }, 1000); // eslint-disable-line no-magic-numbers
  });
