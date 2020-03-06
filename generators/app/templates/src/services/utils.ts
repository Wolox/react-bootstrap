import { useState, useEffect, useCallback, useRef } from 'react';
import { ApiErrorResponse, ApiOkResponse, PROBLEM_CODE, ApiResponse } from 'apisauce';

type Error<E> = (error?: { problem: PROBLEM_CODE; errorData?: E }) => void;
type Request<P, D, E> = (params: P) => Promise<ApiResponse<D, E>>;
type Success<D> = (data?: D) => void;
type Failure<E> = (error: { problem: PROBLEM_CODE; errorData?: E }) => void;
type PostFetch<D, E> = (response: ApiOkResponse<D> | ApiErrorResponse<E>) => void;

interface AsyncRequestHookParams<P, D, E> {
  request: Request<P, D, E>;
  payload: P;
  withPostSuccess?: Success<D>;
  withPostFailure?: Failure<E>;
  initialState?: D | null;
  withPostFetch?: PostFetch<D, E>;
  shouldExecuteFetch?: boolean;
  transformResponse?: (response: D | E) => any;
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

export const useAsyncRequest = <P, D, E>(
  {
    request,
    payload,
    withPostSuccess,
    withPostFailure,
    initialState = null,
    withPostFetch,
    shouldExecuteFetch = true,
    transformResponse = response => response
  }: AsyncRequestHookParams<P, D, E>,
  dependencies: []
) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(shouldExecuteFetch || false);
  const [error, setError] = useState<Error<E> | null>(null);
  const activeRequest = useRef(0);
  const sendRequest = useCallback(
    values => {
      activeRequest.current = activeRequest.current + 1;
      const requestId = activeRequest.current;
      executeAsyncRequest({
        values,
        request,
        onPrefetch: () => {
          setLoading(true);
          setState(initialState);
        },
        onSuccess: data => {
          if (activeRequest.current === requestId) {
            const transformedResponse = data ? transformResponse(data) : undefined;
            setState(transformedResponse);
            withPostSuccess?.(transformedResponse);
          }
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
    [initialState, request, withPostFailure, withPostSuccess, ...dependencies]
  );

  useEffect(
    () => {
      if (shouldExecuteFetch) {
        sendRequest(payload);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies
  );

  return [state, loading, error];
};
