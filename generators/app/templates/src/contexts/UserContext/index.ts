import { contextFactory } from 'config/context';

import { UserState, Action, INITIAL_STATE } from './reducer';

export const { useSelector, Context, useDispatch } = contextFactory<UserState, Action>(INITIAL_STATE);
