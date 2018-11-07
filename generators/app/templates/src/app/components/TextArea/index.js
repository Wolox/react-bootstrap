import React from 'react';
import PropTypes from 'prop-types';

function TextArea({ className, onChange, onBlur, onFocus, value }) {
  return (
    <textarea className={className} onChange={onChange} onBlur={onBlur} onFocus={onFocus} value={value} />
  );
}

TextArea.propTypes = {
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
