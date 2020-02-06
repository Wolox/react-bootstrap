import React from 'react';
import PropTypes from 'prop-types';

import Loading from './components/loading';
import { TYPE_SPINNER } from './components/constants';
import { getDisplayName } from './utils';

export function withSpinner(WrappedComponent, customSpinner) {
  const { classNameContainer, classNameLoading, typeLoading, colorSpinner } = customSpinner;
  function Spinner({ loading, ...passThroughProps }) {
    return loading ? (
      <div className={classNameContainer}>
        <Loading className={classNameLoading} type={typeLoading} color={colorSpinner} />
      </div>
    ) : (
      <WrappedComponent {...passThroughProps} />
    );
  }

  Spinner.displayName = `Spinner(${getDisplayName(WrappedComponent)})`;

  Spinner.propTypes = {
    loading: PropTypes.bool,
    passThroughProps: PropTypes.object // eslint-disable-line react/forbid-prop-types
  };

  return Spinner;
}

withSpinner.propTypes = {
  customSpinner: PropTypes.shape({
    classNameContainer: PropTypes.string,
    classNameLoading: PropTypes.string,
    colorSpinner: PropTypes.string,
    typeLoading: PropTypes.oneOf(TYPE_SPINNER)
  }),
  WrappedComponent: PropTypes.node
};

withSpinner.defaultProps = {
  classNameContainer: ''
};
