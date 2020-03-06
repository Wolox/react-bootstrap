import React, { useReducer } from 'react';

interface Props {
  Context: React.Context<any>;
  reducer: React.Reducer<any, { type: any }>;
  initialState: any;
}

const withProvider = <T extends any>({ Context, reducer, initialState }: Props) => (
  WrappedComponent: React.ComponentType<T>
) => {
  function ProviderWrapper(props: T) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <Context.Provider value={{ state, dispatch }}>
        <WrappedComponent {...props} />
      </Context.Provider>
    );
  }

  return ProviderWrapper;
};

export default withProvider;
