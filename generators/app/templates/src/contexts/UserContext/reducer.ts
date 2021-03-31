import { produce } from 'immer';
import { Reducer } from 'react';

export interface User {
  id: number;
  sessionToken: string;
}

export interface UserState {
  user: User | null;
}

export interface Credentials {
  username: string;
  password: string;
}

export const INITIAL_STATE = {
  user: null
};

enum ActionTypes {
  SET_USER = 'SET_USER',
  RESET_USER = 'RESET_USER',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

interface SetUser {
  type: ActionTypes.SET_USER;
  payload: User;
}

interface ResetUser {
  type: ActionTypes.RESET_USER;
}

interface Login {
  type: ActionTypes.LOGIN;
  payload: Credentials;
}

interface Logout {
  type: ActionTypes.LOGOUT;
}

export type Action = SetUser | ResetUser | Login | Logout;

export const actionCreators = {
  setUser: (user: User): SetUser => ({ type: ActionTypes.SET_USER, payload: user }),
  resetUser: (): ResetUser => ({ type: ActionTypes.RESET_USER }),
  login: (credentials: Credentials): Login => ({ type: ActionTypes.LOGIN, payload: credentials }),
  logout: (): Logout => ({ type: ActionTypes.LOGOUT })
};

export const reducer: Reducer<UserState, Action> = produce((draft, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER: {
      draft.user = action.payload;
      break;
    }
    case ActionTypes.RESET_USER: {
      draft.user = null;
      break;
    }
    // no default
  }
}, INITIAL_STATE);
