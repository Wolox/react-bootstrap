import { createContext, useContext, Dispatch } from 'react';

export const contextFactory = <State, Action>(initialState: State) => {
  interface Store {
    state: State;
    dispatch: Dispatch<Action>;
  }

  const Context = createContext<Store>({
    state: { ...initialState },
    // eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function
    dispatch: () => {}
  });

  const useSelector = <T>(selector: (arg: State) => T) => {
    const { state } = useContext(Context);
    return selector(state);
  };

  const useDispatch = () => {
    const { dispatch } = useContext(Context);
    return dispatch;
  };

  // eslint-disable-next-line @typescript-eslint/naming-convention
  return { useSelector, Context, useDispatch };
};
