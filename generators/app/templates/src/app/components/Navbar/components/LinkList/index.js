import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles.module.scss';

function LinkList({ routesList, onChangeRoute }) {
  return (
    <div className={styles.routesList}>
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
  routesList: PropTypes.shape({
    hidden: PropTypes.bool,
    route: PropTypes.string,
    text: PropTypes.string
  }),
  onChangeRoute: PropTypes.func
};

export default LinkList;
