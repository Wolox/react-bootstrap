import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItem from './layout';
import { menuItemPropTypes } from './propTypes';

class MenuItemContainer extends Component {
  handleMenuItemSelected = () => this.props.handleItemSelected(this.props.menuItem);

  render() {
    const {
      menuItem,
      currentSelectedSubItemId,
      currentSelectedItemId,
      handleSubItemSelected,
      showComplete
    } = this.props;
    const isActive = currentSelectedItemId === menuItem.id;

    return (
      <MenuItem
        isActive={isActive}
        onMenuItemSelected={this.handleMenuItemSelected}
        menuItem={menuItem}
        currentSelectedSubItemId={currentSelectedSubItemId}
        onSubItemSelected={handleSubItemSelected}
        showComplete={showComplete}
      />
    );
  }
}

MenuItemContainer.propTypes = {
  handleItemSelected: PropTypes.func.isRequired,
  handleSubItemSelected: PropTypes.func.isRequired,
  currentSelectedItemId: PropTypes.number,
  currentSelectedSubItemId: PropTypes.number,
  menuItem: menuItemPropTypes,
  showComplete: PropTypes.bool
};

export default MenuItemContainer;
