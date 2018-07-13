import React from 'react';
import PropTypes from 'prop-types';

function SearchBarContainer({ textButtonSearch, className, buttonClassName }) {
  return (
    <div className={className}>
    {children}
    <button className={buttonClassName} type="submit">
      {textButtonSearch}
    </button>
  </div>
  );
}

SearchBarContainer.propTypes = {
  textButtonSearch: PropTypes.string,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  children: PropTypes.node
};

SearchBarContainer.defaultProps = {
  className: '',
  buttonClassName: '',
  textButtonSearch: 'Buscar'
};

export default SearchBarContainer;
