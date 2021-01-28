import contextFactory from 'utils/contextFactory';

import { INITIAL_STATE, reducer } from './reducer';

export const { withContext, useSelector, useDispatch } = contextFactory(reducer, INITIAL_STATE);
