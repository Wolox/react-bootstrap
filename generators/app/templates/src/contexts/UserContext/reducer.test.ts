import { actionCreators, reducer } from './reducer';

const EMPTY_STATE = { user: null };

test('setUser action sets the new user when there is no user', () => {
  const newUser = { id: 1, sessionToken: 'aToken' };
  const newState = reducer(EMPTY_STATE, actionCreators.setUser(newUser));
  expect(newState).toEqual({ user: newUser });
});

test('setUser action sets the new user when there is a user user', () => {
  const initialState = { user: { id: 1, sessionToken: 'token1' } };
  const newUser = { id: 2, sessionToken: 'token2' };
  const newState = reducer(initialState, actionCreators.setUser(newUser));
  expect(newState).toEqual({ user: newUser });
});

test('resetUser action removes the user', () => {
  const initialState = { user: { id: 1, sessionToken: 'token1' } };
  const newState = reducer(initialState, actionCreators.resetUser());
  expect(newState).toEqual({ user: null });
});
