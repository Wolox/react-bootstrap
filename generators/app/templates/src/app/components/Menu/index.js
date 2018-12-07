import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { menuItemPropTypes, selectedItemPropTypes } from './propTypes';
import Menu from './layout';

class MenuContainer extends Component {
  getHighlightedSubMenu = (highlighted, selected) =>
    highlighted === selected.menuId ? selected.subMenuId : null;

  render() {
    const {
      currentItemId,
      className,
      menuItems,
      selectedItem,
      handleItemSelected,
      handleSubItemSelected
    } = this.props;

    return (
      <Menu
        currentItemId={currentItemId}
        currentSubItemId={this.getHighlightedSubMenu(currentItemId, selectedItem)}
        handleItemSelected={handleItemSelected}
        handleSubItemSelected={handleSubItemSelected}
        className={className}
        menuItems={menuItems}
      />
    );
  }
}

MenuContainer.propTypes = {
  currentItemId: PropTypes.number.isRequired,
  handleItemSelected: PropTypes.func.isRequired,
  handleSubItemSelected: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(menuItemPropTypes).isRequired,
  className: PropTypes.string,
  selectedItem: selectedItemPropTypes
};

const mapDispatchToProps = dispatch => ({
  handleItemSelected: selectedItem => {
    if (window.location.pathname !== selectedItem.path) {
      if (!selectedItem.subItems && selectedItem) {
        dispatch(
          push({
            pathname: selectedItem.path
          })
        );
      }
    }
  },
  handleSubItemSelected: selectedSubItem => {
    dispatch(
      push({
        pathname: selectedSubItem.path
      })
    );
  }
});

export default connect(
  null,
  mapDispatchToProps
)(MenuContainer);
