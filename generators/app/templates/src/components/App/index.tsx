import React from 'react';

import { withContext } from 'contexts/UserContext';
import Routes from 'components/Routes';
import 'scss/application.scss';

function App() {
  return <Routes />;
}

export default withContext(App);
