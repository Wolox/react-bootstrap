import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import Registration from './index';

const mockSetStateUser = jest.fn();
const mockSetPersistantUser = jest.fn();

jest.mock('~contexts/UserContext/reducer', () => ({
  actionCreators: {
    setUser: (values: any) => mockSetStateUser(values)
  }
}));

jest.mock('~services/AuthServices', () => ({
  signup: () =>
    new Promise(resolve =>
      resolve({
        ok: true,
        data: { sessionToken: 'token', id: 1234 },
        problem: null,
        originalError: null
      })
    ),
  setCurrentUser: (values: any) => mockSetPersistantUser(values)
}));

describe('#Registration', () => {
  const component = (
    <Router history={createMemoryHistory()}>
      <Registration />
    </Router>
  );

  const validValues = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'someEmail@wolox.com',
    password: 'aPassword'
  };

  describe('when mounting', () => {
    it('shows valid content', () => {
      const { container } = render(component);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('when values are empty and form is submitted', () => {
    it('shows the required message for each required field', async () => {
      const { getByRole, getByLabelText } = render(component);
      const firstName = await getByLabelText('firstName');
      const lastName = await getByLabelText('lastName');
      const email = await getByLabelText('email');
      const password = await getByLabelText('password');
      const passwordConfirmation = await getByLabelText('confirmPassword');
      const form = await getByRole('form', { name: 'registration-form' });

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => fireEvent.submit(form));

      expect(firstName.parentElement?.innerHTML).toMatch('requiredError');
      expect(lastName.parentElement?.innerHTML).toMatch('requiredError');
      expect(email.parentElement?.innerHTML).toMatch('requiredError');
      expect(password.parentElement?.innerHTML).toMatch('requiredError');
      expect(passwordConfirmation.parentElement?.innerHTML).toMatch('requiredError');
    });
  });

  describe('when email format is invalid and form is submitted', () => {
    it('shows the email error', async () => {
      const { getByRole, getByLabelText, getAllByRole } = render(component);
      const firstName = await getByLabelText('firstName');
      const lastName = await getByLabelText('lastName');
      const email = await getByLabelText('email');
      const password = await getByLabelText('password');
      const passwordConfirmation = await getByLabelText('confirmPassword');
      const form = await getByRole('form', { name: 'registration-form' });

      await fireEvent.change(firstName, { target: { value: validValues.firstName } });
      await fireEvent.change(lastName, { target: { value: validValues.lastName } });
      await fireEvent.change(email, { target: { value: 'invalid email' } });
      await fireEvent.change(password, { target: { value: validValues.password } });
      await fireEvent.change(passwordConfirmation, { target: { value: validValues.password } });

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => fireEvent.submit(form));
      const errors = await getAllByRole('alert');

      expect(email.parentElement?.innerHTML).toMatch('emailFormatError');
      expect(errors.length).toBe(1);
    });
  });

  describe('when password length is too short and form is submitted', () => {
    it('shows the password error', async () => {
      const { getByRole, getByLabelText, getAllByRole } = render(component);
      const firstName = await getByLabelText('firstName');
      const lastName = await getByLabelText('lastName');
      const email = await getByLabelText('email');
      const password = await getByLabelText('password');
      const passwordConfirmation = await getByLabelText('confirmPassword');
      const form = await getByRole('form', { name: 'registration-form' });

      await fireEvent.change(firstName, { target: { value: validValues.firstName } });
      await fireEvent.change(lastName, { target: { value: validValues.lastName } });
      await fireEvent.change(email, { target: { value: validValues.email } });
      await fireEvent.change(password, { target: { value: 'short' } });
      await fireEvent.change(passwordConfirmation, { target: { value: 'short' } });

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => fireEvent.submit(form));
      const errors = await getAllByRole('alert');

      expect(password.parentElement?.innerHTML).toMatch('passwordLengthError');
      expect(errors.length).toBe(1);
    });
  });

  describe('when password confirmation does not match password and form is submitted', () => {
    it('shows the password confirmation error', async () => {
      const { getByRole, getByLabelText, getAllByRole } = render(component);
      const firstName = await getByLabelText('firstName');
      const lastName = await getByLabelText('lastName');
      const email = await getByLabelText('email');
      const password = await getByLabelText('password');
      const passwordConfirmation = await getByLabelText('confirmPassword');
      const form = await getByRole('form', { name: 'registration-form' });

      await fireEvent.change(firstName, { target: { value: validValues.firstName } });
      await fireEvent.change(lastName, { target: { value: validValues.lastName } });
      await fireEvent.change(email, { target: { value: validValues.email } });
      await fireEvent.change(password, { target: { value: validValues.password } });
      await fireEvent.change(passwordConfirmation, { target: { value: `${validValues.password}a` } });

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => fireEvent.submit(form));

      const errors = await getAllByRole('alert');

      expect(passwordConfirmation.parentElement?.innerHTML).toMatch('confirmPasswordError');
      expect(errors.length).toBe(1);
    });
  });

  describe('when values are valid and form is submitted', () => {
    it('created the user', async () => {
      const { getByRole, getByLabelText } = render(component);
      const firstName = await getByLabelText('firstName');
      const lastName = await getByLabelText('lastName');
      const email = await getByLabelText('email');
      const password = await getByLabelText('password');
      const passwordConfirmation = await getByLabelText('confirmPassword');
      const form = await getByRole('form', { name: 'registration-form' });

      await fireEvent.change(firstName, { target: { value: validValues.firstName } });
      await fireEvent.change(lastName, { target: { value: validValues.lastName } });
      await fireEvent.change(email, { target: { value: validValues.email } });
      await fireEvent.change(password, { target: { value: validValues.password } });
      await fireEvent.change(passwordConfirmation, { target: { value: validValues.password } });

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => fireEvent.submit(form));

      expect(mockSetStateUser).toHaveBeenCalled();
      expect(mockSetStateUser).toHaveBeenCalledWith({ sessionToken: 'token', id: 1234 });
      expect(mockSetPersistantUser).toHaveBeenCalled();
      expect(mockSetPersistantUser).toHaveBeenCalledWith({ sessionToken: 'token', id: 1234 });
    });
  });
});
