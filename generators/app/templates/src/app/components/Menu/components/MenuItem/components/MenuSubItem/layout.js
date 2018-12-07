import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import { subItemPropTypes } from './propTypes';

function MenuSubItem({ subItem, onSubItemSelected, isActive, className }) {
  return (
    <button
      type="button"
      to={subItem.path}
      target="_blank"
      onClick={onSubItemSelected}
      className={`${styles.subItem} ${isActive ? styles.selected : ''} ${className}`}
    >
      {subItem.name}
    </button>
  );
}

MenuSubItem.propTypes = {
  onSubItemSelected: PropTypes.func.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  subItem: subItemPropTypes
};

MenuSubItem.defaultProps = {
  className: ''
};

export default MenuSubItem;
