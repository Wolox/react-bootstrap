import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Switch } from 'react-router-dom';

import RouteItem from './RouteItem';

function TestScreen() {
  return <span>Screen</span>;
}

// eslint-disable-next-line react/no-multi-comp
function RedirectScreen() {
  return <span>Redirect Screen</span>;
}

beforeEach(() => {
  window.history.pushState({}, '', '/screen');
});

test('renders the route with the component when there is no redirect path', () => {
  render(<RouteItem path="/screen" component={TestScreen} />, { wrapper: BrowserRouter });
  const screenText = screen.queryByText('Screen');
  expect(screenText).toBeInTheDocument();
});

test('redirects to another path when there is a redirect path', () => {
  render(
    <Switch>
      <RouteItem path="/screen" component={TestScreen} redirectTo="/redirect-path" />
      <RouteItem path="/redirect-path" component={RedirectScreen} />
    </Switch>,
    { wrapper: BrowserRouter }
  );
  const screenText = screen.queryByText('Screen');
  const redirectText = screen.queryByText('Redirect Screen');
  expect(screenText).toBeNull();
  expect(redirectText).toBeInTheDocument();
});
