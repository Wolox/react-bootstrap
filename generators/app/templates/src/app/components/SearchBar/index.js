import React from 'react';
import PropTypes from 'prop-types';

function SearchBarContainer({ textButtonSearch, className }) {
  return (
    <div className={className}>
    {children}
    <button type="submit">
      {textButtonSearch}
    </button>
  </div>
  );
}

SearchBarContainer.propTypes = {
  textButtonSearch: PropTypes.string,
  className: PropTypes.string
};

SearchBarContainer.defaultProps = {
  className: '',
  textButtonSearch: 'Buscar'
};

export default SearchBarContainer;
