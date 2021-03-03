/* eslint-disable max-nested-callbacks */
import { renderHook } from '@testing-library/react-hooks';
import { useContext } from 'react';

import { contextFactory } from './context';

const INITIAL_STATE = { foo: { bar: 2 } };

test('useSelector returns the state', () => {
  const { useSelector } = contextFactory(INITIAL_STATE);
  const { result } = renderHook(() => useSelector((state) => state));
  expect(result.current).toEqual(INITIAL_STATE);
});

test('Context contains the initial value', () => {
  const { Context } = contextFactory(INITIAL_STATE);
  const {
    result: { current: contextValue }
  } = renderHook(() => useContext(Context));
  expect(contextValue.state).toEqual(INITIAL_STATE);
  expect(contextValue.dispatch).toBeTruthy();
});

test("useDispatch returns the context's dispatch", () => {
  const { useDispatch, Context } = contextFactory(INITIAL_STATE);
  const {
    result: { current: hookDispatch }
  } = renderHook(() => useDispatch());
  const {
    result: { current: contextValue }
  } = renderHook(() => useContext(Context));
  expect(hookDispatch).toEqual(contextValue.dispatch);
});
