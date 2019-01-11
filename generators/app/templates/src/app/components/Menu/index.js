import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { menuItemPropTypes } from './propTypes';
import Menu from './layout';

const CURRENT_ITEM_ID = 1;

class MenuContainer extends Component {
  state = {
    currentItemId: CURRENT_ITEM_ID,
    selectedItem: CURRENT_ITEM_ID,
    showComplete: true,
    showCompleteActive: true
  };

  getHighlightedSubMenu = (highlighted, selected) =>
    highlighted === selected.menuId ? selected.subMenuId : null;

  handleItemSelected = selectedItem => {
    this.setState({
      currentItemId: selectedItem.id,
      selectedItem: selectedItem.subItems ? selectedItem : { menuId: selectedItem.id, subMenuId: null }
    });
  };

  handleSubItemSelected = selectedSubItem => {
    this.setState(prevState => ({
      selectedItem: { menuId: prevState.selectedItem.menuId, subMenuId: selectedSubItem.id }
    }));
  };

  setShowComplete = showComplete => this.setState({ showComplete });

  setShowCompleteActive = () =>
    this.setState(prevState => ({
      showCompleteActive: !prevState.showCompleteActive,
      showComplete: !prevState.showComplete
    }));

  handleClickMouse = () => this.setShowCompleteActive();

  handleMouseOver = () => this.setShowComplete(true);

  handleMouseOut = () => this.setShowComplete(false);

  render() {
    const { className, menuItems } = this.props;
    const { currentItemId, selectedItem, showComplete, showCompleteActive } = this.state;

    return (
      <Menu
        currentItemId={currentItemId}
        currentSubItemId={this.getHighlightedSubMenu(currentItemId, selectedItem)}
        onHandleItemSelected={this.handleItemSelected}
        onHandleSubItemSelected={this.handleSubItemSelected}
        className={className}
        menuItems={menuItems}
        showComplete={showComplete}
        showCompleteActive={showCompleteActive}
        onHandleClickMouse={this.handleClickMouse}
        onHandleMouseOver={this.handleMouseOver}
        onHandleMouseOut={this.handleMouseOut}
      />
    );
  }
}

MenuContainer.propTypes = {
  menuItems: PropTypes.arrayOf(menuItemPropTypes).isRequired,
  className: PropTypes.string
};

export default MenuContainer;
