import { renderHook } from '@testing-library/react-hooks';

import { useMountedRef } from './useMountedRef';

test('after it mounts it returns true', () => {
  const { result } = renderHook(() => useMountedRef());
  expect(result.current.current).toBe(true);
});

test('after it unmounts it returns false', () => {
  const { result, unmount } = renderHook(() => useMountedRef());
  unmount();
  expect(result.current.current).toBe(false);
});
