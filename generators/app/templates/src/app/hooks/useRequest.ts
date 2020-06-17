import { useState, useEffect, useCallback } from 'react';
import { ApiErrorResponse, ApiOkResponse, PROBLEM_CODE, ApiResponse } from 'apisauce';

import { Nullable } from '~utils/types';

export type Error<E> = { problem: PROBLEM_CODE; errorData?: E };
type Request<P, D, E> = (params: P) => Promise<ApiResponse<D, E>>;
type Success<D> = (data?: D) => void;
type Failure<E> = (error: Error<E>) => void;
type PostFetch<D, E> = (response: ApiOkResponse<D> | ApiErrorResponse<E>) => void;

interface AsyncRequestHookParams<P, D, E> {
  request: Request<P, D, E>;
  withPostSuccess?: Success<D>;
  withPostFailure?: Failure<E>;
  initialState?: D | null;
  withPostFetch?: PostFetch<D, E>;
  transformResponse?: (response: D | E) => any;
}

interface AsyncRequestHookParamsWithPayload<P, D, E> extends AsyncRequestHookParams<P, D, E> {
  payload: P;
}

interface AsyncRequest<P, D, E> {
  values: P;
  request: Request<P, D, E>;
  onPrefetch: () => void;
  onSuccess: Success<D>;
  onError: Failure<E>;
  onPostFetch: PostFetch<D, E>;
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
export const useLazyRequest = <P, D, E>({
  request,
  withPostSuccess,
  withPostFailure,
  initialState = null,
  withPostFetch,
  transformResponse = response => response
}: AsyncRequestHookParams<P, D, E>): [Nullable<D>, boolean, Nullable<Error<E>>, (params: P) => void] => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Nullable<Error<E>>>(null);

  const sendRequest = useCallback(
    values => {
      executeAsyncRequest({
        values,
        request,
        onPrefetch: () => {
          setLoading(true);
          setState(initialState);
          setError(null);
        },
        onSuccess: data => {
          const transformedResponse = data ? transformResponse(data) : undefined;
          setState(transformedResponse);
          withPostSuccess?.(transformedResponse);
        },
        onError: errorInfo => {
          setError(() => errorInfo);
          withPostFailure?.(errorInfo);
        },
        onPostFetch: response => {
          setLoading(false);
          if (response.data) {
            withPostFetch?.(transformResponse(response.data));
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
export const useRequest = <P, D, E>(
  {
    request,
    payload,
    withPostSuccess,
    withPostFailure,
    initialState = null,
    withPostFetch,
    transformResponse = response => response
  }: AsyncRequestHookParamsWithPayload<P, D, E>,
  dependencies: any[]
): [Nullable<D>, boolean, Nullable<Error<E>>, (params: P) => void] => {
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
