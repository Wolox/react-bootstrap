import React from 'react';
import PropTypes from 'prop-types';

import { menuItemPropTypes } from './propTypes';
import MenuItemContainer from './components/MenuItem';
import styles from './styles.module.scss';

function Menu({
  currentItemId,
  currentSubItemId,
  onHandleItemSelected,
  onHandleSubItemSelected,
  className,
  menuItems,
  showComplete,
  showCompleteActive,
  onHandleClickCompleteActive,
  onHandleMouseOver,
  onHandleMouseOut
}) {
  return (
    <div
      className={`${styles.menu} ${className} ${showCompleteActive || showComplete ? styles.complete : ''}`}
    >
      <button
        type="button"
        className={`${styles.arrowButton} ${
          showCompleteActive ? styles.arrowLeft : styles.arrowRight
        } m-bottom-1`}
        onClick={onHandleClickCompleteActive}
      />
      <div
        onMouseOver={!showCompleteActive && onHandleMouseOver}
        onMouseOut={!showCompleteActive && onHandleMouseOut}
      >
        {menuItems.map(menuItem => (
          <MenuItemContainer
            menuItem={menuItem}
            key={menuItem.id}
            handleItemSelected={onHandleItemSelected}
            handleSubItemSelected={onHandleSubItemSelected}
            currentSelectedItemId={currentItemId}
            currentSelectedSubItemId={currentSubItemId}
            showComplete={showComplete}
          />
        ))}
      </div>
    </div>
  );
}

Menu.propTypes = {
  currentItemId: PropTypes.number.isRequired,
  menuItems: PropTypes.arrayOf(menuItemPropTypes).isRequired,
  onHandleClickCompleteActive: PropTypes.func.isRequired,
  onHandleItemSelected: PropTypes.func.isRequired,
  onHandleMouseOut: PropTypes.func.isRequired,
  onHandleMouseOver: PropTypes.func.isRequired,
  onHandleSubItemSelected: PropTypes.func.isRequired,
  className: PropTypes.string,
  currentSubItemId: PropTypes.number,
  showComplete: PropTypes.bool,
  showCompleteActive: PropTypes.bool
};

Menu.defaultProps = {
  className: ''
};

export default Menu;
