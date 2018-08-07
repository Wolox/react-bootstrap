import React from 'react';
import PropTypes from 'prop-types';

import Loading from './components/loading';

export function withSpinner({
  WrappedComponent,
  classNameContainer,
  classNameLoading,
  idLoading,
  colorSpinner
}) {
  function Spinner(props) {
    const { loading } = props;
    return loading ? (
      <div className={classNameContainer}>
        <Loading className={classNameLoading} id={idLoading} colorSpinner={colorSpinner} />
      </div>
    ) : (
      <WrappedComponent {...props} />
    );
  }

  Spinner.propTypes = {
    loading: PropTypes.bool
  };

  return Spinner;
}

withSpinner.propTypes = {
  WrappedComponent: PropTypes.node,
  classNameContainer: PropTypes.string,
  classNameLoading: PropTypes.string,
  idLoading: PropTypes.number,
  colorSpinner: PropTypes.string
};

withSpinner.defaultProps = {
  classNameContainer: ''
};
