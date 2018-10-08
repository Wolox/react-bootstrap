import React from 'react';
import PropTypes from 'prop-types';

function TextArea({ className, onChange, onBlur, onFocus, value }) {
  return (
    <textarea className={className} onChange={onChange} onBlur={onBlur} onFocus={onFocus} value={value} />
  );
}

TextArea.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string.isRequired
};

TextArea.defaultProps = {
  className: ''
};

export default TextArea;
