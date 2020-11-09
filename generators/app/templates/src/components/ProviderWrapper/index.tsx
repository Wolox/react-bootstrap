import React, { useReducer } from 'react';

interface ActionType {
  type: string;
}

interface Props<U extends {}, V> {
  Context: React.Context<any>;
  reducer: React.Reducer<U, V>;
  initialState: U;
}

const withProvider = <T extends {}, U, V extends ActionType>({
  Context,
  reducer,
  initialState
}: Props<U, V>) => (WrappedComponent: React.ComponentType<T>) => {
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
