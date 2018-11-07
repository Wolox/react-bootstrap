import React from 'react';
import PropTypes from 'prop-types';

import Loading from './components/loading';
import { TYPE_SPINNER } from './components/constants';

export function withSpinner({
  WrappedComponent,
  classNameContainer,
  classNameLoading,
  typeLoading,
  colorSpinner
}) {
  function Spinner({ loading, ...props }) {
    return loading ? (
      <div className={classNameContainer}>
        <Loading className={classNameLoading} type={typeLoading} color={colorSpinner} />
      </div>
    ) : (
      <WrappedComponent {...props} />
    );
  }

  Spinner.propTypes = {
    loading: PropTypes.bool,
    props: PropTypes.object // eslint-disable-line react/forbid-prop-types
  };

  return Spinner;
}

withSpinner.propTypes = {
  classNameContainer: PropTypes.string,
  classNameLoading: PropTypes.string,
  colorSpinner: PropTypes.string,
  typeLoading: PropTypes.oneOf(TYPE_SPINNER),
  WrappedComponent: PropTypes.node
};

withSpinner.defaultProps = {
  classNameContainer: ''
};
