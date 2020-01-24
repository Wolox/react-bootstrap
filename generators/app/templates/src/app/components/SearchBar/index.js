import React from 'react';
import PropTypes from 'prop-types';

function SearchBarContainer({
  textButtonSearch,
  className,
  formClassName,
  buttonClassName,
  handleSubmit,
  children
}) {
  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className={formClassName}>
        {children}
        <button className={buttonClassName} type="submit">
          {textButtonSearch}
        </button>
      </form>
    </div>
  );
}

SearchBarContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  buttonClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  formClassName: PropTypes.string,
  textButtonSearch: PropTypes.string
};

SearchBarContainer.defaultProps = {
  buttonClassName: '',
  className: '',
  textButtonSearch: 'Buscar'
};

export default SearchBarContainer;
