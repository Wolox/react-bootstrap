import React from 'react';

import Loading from './components/loading';
// import { TYPE_SPINNER } from './components/constants';

interface WithLoadingOptions {
  classNameContainer?: string;
  classNameLoading?: string;
  typeLoading?:
    | 'three-bounce'
    | 'circle'
    | 'double-bounce'
    | 'ball-clip-rotate'
    | 'wandering-cubes'
    | 'chasing-dots'
    | 'cube-grid'
    | 'wordpress'
    | 'folding-cube'
    | 'ball-triangle-path'
    | 'ball-pulse-sync';
  colorSpinner?: string;
}

interface WithLoadingProps {
  loading: Boolean;
}

export function withSpinner({
  classNameContainer,
  classNameLoading,
  typeLoading,
  colorSpinner
}: WithLoadingOptions = {}) {
  return <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    function Spinner({ loading, ...props }: P & WithLoadingProps) {
      return loading ? (
        <div className={classNameContainer}>
          <Loading className={classNameLoading} type={typeLoading} color={colorSpinner} />
        </div>
      ) : (
        <WrappedComponent {...props as P} />
      );
    }

    return Spinner;
  };
}

withSpinner.defaultProps = {
  classNameContainer: ''
};
