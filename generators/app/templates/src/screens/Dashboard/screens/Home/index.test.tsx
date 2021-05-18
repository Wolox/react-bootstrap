import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { actionCreators as authActions, ActionTypes, ResetUser } from 'contexts/UserContext/reducer';
import { withContextProvider as withUserContext } from 'contexts/UserContext';
import * as AuthService from 'services/AuthService';

import { withContextProvider as withTechContext } from './context';

import Home from '.';

/* eslint-disable @typescript-eslint/naming-convention */
const HomeWithUserContext = withUserContext(Home);
const HomeWithTechContext = withTechContext(Home);
/* eslint-enable @typescript-eslint/naming-convention */

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

    render(<HomeWithUserContext />);

    const logoutButton = screen.getByRole('button', { name: /Home:logout/ });
    userEvent.click(logoutButton);

    await waitFor(() => expect(logout).toHaveBeenCalled());
    expect(resetUser).toHaveBeenCalled();
    expect(removeCurrentUserToken).toHaveBeenCalled();
  });

  test('sets the tech when tech is typed', async () => {
    render(<HomeWithTechContext />);

    userEvent.type(screen.getByPlaceholderText(/Home:newTech/), 'Angular');
    await waitFor(() => userEvent.click(screen.getByRole('button', { name: /Home:setNewTech/ })));
    expect(screen.queryByText(/Home:techIs {"tech":"Angular"}/)).toBeInTheDocument();
  });

  test('does not set tech if not typed', async () => {
    render(<HomeWithTechContext />);

    userEvent.type(screen.getByPlaceholderText(/Home:newTech/), '');
    await waitFor(() => userEvent.click(screen.getByRole('button', { name: /Home:setNewTech/ })));
    expect(screen.queryByText(/Home:techIs {"tech":"React"}/)).toBeInTheDocument();
  });

  test('Calls change language from es to en', async () => {
    render(<HomeWithTechContext />);

    // Calls once for first lang change to en
    userEvent.click(screen.getByRole('button', { name: /Home:changeLang/ }));
    await waitFor(() => expect(screen.queryByText(/Home:loggedIn/)).toBeInTheDocument());
  });

  test('Calls change language from en to es', async () => {
    render(<HomeWithTechContext />);

    // Calls once for changing mocked en lang to es
    userEvent.click(screen.getByRole('button', { name: /Home:changeLang/ }));
    await waitFor(() => expect(screen.queryByText(/Home:loggedIn/)).toBeInTheDocument());
  });
});
