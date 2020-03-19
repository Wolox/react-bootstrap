import React, { ReactNode, useReducer } from 'react';
import { mount } from 'enzyme';
import { Switch, BrowserRouter as Router } from 'react-router-dom';

import { Context } from '~contexts/UserContext';
import { reducer, INITIAL_STATE } from '~contexts/UserContext/reducer';

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
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>{children}</Switch>
      </Router>
    </Context.Provider>
  );
};
