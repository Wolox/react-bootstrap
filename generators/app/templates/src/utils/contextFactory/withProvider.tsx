import React, { useReducer } from 'react';

import { ActionWithType } from './interfaces';

// {} is valid as props
// eslint-disable-next-line @typescript-eslint/ban-types
interface Props<State extends {}, Action> {
  stateContext: React.Context<State>;
  dispatchContext: React.Context<React.Dispatch<Action>>;
  reducer: React.Reducer<State, Action>;
  initialState: State;
}

// {} is valid as props
// eslint-disable-next-line @typescript-eslint/ban-types
const withProvider = <ComponentProps extends {}, State, Action extends ActionWithType>({
  stateContext: StateContext,
  dispatchContext: DispatchContext,
  reducer,
  initialState
}: Props<State, Action>) => (WrappedComponent: React.ComponentType<ComponentProps>) => {
  function ProviderWrapper(props: ComponentProps) {
    // TODO: Validate singleton?
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <WrappedComponent {...props} />
        </StateContext.Provider>
      </DispatchContext.Provider>
    );
  }

  return ProviderWrapper;
};

export default withProvider;
