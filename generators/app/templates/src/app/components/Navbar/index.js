import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import APP_ROUTES from '../../../constants/routes';

import AuthButtons from './components/AuthButtons';
import LinkList from './components/LinkList';
import ROUTES_LIST from './templateRoutes';
import { registerAction, loginAction, logoutAction } from './templateActions';
import styles from './styles.module.scss';

class Navbar extends Component {
  handleRouteClick = route => () => {
    this.props.dispatch(push(route));
  };

  loggedIn = () => {
    // TODO implement
  };

  render() {
    const { title } = this.props;
    const isLoggedIn = this.loggedIn();

    return (
      <div className={styles.container}>
        <button onClick={this.handleRouteClick(APP_ROUTES.HOME)} type="button">
          <img className={styles.title} src={title.image} alt={title.desc} />
        </button>
        <LinkList onChangeRoute={this.handleRouteClick} routesList={ROUTES_LIST} />
        <AuthButtons
          isLoggedIn={isLoggedIn}
          registerAction={registerAction}
          loginAction={loginAction}
          logoutAction={logoutAction}
        />
      </div>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.shape({ desc: PropTypes.string, image: PropTypes.string }).isRequired
};

export default connect()(Navbar);
