/* eslint-disable max-nested-callbacks */
import { renderHook } from '@testing-library/react-hooks';
import { useContext } from 'react';

import contextFactory from '.';

const INITIAL_STATE = { foo: { bar: 2 } };
const reducer = () => INITIAL_STATE;

// TODO: Tuve que cambiar los tests, tal vez tenga sentido hacerlos más independientes de la funcionalidad?
test('useSelector returns the state', () => {
  const { useSelector } = contextFactory(reducer, INITIAL_STATE);
  const { result } = renderHook(() => useSelector(state => state));
  expect(result.current).toEqual(INITIAL_STATE);
});

test("useDispatch returns the context's dispatch", () => {
  const { useDispatch } = contextFactory(reducer, INITIAL_STATE);
  const {
    result: { current: hookDispatch }
  } = renderHook(() => useDispatch());
  const {
    result: { current: contextValue }
  } = renderHook(() => useContext(DispatchContext));
  expect(hookDispatch).toEqual(contextValue);
});
