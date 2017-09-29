import React from "react";
import { connect } from "react-redux";
import Radium from "radium";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import * as Routes from "../../components/Routes/constants";

import Home from "./screens/Home";
import Login from "../Login";

import styles from "./styles";

function Dashboard({ loading }) {
  return (
    <div style={styles.base}>
      <div style={styles.baseContent}>
        {/* <Topbar />
        <Sidebar /> */}
        <div style={styles.content}>
          <Switch>
            <Route exact path={Routes.HOME} component={Home} />
            <Route exact path={Routes.LOGIN} component={Login} />
            <Route render={() => <Redirect to={Routes.HOME} />} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

Dashboard.defaultProps = {
  loading: false
};

Dashboard.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default connect()(Radium(Dashboard));
