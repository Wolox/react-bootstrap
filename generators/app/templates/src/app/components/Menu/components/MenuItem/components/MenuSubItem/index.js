import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuSubItem from './layout';
import { subItemPropTypes } from './propTypes';

class MenuSubItemContainer extends Component {
  handleSubItemSelected = () => {
    this.props.onSubItemSelected(this.props.subItem);
  };

  render() {
    const { subItem, handleSubItemSelected, currentSelectedSubItemId, className } = this.props;

    return (
      <MenuSubItem
        subItem={subItem}
        onSubItemSelected={handleSubItemSelected}
        isActive={currentSelectedSubItemId === subItem.id}
        className={className}
      />
    );
  }
}

MenuSubItemContainer.propTypes = {
  handleSubItemSelected: PropTypes.func.isRequired,
  className: PropTypes.string,
  currentSelectedSubItemId: PropTypes.number,
  subItem: subItemPropTypes,
  onSubItemSelected: PropTypes.func
};

export default MenuSubItemContainer;
