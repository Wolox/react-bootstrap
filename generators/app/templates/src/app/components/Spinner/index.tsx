import React from 'react';

import Loading from './components/loading';
import { TYPE_SPINNER } from './components/constants';
import { getDisplayName } from './utils';

interface SpinnerProps {
  loading: boolean;
}

interface CustomSpinner {
  classNameContainer?: string;
  classNameLoading?: string;
  colorSpinner?: string;
  typeLoading?: typeof TYPE_SPINNER[number];
}

export function withSpinner<P>(
  WrappedComponent: React.ComponentType<P>,
  customSpinner: CustomSpinner = {}
): React.FC<SpinnerProps & P> {
  const { classNameContainer = '', classNameLoading, typeLoading, colorSpinner } = customSpinner;
  function Spinner({ loading, ...passThroughProps }: SpinnerProps) {
    return loading ? (
      <div className={classNameContainer}>
        <Loading className={classNameLoading} type={typeLoading} color={colorSpinner} />
      </div>
    ) : (
      <WrappedComponent {...passThroughProps as P} />
    );
  }
  Spinner.displayName = `Spinner(${getDisplayName(WrappedComponent)})`;
  return Spinner;
}
