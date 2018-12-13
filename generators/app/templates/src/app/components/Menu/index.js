import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { menuItemPropTypes } from './propTypes';
import Menu from './layout';

class MenuContainer extends Component {
  state = { currentItemId: 1, selectedItem: 1 };

  getHighlightedSubMenu = (highlighted, selected) =>
    highlighted === selected.menuId ? selected.subMenuId : null;

  handleonItemSelected = selectedItem => {
    this.props.handleItemSelected(selectedItem);
    this.setState({
      currentItemId: selectedItem.id,
      selectedItem: selectedItem.subItems ? selectedItem : { menuId: selectedItem.id, subMenuId: null }
    });
  };

  handlonSubItemSelected = selectedSubItem => {
    this.props.handleSubItemSelected(selectedSubItem);
    this.setState(prevState => ({
      selectedItem: { menuId: prevState.selectedItem.menuId, subMenuId: selectedSubItem.id }
    }));
  };

  render() {
    const { className, menuItems } = this.props;

    return (
      <Menu
        currentItemId={this.state.currentItemId}
        currentSubItemId={this.getHighlightedSubMenu(this.state.currentItemId, this.state.selectedItem)}
        handleItemSelected={this.handleonItemSelected}
        handleSubItemSelected={this.handlonSubItemSelected}
        className={className}
        menuItems={menuItems}
      />
    );
  }
}

MenuContainer.propTypes = {
  handleItemSelected: PropTypes.func.isRequired,
  handleSubItemSelected: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(menuItemPropTypes).isRequired,
  className: PropTypes.string
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
