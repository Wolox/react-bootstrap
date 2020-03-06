import { Nullable } from '~utils/types';

export interface User {
  id: number;
}

export interface GlobalState {
  user: Nullable<User>;
}

export const INITIAL_STATE = {
  user: null
};

enum ActionTypes {
  SET_USER = 'SET_USER',
  RESET_USER = 'RESET_USER'
}

export interface SetUser {
  type: ActionTypes.SET_USER;
  payload: User;
}

export interface ResetUser {
  type: ActionTypes.RESET_USER;
}

export type Action = SetUser | ResetUser;

export const actionCreators = {
  setUser: (user: User) => ({ type: ActionTypes.SET_USER, payload: user }),
  resetUser: () => ({ type: ActionTypes.RESET_USER })
};

export const globalReducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case 'SET_USER': {
      return { ...state, user: action.payload };
    }
    case 'RESET_USER': {
      return { ...state, user: null };
    }
    default: {
      return state;
    }
  }
};
