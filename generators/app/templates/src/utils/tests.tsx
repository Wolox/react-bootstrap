import React, { ReactNode, useReducer } from 'react';
import { mount } from 'enzyme';
import { Switch, BrowserRouter as Router } from 'react-router-dom';

import { globalReducer, INITIAL_STATE } from '~app/reducer';
import { Context } from '~app/context';

type Hook = () => any;

export const TestHook = ({ hook }: { hook: Hook }) => {
  hook();
  return null;
};

export const testHook = (hook: Hook) => {
  mount(<TestHook hook={hook} />);
};

interface Props {
  children: ReactNode;
}

export const RootComponent = ({ children }: Props) => {
  const [state, dispatch] = useReducer(globalReducer, INITIAL_STATE);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>{children}</Switch>
      </Router>
    </Context.Provider>
  );
};
