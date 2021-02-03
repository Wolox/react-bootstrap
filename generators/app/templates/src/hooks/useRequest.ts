import { useState, useEffect, useCallback } from 'react';
import { ApiErrorResponse, ApiOkResponse, PROBLEM_CODE, ApiResponse } from 'apisauce';

import { Nullable } from 'utils/types';

import { useMountedRef } from './useMountedRef';

export type Error<E> = { problem: PROBLEM_CODE; errorData?: E };
type Request<P, D, E> = (params: P) => Promise<ApiResponse<D, E>>;
type Success<D> = (data?: D) => void;
type Failure<E> = (error: Error<E>) => void;
type PostFetch<T, E> = (response: T | E) => void;

interface AsyncRequestHookParams<P, D, E, T> {
  request: Request<P, D, E>;
  withPostSuccess?: Success<T>;
  withPostFailure?: Failure<E>;
  initialState?: T | null;
  withPostFetch?: PostFetch<T, E>;
  transformResponse?: (response: D | E) => T;
}

interface AsyncRequestHookParamsWithPayload<P, D, E, T> extends AsyncRequestHookParams<P, D, E, T> {
  payload: P;
}
interface AsyncRequest<P, D, E> {
  values: P;
  request: Request<P, D, E>;
  onPrefetch: () => void;
  onSuccess: Success<D>;
  onError: Failure<E>;
  onPostFetch: PostFetch<ApiOkResponse<D>, ApiErrorResponse<E>>;
}
const executeAsyncRequest = async <P, D, E>({
  values,
  request,
  onPrefetch,
  onSuccess,
  onError,
  onPostFetch
}: AsyncRequest<P, D, E>) => {
  onPrefetch();
  const response = await request(values);
  if (response.ok) {
    onSuccess(response.data);
  } else {
    onError({ problem: response.problem, errorData: response.data });
  }
  onPostFetch(response);
};
// Returns a request to execute manually at some point, and the variables that will be updated when it does
export const useLazyRequest = <P, D, E, T = D>({
  request,
  withPostSuccess,
  withPostFailure,
  initialState = null,
  withPostFetch,
  transformResponse = response => (response as unknown) as T
}: AsyncRequestHookParams<P, D, E, T>): [Nullable<T>, boolean, Nullable<Error<E>>, (params: P) => void] => {
  const [state, setState] = useState<Nullable<T>>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Nullable<Error<E>>>(null);
  const isMounted = useMountedRef();
  const sendRequest = useCallback(
    (values: P) => {
      executeAsyncRequest({
        values,
        request,
        onPrefetch: () => {
          setLoading(true);
          setState(initialState);
          setError(null);
        },
        onSuccess: data => {
          if (isMounted.current) {
            const successData = data as D;
            const transformedResponse = successData ? transformResponse(successData) : undefined;
            setState(transformedResponse || null);
            withPostSuccess?.(transformedResponse);
          }
        },
        onError: errorInfo => {
          if (isMounted.current) {
            setError(() => errorInfo);
            withPostFailure?.(errorInfo);
          }
        },
        onPostFetch: response => {
          if (isMounted.current) {
            setLoading(false);
            if (response.data) {
              withPostFetch?.(transformResponse(response.data));
            }
          }
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [initialState, request, withPostFailure, withPostSuccess]
  );
  return [state, loading, error, sendRequest];
};
// Executes a request each time a dependency changes and returns the values and the refetch function
// in case you want to execute it again
export const useRequest = <P, D, E, T = D>(
  {
    request,
    payload,
    withPostSuccess,
    withPostFailure,
    initialState = null,
    withPostFetch,
    transformResponse = response => (response as unknown) as T
  }: AsyncRequestHookParamsWithPayload<P, D, E, T>,
  dependencies: any[]
): [Nullable<T>, boolean, Nullable<Error<E>>, (params: P) => void] => {
  const [state, loading, error, sendRequest] = useLazyRequest({
    request,
    withPostSuccess,
    withPostFailure,
    initialState,
    withPostFetch,
    transformResponse
  });
  useEffect(
    () => {
      sendRequest(payload);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies
  );
  return [state, loading, error, sendRequest];
};
