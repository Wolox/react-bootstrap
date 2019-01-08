import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles.module.scss';

import { routesListPropTypes } from './propTypes';

function LinkList({ routesList, onChangeRoute, routesStyle, routeStyle }) {
  return (
    <div className={`row space-around ${styles.linkList} ${routesStyle || ''}`}>
      {routesList.map(
        route =>
          !route.hidden && (
            <button
              type="button"
              key={route.text}
              className={`${styles.route} ${routeStyle || ''}`}
              onClick={onChangeRoute(route.route)}
            >
              {route.image && <img src={route.image.src} alt={route.image.alt} className={styles.image} />}
              {route.text}
            </button>
          )
      )}
    </div>
  );
}

LinkList.propTypes = {
  routesList: routesListPropTypes,
  routesStyle: PropTypes.string,
  routeStyle: PropTypes.string,
  onChangeRoute: PropTypes.func
};

export default LinkList;
