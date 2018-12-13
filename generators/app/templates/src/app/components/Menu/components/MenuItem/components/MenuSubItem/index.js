import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuSubItem from './layout';
import { subItemPropTypes } from './propTypes';

class MenuSubItemContainer extends Component {
  handleSubItemSelected = () => {
    this.props.onSubItemSelected(this.props.subItem);
  };

  render() {
    const { subItem, currentSelectedSubItemId, className } = this.props;

    return (
      <MenuSubItem
        subItem={subItem}
        onSubItemSelected={this.handleSubItemSelected}
        isActive={currentSelectedSubItemId === subItem.id}
        className={className}
      />
    );
  }
}

MenuSubItemContainer.propTypes = {
  onSubItemSelected: PropTypes.func.isRequired,
  className: PropTypes.string,
  currentSelectedSubItemId: PropTypes.number,
  subItem: subItemPropTypes
};

export default MenuSubItemContainer;
