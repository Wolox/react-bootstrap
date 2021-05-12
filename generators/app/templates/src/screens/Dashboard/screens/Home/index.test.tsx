import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { actionCreators as authActions, ActionTypes, ResetUser } from 'contexts/UserContext/reducer';
import { withContextProvider as withUserContext } from 'contexts/UserContext';
import * as AuthService from 'services/AuthService';

import { withContextProvider as withTechContext } from './context';

import Home from '.';

describe('Home component', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('logouts when clicks logout button', async () => {
    const logout = jest.fn();
    const resetUser: () => ResetUser = jest.fn(() => ({ type: ActionTypes.RESET_USER }));
    const removeCurrentUserToken = jest.fn();
    jest.spyOn(AuthService, 'logout').mockImplementationOnce(logout);
    jest.spyOn(authActions, 'resetUser').mockImplementationOnce(resetUser);
    jest.spyOn(AuthService, 'removeCurrentUserToken').mockImplementationOnce(removeCurrentUserToken);

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const RenderHOC = withUserContext(Home);
    render(<RenderHOC />);

    const logoutButton = screen.getByRole('button', { name: /Home:logout/ });
    userEvent.click(logoutButton);

    await waitFor(() => expect(logout).toHaveBeenCalled());
    expect(resetUser).toHaveBeenCalled();
    expect(removeCurrentUserToken).toHaveBeenCalled();
  });

  test('sets the tech when tech is typed', () => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const RenderHOC = withTechContext(Home);
    render(<RenderHOC />);
    userEvent.type(screen.getByPlaceholderText(/Home:newTech/), 'Angular');
    userEvent.click(screen.getByRole('button', { name: /Home:setNewTech/ }));
    expect(screen.queryByText(/Home:techIs {"tech":"Angular"}/)).toBeInTheDocument();
  });

  test('does not set tech if not typed', () => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const RenderHOC = withTechContext(Home);
    render(<RenderHOC />);
    userEvent.type(screen.getByPlaceholderText(/Home:newTech/), '');
    userEvent.click(screen.getByRole('button', { name: /Home:setNewTech/ }));
    expect(screen.queryByText(/Home:techIs {"tech":"React"}/)).toBeInTheDocument();
  });

  test('Calls change language', () => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const RenderHOC = withTechContext(Home);
    render(<RenderHOC />);
    // Calls once for first lang change
    userEvent.click(screen.getByRole('button', { name: /Home:changeLang/ }));
    expect(screen.queryByText(/Home:loggedIn/)).toBeInTheDocument();
    // Calls again for returning lang to original
    userEvent.click(screen.getByRole('button', { name: /Home:changeLang/ }));
    expect(screen.queryByText(/Home:loggedIn/)).toBeInTheDocument();
  });
});
