import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './layout';

function SearchBarContainer({ textButtonSearch, className, initialValues, getElements }) {
  const handleSubmit = formValues => getElements(formValues);
  return (
    <SearchBar
      onSubmit={handleSubmit}
      textButtonSearch={textButtonSearch}
      className={className}
      initialValues={initialValues}
    >
      {this.props.children}
    </SearchBar>
  );
}

SearchBarContainer.propTypes = {
  initialValues: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  getElements: PropTypes.func.isRequired,
  textButtonSearch: PropTypes.string,
  className: PropTypes.string
};

export default SearchBarContainer;
