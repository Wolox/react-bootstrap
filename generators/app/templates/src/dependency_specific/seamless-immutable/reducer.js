import PropTypes from 'prop-types';

import { actions } from './actions';

/* ------------- Auth reducer ------------- */
const defaultState = {
  currentUser: null,
  loading: false,
  initialLoading: true
};

/* eslint-disable complexity */
// eslint-disable-next-line new-cap
export function reducer(state = Object.freeze(defaultState), action) {
  switch (action.type) {
    case actions.AUTH_INIT: {
      return Object.freeze({
        ...state,
        initialLoading: false,
        currentUser: action.payload.user
      });
    }
    case actions.LOGIN: {
      return Object.freeze({ ...state, loading: true });
    }
    case actions.LOGIN_SUCCESS: {
      return Object.freeze({
        ...state,
        loading: false,
        currentUser: action.payload.authData
      });
    }
    case actions.LOGIN_FAILURE: {
      return Object.freeze({
        ...state,
        loading: false,
        currentUser: null,
        err: action.payload.err
      });
    }
    case actions.LOGOUT: {
      return Object.freeze({ ...state, loading: false, currentUser: null });
    }
    default: {
      return state;
    }
  }
}
/* eslint-enable complexity */

/* ------------- Auth propTypes ------------- */
export const propTypes = {
  loading: PropTypes.bool.isRequired,
  initialLoading: PropTypes.bool.isRequired,
  currentUser: PropTypes.shape({
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
    // TODO: Extend user model definition
  })
};
