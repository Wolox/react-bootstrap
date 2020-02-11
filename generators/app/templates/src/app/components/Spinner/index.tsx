import React from 'react';
import { SpinnerProps } from 'react-spinkit';

import Loading from './components/loading';
import { getDisplayName } from './utils';

interface WithSpinnerProps {
  loading: boolean;
}

interface CustomSpinner extends SpinnerProps {
  classNameContainer?: string;
}

export function withSpinner<P>(
  WrappedComponent: React.ComponentType<P>,
  customSpinner: CustomSpinner = {}
): React.FC<WithSpinnerProps & P> {
  const { classNameContainer = '', ...rest } = customSpinner;
  function WithSpinnerProps({ loading, ...passThroughProps }: WithSpinnerProps) {
    return loading ? (
      <div className={classNameContainer}>
        <Loading {...rest} />
      </div>
    ) : (
        <WrappedComponent {...passThroughProps as P} />
      );
  }
  WithSpinnerProps.displayName = `Spinner(${getDisplayName(WrappedComponent)})`;
  return WithSpinnerProps;
}
