import React, { useReducer } from 'react';

import '../scss/application.scss';

import Routes from './components/Routes';
import { globalReducer, INITIAL_STATE } from './reducer';
import { Context } from './context';

function App() {
  const [state, dispatch] = useReducer(globalReducer, INITIAL_STATE);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Routes />
    </Context.Provider>
  );
}

export default App;
