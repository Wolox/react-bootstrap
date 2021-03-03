/* eslint-disable max-nested-callbacks */
import { renderHook } from '@testing-library/react-hooks';
import { useContext } from 'react';

import { INITIAL_STATE } from './reducer';

import { useSelector, useDispatch, Context } from '.';

describe('When wrapping a component with the context', () => {
  test('useSelector returns the state', () => {
    const { result } = renderHook(() => useSelector((state) => state));
    expect(result.current).toEqual(INITIAL_STATE);
  });

  test('Context contains the initial value', () => {
    const {
      result: { current: contextValue }
    } = renderHook(() => useContext(Context));
    expect(contextValue.state).toEqual(INITIAL_STATE);
    expect(contextValue.dispatch).toBeTruthy();
  });

  test("useDispatch returns the context's dispatch", () => {
    const {
      result: { current: hookDispatch }
    } = renderHook(() => useDispatch());
    const {
      result: { current: contextValue }
    } = renderHook(() => useContext(Context));
    expect(hookDispatch).toEqual(contextValue.dispatch);
  });
});
