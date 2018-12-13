import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles.module.scss';

import { routesListPropTypes } from './propTypes';

function LinkList({ routesList, onChangeRoute }) {
  return (
    <div className="row space-around">
      {routesList.map(
        route =>
          !route.hidden && (
            <button
              type="button"
              key={route.text}
              className={styles.route}
              onClick={onChangeRoute(route.route)}
            >
              {route.text}
            </button>
          )
      )}
    </div>
  );
}

LinkList.propTypes = {
  routesList: routesListPropTypes,
  onChangeRoute: PropTypes.func
};

export default LinkList;
