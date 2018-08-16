import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

function TextArea({ onChange, onBlur, onFocus, value }) {
  return (
    <textarea style={styles.textarea} onChange={onChange} onBlur={onBlur} onFocus={onFocus} value={value} />
  );
}

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string.isRequired
};

export default TextArea;
