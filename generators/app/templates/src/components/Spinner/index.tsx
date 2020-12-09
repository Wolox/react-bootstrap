import React from 'react';
import { SpinnerProps } from 'react-spinkit';

import { getDisplayName } from 'utils/displayName';

import Loading from './components/loading';

interface WithSpinnerProps {
  loading: boolean;
}

interface SpinnerConfig extends SpinnerProps {
  classNameContainer?: string;
}

// {} is valid as props
// eslint-disable-next-line @typescript-eslint/ban-types
export const withSpinner = (spinnerConfig: SpinnerConfig = {}) => <P extends {}>(
  WrappedComponent: React.ComponentType<P>
): React.FC<WithSpinnerProps & P> => {
  function WithSpinner({ loading, ...passThroughProps }: WithSpinnerProps) {
    const { classNameContainer = '', ...rest } = spinnerConfig;
    return loading ? (
      <div className={classNameContainer}>
        <Loading {...rest} />
      </div>
    ) : (
      <WrappedComponent {...(passThroughProps as P)} />
    );
  }
  WithSpinner.displayName = `WithSpinner(${getDisplayName(WrappedComponent)})`;
  return WithSpinner;
};
