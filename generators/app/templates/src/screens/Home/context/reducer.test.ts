import { actionCreators, reducer } from './reducer';

const EMPTY_STATE = { tech: '' };

test('setTech action sets the new tech', () => {
  const newTech = 'Angular';
  const newState = reducer(EMPTY_STATE, actionCreators.setTech(newTech));
  expect(newState).toEqual({ tech: newTech });
});

test('setTech action sets the new tech when there is a tech', () => {
  const initialState = { tech: 'Angular' };
  const newTech = 'Vue';
  const newState = reducer(initialState, actionCreators.setTech(newTech));
  expect(newState).toEqual({ tech: newTech });
});

test('resetTech action removes the tech', () => {
  const initialState = { tech: 'Svelte' };
  const newState = reducer(initialState, actionCreators.resetTech());
  expect(newState).toEqual({ tech: '' });
});
