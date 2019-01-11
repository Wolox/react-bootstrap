import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { subItemPropTypes } from './propTypes';

function MenuSubItem({ subItem, onSubItemSelected, isActive, className }) {
  return (
    <Link
      type="button"
      to={subItem.path}
      onClick={onSubItemSelected}
      className={`${styles.subItem} ${isActive ? styles.selected : ''} ${className}`}
    >
      {subItem.name}
    </Link>
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
