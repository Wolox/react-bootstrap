import { actionCreators, reducer } from './reducer';

const EMPTY_STATE = { tech: '' };

test('setTech action sets the new tech', () => {
  const newtech = 'Angular';
  const newState = reducer(EMPTY_STATE, actionCreators.setTech(newtech));
  expect(newState).toEqual({ tech: newtech });
});

test('setTech action sets the new tech when there is a tech', () => {
  const initialState = { tech: 'Angular' };
  const newTech = 'Vue';
  const newState = reducer(initialState, actionCreators.setTech(newTech));
  expect(newState).toEqual({ tech: newTech });
});

test('resettech action removes the tech', () => {
  const initialState = { tech: 'Svelte' };
  const newState = reducer(initialState, actionCreators.resetTech());
  expect(newState).toEqual({ tech: '' });
});
