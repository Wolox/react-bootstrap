import { produce } from 'immer';
import { Reducer } from 'react';

export interface HomeState {
  tech: string;
}

export const INITIAL_STATE = {
  tech: 'React'
};

enum ActionTypes {
  SET_TECH = 'SET_TECH',
  RESET_TECH = 'RESET_TECH'
}

interface SetTech {
  type: ActionTypes.SET_TECH;
  tech: string;
}

interface ResetTech {
  type: ActionTypes.RESET_TECH;
}

export type Action = SetTech | ResetTech;

export const actionCreators = {
  setTech: (tech: string): SetTech => ({ type: ActionTypes.SET_TECH, tech }),
  resetTech: (): ResetTech => ({ type: ActionTypes.RESET_TECH })
};

export const reducer: Reducer<HomeState, Action> = produce((draft, action) => {
  switch (action.type) {
    case ActionTypes.SET_TECH: {
      draft.tech = action.tech;
      break;
    }
    case ActionTypes.RESET_TECH: {
      draft.tech = '';
      break;
    }
    // no default
  }
}, INITIAL_STATE);
