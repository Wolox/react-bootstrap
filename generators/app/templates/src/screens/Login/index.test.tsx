import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import 'mutationobserver-shim';

import Login from './index';

const mockSetStateUser = jest.fn();
const mockSetPersistantUser = jest.fn();

jest.mock('~contexts/UserContext/reducer', () => ({
  actionCreators: {
    setUser: (values: any) => mockSetStateUser(values)
  }
}));

jest.mock('~services/AuthService', () => ({
  login: () =>
    new Promise(resolve =>
      resolve({
        ok: true,
        data: { sessionToken: 'token', id: 1234 },
        problem: null,
        originalError: null
      })
    ),
  setCurrentUserToken: (values: any) => mockSetPersistantUser(values)
}));

describe('#Login', () => {
  const component = (
    <Router history={createMemoryHistory()}>
      <Login />
    </Router>
  );

  describe('when mounting', () => {
    it('shows valid content', () => {
      const { container } = render(component);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('when filling invalid fields without submitting', () => {
    it('does not show the field errors', async () => {
      const { container, getByLabelText } = render(component);
      const email = getByLabelText('Login:email');

      await fireEvent.change(email, { target: { value: 'invalid email' } });

      expect(container.innerHTML).not.toMatch('Login:emailFormatError');
    });
  });

  describe('when filling invalid email and no password and submitting', () => {
    it('shows the field errors', async () => {
      const { container, getByRole, getByLabelText } = render(component);
      const email = getByLabelText('Login:email');
      const form = getByRole('form', { name: 'login-form' });

      await fireEvent.change(email, { target: { value: 'invalid email' } });

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => fireEvent.submit(form));

      expect(container.innerHTML).toMatch('Login:emailFormatError');
      expect(container.innerHTML).toMatch('Login:required');
    });
  });

  describe('when empty email and no password and submitting', () => {
    it('shows the field errors', async () => {
      const { container, getByRole } = render(component);
      const form = getByRole('form', { name: 'login-form' });

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => fireEvent.submit(form));

      expect(container.innerHTML).toMatch('Login:required');
    });
  });

  describe('when valid email and password', () => {
    it('executes the request and saves user', async () => {
      const { getByRole, getByLabelText } = render(component);
      const email = getByLabelText('Login:email');
      const password = getByLabelText('Login:password');
      const form = getByRole('form', { name: 'login-form' });
      await fireEvent.change(email, { target: { value: 'someone@wolox.com' } });
      await fireEvent.change(password, { target: { value: 'myPassword' } });

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => fireEvent.submit(form));

      expect(mockSetStateUser).toHaveBeenCalledWith({ sessionToken: 'token', id: 1234 });
      expect(mockSetPersistantUser).toHaveBeenCalledWith({ sessionToken: 'token', id: 1234 });
    });
  });
});
