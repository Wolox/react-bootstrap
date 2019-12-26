import React from 'react';
import PropTypes from 'prop-types';

function TextArea({ className, onChange, onBlur, onFocus, value, name }) {
  return (
    <textarea
      className={className}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      name={name}
      data-testid={name}
    />
  );
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func
};

TextArea.defaultProps = {
  className: ''
};

export default TextArea;
