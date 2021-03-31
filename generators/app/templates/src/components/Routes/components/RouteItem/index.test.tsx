import { render, screen } from '@testing-library/react';
import { Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import RouteItem from '.';

function TestScreen() {
  return <span>Screen</span>;
}

// eslint-disable-next-line react/no-multi-comp
function RedirectScreen() {
  return <span>Redirect Screen</span>;
}

const history = createMemoryHistory();

beforeEach(() => {
  history.push('/screen');
});

test('renders the route with the component when there is no redirect path', () => {
  render(
    <Router history={history}>
      <RouteItem path="/screen" component={TestScreen} />
    </Router>
  );
  const screenText = screen.queryByText('Screen');
  expect(screenText).toBeInTheDocument();
});

test('redirects to another path when there is a redirect path', () => {
  render(
    <Router history={history}>
      <Switch>
        <RouteItem path="/screen" component={TestScreen} redirectTo="/redirect-path" />
        <RouteItem path="/redirect-path" component={RedirectScreen} />
      </Switch>
    </Router>
  );
  const screenText = screen.queryByText('Screen');
  const redirectText = screen.queryByText('Redirect Screen');
  expect(screenText).toBeNull();
  expect(redirectText).toBeInTheDocument();
});
