import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import APP_ROUTES from '../../../constants/routes';

import AuthButtons from './components/AuthButtons';
import LinkList from './components/LinkList';
import ROUTES_LIST from './templateRoutes';
import styles from './styles.module.scss';

class Navbar extends Component {
  // Fix this when hooks are added or a button component
  handleRouteClick = route => () => {
    this.props.changeRoute(route);
  };

  loggedIn = () => {
    // TODO implement
  };

  registerAction = () => {
    // TODO implement
  };

  handleLogin = () => {
    this.props.changeRoute(APP_ROUTES.LOGIN);
  };

  handleLogout = () => {
    // TODO implement
  };

  render() {
    const { title, logoStyle, navbarStyle, routesStyle, routeStyle, authStyle, authButtonStyle } = this.props;
    const isLoggedIn = this.loggedIn();

    return (
      <div className={`row middle full-width ${styles.navbarContainer} ${navbarStyle || ''}`}>
        <button onClick={this.handleRouteClick(APP_ROUTES.HOME)} type="button">
          <img className={`${styles.title} ${logoStyle || ''}`} src={title.image} alt={title.desc} />
        </button>
        <LinkList
          onChangeRoute={this.handleRouteClick}
          routesList={ROUTES_LIST}
          routesStyle={routesStyle}
          routeStyle={routeStyle}
        />
        <AuthButtons
          isLoggedIn={isLoggedIn}
          registerAction={this.registerAction}
          onLogin={this.handleLogin}
          onLogout={this.handleLogout}
          authStyle={authStyle}
          authButtonStyle={authButtonStyle}
        />
      </div>
    );
  }
}

Navbar.propTypes = {
  changeRoute: PropTypes.func.isRequired,
  title: PropTypes.shape({ desc: PropTypes.string, image: PropTypes.string }).isRequired,
  authButtonStyle: PropTypes.string,
  authStyle: PropTypes.string,
  logoStyle: PropTypes.string,
  navbarStyle: PropTypes.string,
  routesStyle: PropTypes.string,
  routeStyle: PropTypes.string
};

const mapDispatchToProps = dispatch => ({
  changeRoute: route => dispatch(push(route))
});

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
