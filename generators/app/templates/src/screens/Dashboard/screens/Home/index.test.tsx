import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as AuthService from 'services/AuthService';

import Home from '.';

const reactI18next = jest.requireMock('react-i18next');

describe('Home component', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('logouts when clicks logout button', async () => {
    const logout = jest.fn();
    const removeCurrentUserToken = jest.fn();
    jest.spyOn(AuthService, 'logout').mockImplementationOnce(logout);
    jest.spyOn(AuthService, 'removeCurrentUserToken').mockImplementationOnce(removeCurrentUserToken);

    render(<Home />);

    const logoutButton = screen.getByRole('button', { name: /Home:logout/ });
    userEvent.click(logoutButton);

    await waitFor(() => expect(logout).toHaveBeenCalled());
    expect(removeCurrentUserToken).toHaveBeenCalled();
  });

  test('sets the tech when tech is typed', async () => {
    render(<Home />);

    userEvent.type(screen.getByPlaceholderText(/Home:newTech/), 'Angular');
    userEvent.click(screen.getByRole('button', { name: /Home:setNewTech/ }));
    await waitFor(() => {
      expect(screen.getByText(/Home:techIs {"tech":"Angular"}/)).toBeInTheDocument();
    });
  });

  test('does not set tech if not typed', async () => {
    render(<Home />);
    userEvent.click(screen.getByRole('button', { name: /Home:setNewTech/ }));
    await waitFor(() => {
      expect(screen.getByText(/Home:techIs {"tech":"React"}/)).toBeInTheDocument();
    });
  });

  test('Calls change language from es to en', async () => {
    const changeLanguage = jest.fn();
    const spy = jest.spyOn(reactI18next, 'useTranslation').mockReturnValue({
      t: (key: string) => key,
      i18n: {
        changeLanguage,
        language: 'es'
      }
    });

    const { rerender } = render(<Home />);

    const logoutButton = screen.getByRole('button', { name: /Home:changeLang/ });
    // Calls once for first lang change to "en"
    userEvent.click(logoutButton);
    await waitFor(() => expect(changeLanguage).toHaveBeenCalledWith('en'));
    spy.mockClear();

    spy.mockReturnValue({
      t: (key: string) => key,
      i18n: {
        changeLanguage,
        language: 'en'
      }
    });

    // Rerender the component again to take the new spy mock
    rerender(<Home />);
    // Calls a second time to change lang to return lang to "es"
    userEvent.click(logoutButton);
    await waitFor(() => expect(changeLanguage).toHaveBeenCalledWith('es'));

    spy.mockClear();
  });
});
