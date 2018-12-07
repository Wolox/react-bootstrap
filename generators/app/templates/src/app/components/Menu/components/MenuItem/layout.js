import React from 'react';
import PropTypes from 'prop-types';

import MenuSubItemContainer from './components/MenuSubItem';
import styles from './styles.module.scss';
import { menuItemPropTypes } from './propTypes';

function MenuItem({ menuItem, isActive, onMenuItemSelected, currentSelectedSubItemId, onSubItemSelected }) {
  return (
    <div className="column">
      <button
        type="button"
        className={`row middle center' ${isActive ? styles.selected : ''} ${styles.item} ${
          menuItem.subItems ? styles.dropdown : ''
        }`}
        onClick={onMenuItemSelected}
      >
        <img src={isActive ? menuItem.icOn : menuItem.icOff} alt="item-icon" className="m-right-1" />
        <h2 className={`${styles.fadeComponent} ${styles.itemText}`}>{menuItem.name}</h2>
      </button>
      {menuItem.subItems && (
        <div className={`${styles.subItems} ${isActive ? styles.collapsed : ''} column start`}>
          {menuItem.subItems.map(subItem => (
            <MenuSubItemContainer
              key={subItem.id}
              subItem={subItem}
              onSubItemSelected={onSubItemSelected}
              currentSelectedSubItemId={isActive ? currentSelectedSubItemId : null}
            />
          ))}
        </div>
      )}
    </div>
  );
}

MenuItem.propTypes = {
  onMenuItemSelected: PropTypes.func.isRequired,
  onSubItemSelected: PropTypes.func.isRequired,
  currentSelectedSubItemId: PropTypes.number,
  isActive: PropTypes.bool,
  menuItem: menuItemPropTypes
};

export default MenuItem;
