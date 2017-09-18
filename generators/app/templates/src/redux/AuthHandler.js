import PropTypes from "prop-types";
import Immutable from "seamless-immutable";
import { push } from "react-router-redux";

import * as AuthService from "../services/AuthServices";
import * as RouteConstants from "../app/components/Routes/constants";

import { stringArrayToObject } from "../utils/array";

/* ------------- Auth actions ------------- */
export const actions = stringArrayToObject(
  ["LOGIN", "LOGIN_SUCCESS", "LOGIN_FAILURE", "LOGOUT", "AUTH_INIT"],
  "@@AUTH"
);

const privateActionCreators = {
  loginSuccess(authData) {
    return {
      type: actions.LOGIN_SUCCESS,
      payload: { authData }
    };
  },
  loginFailure(err) {
    return {
      type: actions.LOGIN_FAILURE,
      payload: { err }
    };
  }
};

export const actionCreators = {
  init(user) {
    return {
      type: actions.AUTH_INIT,
      payload: { user }
    };
  },
  login(authData) {
    return async dispatch => {
      dispatch({ type: actions.LOGIN });
      try {
        const response = await AuthService.login(authData);
        if (response.ok) {
          await AuthService.setCurrentUser(response.data);
          dispatch(privateActionCreators.loginSuccess(response.data));
          dispatch(push(RouteConstants.HOME));
        } else {
          throw new Error("Invalid credentials");
        }
      } catch (e) {
        dispatch(privateActionCreators.loginFailure(e));
      }
    };
  },
  logout() {
    return async dispatch => {
      await AuthService.removeCurrentUser();
      dispatch({ type: actions.LOGOUT });
      dispatch(push(RouteConstants.LOGIN));
    };
  }
};

/* ------------- Auth reducer ------------- */
const defaultState = {
  currentUser: null,
  loading: false,
  initialLoading: true
};

/* eslint-disable complexity */
export function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.AUTH_INIT: {
      return state.merge({
        initialLoading: false,
        currentUser: action.payload.user
      });
    }
    case actions.LOGIN: {
      return state.merge({ loading: true });
    }
    case actions.LOGIN_SUCCESS: {
      return state.merge({
        loading: false,
        currentUser: action.payload.authData
      });
    }
    case actions.LOGIN_FAILURE: {
      return state.merge({
        loading: false,
        currentUser: null,
        err: action.payload.err
      });
    }
    case actions.LOGOUT: {
      return state.merge({ loading: false, currentUser: null });
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
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired
    // TODO: Extend user model definition
  })
};
