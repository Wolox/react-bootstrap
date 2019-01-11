import React from 'react';
import PropTypes from 'prop-types';

import MenuSubItemContainer from './components/MenuSubItem';
import styles from './styles.module.scss';
import { menuItemPropTypes } from './propTypes';

// eslint-disable-next-line complexity
function MenuItem({
  menuItem,
  isActive,
  onMenuItemSelected,
  currentSelectedSubItemId,
  onSubItemSelected,
  showComplete
}) {
  return (
    <div className="column">
      <button
        type="button"
        className={`row middle center ${showComplete ? `start ${styles.complete}` : 'center'} ${
          isActive ? styles.selected : ''
        } ${styles.item} ${menuItem.subItems && showComplete ? styles.dropdown : ''}`}
        onClick={onMenuItemSelected}
      >
        <img
          src={isActive ? menuItem.icOn : menuItem.icOff}
          alt="item-icon"
          className={showComplete ? 'm-right-1' : ''}
        />
        <h2 className={showComplete ? `${styles.fadeComponent} ${styles.itemText}` : 'hidden'}>
          {menuItem.name}
        </h2>
      </button>
      {menuItem.subItems && (
        <div
          className={`${styles.subItems} ${isActive ? styles.collapsed : ''} ${
            showComplete && isActive ? '' : 'hidden'
          } column start`}
        >
          {menuItem.subItems.map(subItem => (
            <MenuSubItemContainer
              key={subItem.id}
              subItem={subItem}
              onSubItemSelected={onSubItemSelected}
              currentSelectedSubItemId={isActive ? currentSelectedSubItemId : null}
              className={showComplete ? styles.fadeComponent : ''}
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
  menuItem: menuItemPropTypes,
  showComplete: PropTypes.bool
};

export default MenuItem;
