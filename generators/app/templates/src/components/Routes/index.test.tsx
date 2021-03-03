import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import { StateContext } from 'contexts/UserContext';
import { UserState } from 'contexts/UserContext/reducer';

import PATHS from './paths';

import Routes from '.';

function WrappedRoutes({ userState }: { userState: UserState }) {
  return (
    <StateContext.Provider value={userState}>
      <Routes />
    </StateContext.Provider>
  );
}

// Since The BrowserRouter component is inside out Router, we can't use memory history.
// That's why I use window to navigate

describe('when there is a user', () => {
  const userState = { user: { id: 1, sessionToken: 'token' } };

  test('redirects to Home screen when being on the registration path', async () => {
    window.history.pushState({}, '', PATHS.registration);
    render(<WrappedRoutes userState={userState} />);
    await waitFor(() => expect(screen.getByText('You are logged in.')).toBeInTheDocument());
  });

  test('redirects to Home screen when being on the recover password path', async () => {
    window.history.pushState({}, '', PATHS.recoverPassword);
    render(<WrappedRoutes userState={userState} />);
    await waitFor(() => expect(screen.getByText('You are logged in.')).toBeInTheDocument());
  });

  test('redirects to Home screen when being on the login path', async () => {
    window.history.pushState({}, '', PATHS.login);
    render(<WrappedRoutes userState={userState} />);
    await waitFor(() => expect(screen.getByText('You are logged in.')).toBeInTheDocument());
  });

  test('shows Home screen when being on the home path', async () => {
    window.history.pushState({}, '', PATHS.home);
    render(<WrappedRoutes userState={userState} />);
    await waitFor(() => expect(screen.getByText('You are logged in.')).toBeInTheDocument());
  });
});

describe('when there is no user', () => {
  const userState = { user: null };

  test('shows Registration screen when being on the registration path', async () => {
    window.history.pushState({}, '', PATHS.registration);
    render(<WrappedRoutes userState={userState} />);
    await waitFor(() => expect(screen.getByText('registration')).toBeInTheDocument());
  });

  test('shows RecoverPassword screen when being on the recover password path', async () => {
    window.history.pushState({}, '', PATHS.recoverPassword);
    render(<WrappedRoutes userState={userState} />);
    await waitFor(() => expect(screen.getByText('recoverPassword')).toBeInTheDocument());
  });

  test('shows Login screen when being on the login path', async () => {
    window.history.pushState({}, '', PATHS.login);
    render(<WrappedRoutes userState={userState} />);
    await waitFor(() => expect(screen.getByText('login')).toBeInTheDocument());
  });

  test('redirects to Login screen when on the home path', async () => {
    window.history.pushState({}, '', PATHS.home);
    render(<WrappedRoutes userState={userState} />);
    await waitFor(() => expect(screen.getByText('login')).toBeInTheDocument());
  });
});
