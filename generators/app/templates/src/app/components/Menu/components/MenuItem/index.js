import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItem from './layout';
import { menuItemPropTypes } from './propTypes';

class MenuItemContainer extends Component {
  handleMenuItemSelected = () => {
    this.props.handleItemSelected(this.props.menuItem);
  };

  render() {
    const isActive = this.props.currentSelectedItemId === this.props.menuItem.id;
    const { menuItem, currentSelectedSubItemId, handleSubItemSelected } = this.props;

    return (
      <MenuItem
        isActive={isActive}
        onMenuItemSelected={this.handleMenuItemSelected}
        menuItem={menuItem}
        currentSelectedSubItemId={currentSelectedSubItemId}
        onSubItemSelected={handleSubItemSelected}
      />
    );
  }
}

MenuItemContainer.propTypes = {
  handleItemSelected: PropTypes.func.isRequired,
  handleSubItemSelected: PropTypes.func.isRequired,
  currentSelectedItemId: PropTypes.number,
  currentSelectedSubItemId: PropTypes.number,
  menuItem: menuItemPropTypes
};

export default MenuItemContainer;
