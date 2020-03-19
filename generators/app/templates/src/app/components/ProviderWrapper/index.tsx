import React, { useReducer } from 'react';

interface Props<U extends {}> {
  Context: React.Context<any>;
  reducer: React.Reducer<U, { type: string }>;
  initialState: U;
}

const withProvider = <T extends {}, U>({ Context, reducer, initialState }: Props<U>) => (
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
