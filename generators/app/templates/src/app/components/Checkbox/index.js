import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Checkbox from './layout';

class CheckboxContainer extends Component {
  state = { isChecked: this.props.isChecked };

  handleToggle = event => {
    const { onChange } = this.props;
    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));
    if (onChange) {
      onChange(event);
    }
  };

  render() {
    const { className, inputClassName, labelClassName, label, name, disabled, required } = this.props;
    const { isChecked } = this.state;
    return (
      <Checkbox
        className={className}
        inputClassName={inputClassName}
        labelClassName={labelClassName}
        label={label}
        name={name}
        isChecked={isChecked}
        onToggle={this.handleToggle}
        disabled={disabled}
        required={required}
      />
    );
  }
}

CheckboxContainer.defaultProps = {
  isChecked: false
};

CheckboxContainer.propTypes = {
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  isChecked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool
};

export default CheckboxContainer;
