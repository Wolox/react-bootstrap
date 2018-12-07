import React from 'react';
import PropTypes from 'prop-types';

import { menuItemPropTypes } from './propTypes';
import MenuItemContainer from './components/MenuItem';
import styles from './styles.module.scss';

function Menu({
  currentItemId,
  currentSubItemId,
  handleItemSelected,
  handleSubItemSelected,
  className,
  menuItems
}) {
  return (
    <div className={`${styles.menu} ${className}`}>
      {menuItems.map(menuItem => (
        <MenuItemContainer
          menuItem={menuItem}
          key={menuItem.id}
          handleItemSelected={handleItemSelected}
          handleSubItemSelected={handleSubItemSelected}
          currentSelectedItemId={currentItemId}
          currentSelectedSubItemId={currentSubItemId}
        />
      ))}
    </div>
  );
}

Menu.propTypes = {
  currentItemId: PropTypes.number.isRequired,
  handleSubItemSelected: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(menuItemPropTypes).isRequired,
  className: PropTypes.string,
  currentSubItemId: PropTypes.number,
  handleItemSelected: PropTypes.func
};

Menu.defaultProps = {
  className: ''
};

export default Menu;
