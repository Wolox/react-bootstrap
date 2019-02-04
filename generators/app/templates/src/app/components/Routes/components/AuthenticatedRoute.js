import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import Routes from '../../../../constants/routes';

const DEFAULT_PUBLIC_ROUTE = Routes.LOGIN;
const DEFAULT_PRIVATE_ROUTE = Routes.HOME;

function AuthenticatedRoute({
  /*
   * TODO Add this if you need it
   * device,
   */
  isPublicRoute,
  isPrivateRoute,
  // initialized,
  currentUser,
  component: Comp,
  ...props
}) {
  return (
    <Route
      {...props}
      // eslint-disable-next-line react/jsx-no-bind
      render={routeProps => {
        /*
         * TODO Add this if you need it
         * if (device.isMobile && !device.adviceSubmitted) {
         *   return <AppDownloader />;
         * }
         */
        if (currentUser) {
          if (isPublicRoute) {
            /*
             * TODO Add this if you need it
             * if (currentUser && isPublicRoute) {
             * do not allow logged users to access public routes. redirect to app
             */
            return (
              <Redirect
                to={{
                  pathname: DEFAULT_PRIVATE_ROUTE,
                  state: { from: props.location }
                }}
              />
            );
          }
        } else if (isPrivateRoute) {
          // Do not allow unlogged users to access app. redirect to signin
          return (
            <Redirect
              to={{
                pathname: DEFAULT_PUBLIC_ROUTE,
                state: { from: props.location }
              }}
            />
          );
        }

        return <Comp {...routeProps} />;
      }}
    />
  );
}

AuthenticatedRoute.defaultProps = {
  /*
   * TODO Add this if you need it
   * isPublicRoute: true,
   */
  currentUser: false
};

AuthenticatedRoute.propTypes = {
  ...Route.propTypes, // eslint-disable-line react/forbid-foreign-prop-types
  currentUser: PropTypes.bool,
  isPrivateRoute: PropTypes.bool,
  isPublicRoute: PropTypes.bool
};

export default withRouter(connect()(AuthenticatedRoute));
