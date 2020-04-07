import api from '../config/api';

import * as LocalStorageService from './LocalStorageService';

const TOKEN_FIELD_NAME = 'sessionToken';

export const setCurrentUser = currentUser => {
  api.setHeader('Authorization', currentUser.sessionToken);
  LocalStorageService.setValue(TOKEN_FIELD_NAME, currentUser.sessionToken);
};
export const getCurrentUser = () => {
  const currentSessionToken = LocalStorageService.getValue(TOKEN_FIELD_NAME);

  if (currentSessionToken) {
    api.setHeader('Authorization', currentSessionToken);

    return true;
  }

  return false;
};
export const removeCurrentUser = () => LocalStorageService.removeValue(TOKEN_FIELD_NAME);

export const login = () =>
  // TODO: Implement call to authentication API here
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ ok: true, data: { sessionToken: 'token' } });
    }, 750); // eslint-disable-line no-magic-numbers
  });
