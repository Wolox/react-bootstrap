import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

import RadioOption from './components/RadioOption';

const { Provider, Consumer } = createContext();

class RadioGroup extends Component {
  static option = props => (
    <Consumer>
      {({ selectedValue, name, disabled, onChange }) => (
        <RadioOption
          {...props}
          name={name}
          onChange={onChange}
          checked={selectedValue === props.value}
          disabled={disabled || props.disabled}
        />
      )}
    </Consumer>
  );

  state = { selectedValue: this.props.selectedValue };

  handleChange = event => {
    const { onChange } = this.props;
    this.setState({ selectedValue: event.target.value });
    if (onChange) {
      onChange(event);
    }
  };

  render() {
    const { className, name, disabled, children } = this.props;
    const { selectedValue } = this.state;
    const context = { selectedValue, name, disabled, onChange: this.handleChange };
    return (
      <div className={className}>
        <Provider value={context}>{children}</Provider>
      </div>
    );
  }
}

RadioGroup.defaultProps = {
  className: '',
  disabled: false
};

RadioGroup.propTypes = {
  className: PropTypes.string,
  selectedValue: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

export default RadioGroup;
