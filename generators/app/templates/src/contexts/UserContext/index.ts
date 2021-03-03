import contextFactory from 'utils/contextFactory';

import { INITIAL_STATE, reducer } from './reducer';

export const {
  withContextProvider,
  useSelector,
  useDispatch,
  StateContext,
  DispatchContext
} = contextFactory(reducer, INITIAL_STATE);
