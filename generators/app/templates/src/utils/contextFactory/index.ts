import { createContext, useContext, Dispatch, Reducer } from 'react';

import { ActionWithType } from './interfaces';
import withProvider from './withProvider';

export default <State, Action extends ActionWithType>(
  reducer: Reducer<State, Action>,
  initialState: State
) => {
  const StateContext = createContext<State>({ ...initialState });
  // eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function
  const DispatchContext = createContext<Dispatch<Action>>((() => {}) as Dispatch<Action>);

  const useSelector = <T>(selector: (arg: State) => T) => {
    const state = useContext(StateContext);
    return selector(state);
  };

  const useDispatch = () => {
    const dispatch = useContext(DispatchContext);
    return dispatch;
  };

  // TODO: Create screenFactory that wraps provider with memo?? or add param to context factory
  const withContext = withProvider({
    stateContext: StateContext,
    dispatchContext: DispatchContext,
    reducer,
    initialState
  });

  // eslint-disable-next-line @typescript-eslint/naming-convention
  return { withContext, useSelector, useDispatch };
};
