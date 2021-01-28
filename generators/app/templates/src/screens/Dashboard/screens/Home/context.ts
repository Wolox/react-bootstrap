import contextFactory from 'utils/contextFactory';

import { INITIAL_STATE, reducer } from './reducer';

export const { useSelector, withContext, useDispatch } = contextFactory(reducer, INITIAL_STATE);
