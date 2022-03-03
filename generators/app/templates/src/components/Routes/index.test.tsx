import { render, screen } from '@testing-library/react';

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
// That's why we use window to navigate

describe('when there is a user', () => {
  const userState = { user: { id: 1, sessionToken: 'token' } };

  test('shows Home screen when being on the home path', async () => {
    window.history.pushState({}, '', PATHS.home);
    render(<WrappedRoutes userState={userState} />);
    expect(await screen.findByText(/Home:loggedIn/)).toBeInTheDocument();
  });
});

describe('when there is no user', () => {
  const userState = { user: null };

  test('redirects to Login screen when on the home path', async () => {
    window.history.pushState({}, '', PATHS.home);
    render(<WrappedRoutes userState={userState} />);
    expect(await screen.findByText(/login/)).toBeInTheDocument();
  });
});
