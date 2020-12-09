export interface HomeState {
  foo: string;
}

export const INITIAL_STATE = {
  foo: ''
};

enum ActionTypes {
  SET_FOO = 'SET_FOO',
  RESET_FOO = 'RESET_FOO'
}

interface SetFoo {
  type: ActionTypes.SET_FOO;
  payload: string;
}

interface ResetFoo {
  type: ActionTypes.RESET_FOO;
}

export type Action = SetFoo | ResetFoo;

export const actionCreators = {
  setFoo: (foo: string): SetFoo => ({ type: ActionTypes.SET_FOO, payload: foo }),
  resetFoo: (): ResetFoo => ({ type: ActionTypes.RESET_FOO })
};

export const reducer = (state: HomeState, action: Action): HomeState => {
  switch (action.type) {
    case ActionTypes.SET_FOO: {
      return { ...state, foo: action.payload };
    }
    case ActionTypes.RESET_FOO: {
      return { ...state, foo: '' };
    }
    default: {
      return state;
    }
  }
};
