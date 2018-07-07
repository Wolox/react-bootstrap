import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import { SEARCH_FORM } from './constants';

function SearchBar({ textButtonSearch, className, children }) {
  return (
    <div className={className}>
      {children}
      <button type="submit">
        {textButtonSearch}
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  textButtonSearch: PropTypes.string,
  className: PropTypes.string
};

SearchBar.defaultProps = {
  className: '',
  textButtonSearch: 'Buscar'
};

export default reduxForm({
  form: SEARCH_FORM
})(SearchBar);
