import { render, screen } from '@testing-library/react';
import { HashRouter, Routes, useNavigate } from 'react-router-dom';

import RouteItem from '.';

function TestScreen() {
  return <span>Screen</span>;
}

// eslint-disable-next-line react/no-multi-comp
function RedirectScreen() {
  return <span>Redirect Screen</span>;
}

const history = useNavigate();

beforeEach(() => {
  history('/screen');
});

test('renders the route with the component when there is no redirect path', () => {
  render(
    <HashRouter>
      <RouteItem path="/screen" element={TestScreen} />
    </HashRouter>
  );
  const screenText = screen.queryByText('Screen');
  expect(screenText).toBeInTheDocument();
});

test('redirects to another path when there is a redirect path', () => {
  render(
    <HashRouter>
      <Routes>
        <RouteItem path="/screen" element={TestScreen} redirectTo="/redirect-path" />
        <RouteItem path="/redirect-path" element={RedirectScreen} />
      </Routes>
    </HashRouter>
  );
  const screenText = screen.queryByText('Screen');
  const redirectText = screen.queryByText('Redirect Screen');
  expect(screenText).toBeNull();
  expect(redirectText).toBeInTheDocument();
});
