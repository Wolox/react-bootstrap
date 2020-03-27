import { contextFactory } from '~config/context';

import { HomeState, Action, INITIAL_STATE } from './reducer';

export const { useSelector, Context, useDispatch } = contextFactory<HomeState, Action>(INITIAL_STATE);
