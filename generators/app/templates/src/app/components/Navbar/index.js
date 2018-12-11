import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import styles from './styles.module.scss';

class Navbar extends Component {
  goToRoute = route => () => {
    this.props.dispatch(push(route));
  };

  render() {
    const {
      homeRoute,
      title,
      isLoggedIn,
      routesList,
      containerStyle,
      titleStyle,
      logStyle,
      routesStyle,
      buttonsStyle,
      rutesStyle,
      registerAction,
      loginAction,
      logoutAction,
      loginText,
      logoutText,
      registerText
    } = this.props;

    return (
      <div className={`${styles.container} ${containerStyle}`}>
        <button onClick={this.goToRoute(homeRoute)} type="button">
          <img className={`${styles.title} ${titleStyle}`} src={title.image} alt={title.desc} />
        </button>
        <div className={`${styles.routesList} ${routesStyle}`}>
          {routesList &&
            routesList.map(
              route =>
                !route.hidden && (
                  <button
                    type="button"
                    key={route.text}
                    className={`${styles.route} ${rutesStyle}`}
                    onClick={this.goToRoute(route.route)}
                  >
                    {route.text}
                  </button>
                )
            )}
        </div>
        <div className={`${styles.logButtons} ${logStyle}`}>
          {isLoggedIn ? (
            <button className={`${styles.button} ${buttonsStyle}`} onClick={logoutAction} type="button">
              {logoutText}
            </button>
          ) : (
            <Fragment>
              <button
                type="button"
                className={`${styles.button} ${buttonsStyle} ${styles.withBorder}`}
                onClick={loginAction}
              >
                {loginText}
              </button>
              <button className={`${styles.button} ${buttonsStyle}`} onClick={registerAction} type="button">
                {registerText}
              </button>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

Navbar.defaultProps = {
  buttonsStyle: '',
  containerStyle: '',
  logStyle: '',
  loginText: 'LogIn',
  logoutText: 'LogOut',
  registerText: 'Register',
  routesStyle: '',
  rutesStyle: '',
  titleStyle: ''
};

Navbar.propTypes = {
  loginAction: PropTypes.func.isRequired,
  logoutAction: PropTypes.func.isRequired,
  registerAction: PropTypes.func.isRequired,
  title: PropTypes.shape({ desc: PropTypes.string, image: PropTypes.string }).isRequired,
  buttonsStyle: PropTypes.string,
  containerStyle: PropTypes.string,
  homeRoute: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  loginText: PropTypes.string,
  logoutText: PropTypes.string,
  logStyle: PropTypes.string,
  registerText: PropTypes.string,
  routesList: PropTypes.shape({
    hidden: PropTypes.bool,
    route: PropTypes.string,
    text: PropTypes.string
  }),
  routesStyle: PropTypes.string,
  rutesStyle: PropTypes.string,
  titleStyle: PropTypes.string
};

export default connect()(Navbar);
