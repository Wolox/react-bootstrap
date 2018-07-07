import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import Button from '../Button';

import { SEARCH_FORM } from './constants';

function SearchBar({ stylesSearchButton, textButtonSearch, className, children }) {
  return (
    <div className={className}>
      {children}
      <Button.button type="submit" className={stylesSearchButton}>
        {textButtonSearch}
      </Button.button>
    </div>
  );
}

SearchBar.propTypes = {
  textButtonSearch: PropTypes.string,
  className: PropTypes.string,
  stylesSearchButton: PropTypes.string
};

SearchBar.defaultProps = {
  className: '',
  stylesSearchButton: ''
};

export default reduxForm({
  form: SEARCH_FORM
})(SearchBar);
