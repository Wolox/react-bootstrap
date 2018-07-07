import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './layout';

function SearchBarContainer({ stylesSearchButton, textButtonSearch, className, initialValues, getElements }) {
  const handleSubmit = formValues => getElements(formValues);
  return (
    <SearchBar
      onSubmit={handleSubmit}
      stylesSearchButton={stylesSearchButton}
      textButtonSearch={textButtonSearch}
      className={className}
      initialValues={initialValues}
    >
      {this.props.children}
    </SearchBar>
  );
}

SearchBarContainer.propTypes = {
  initialValues: PropTypes.object, // eslint-disable-line
  getElements: PropTypes.func.isRequired,
  textButtonSearch: PropTypes.string,
  className: PropTypes.string,
  stylesSearchButton: PropTypes.string
};

SearchBarContainer.defaultProps = {
  className: '',
  textButtonSearch: 'Buscar'
};

export default SearchBarContainer;
