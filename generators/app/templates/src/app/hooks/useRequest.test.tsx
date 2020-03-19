/* eslint-disable max-nested-callbacks, @typescript-eslint/no-empty-function */
import React, { useEffect } from 'react';
import { mount } from 'enzyme';
import { PROBLEM_CODE } from 'apisauce';

import { useRequest, useLazyRequest, Error } from '~hooks/useRequest';
import { TestHook, testHook } from '~utils/tests';
import { Nullable } from '~utils/types';

interface FooError {
  errorData: string;
}

type HookReturnValue = [
  {
    foo: string;
  } | null,
  boolean,
  Nullable<Error<FooError>>,
  (params?: any) => void
];

const failureResponse = {
  ok: false as const,
  problem: 'CLIENT_ERROR' as PROBLEM_CODE,
  originalError: { config: {}, isAxiosError: false, toJSON: jest.fn(), name: '', message: '' },
  data: { errorData: 'error' },
  status: 400,
  headers: {},
  config: {},
  duration: 100
};

const successResponse = {
  ok: true as const,
  problem: null,
  originalError: null,
  data: { foo: 'value' },
  status: 200,
  headers: {},
  config: {},
  duration: 100
};

const MockService = {
  fetchFoo: () => Promise.resolve(successResponse)
};

const LoadingMockService = {
  fetchFoo: () => new Promise<typeof successResponse>(() => {})
};

const FailureMockService = {
  fetchFoo: () => Promise.resolve(failureResponse)
};

let hookValues: Nullable<HookReturnValue> = null;

describe('#useRequest', () => {
  beforeEach(() => {
    hookValues = null;
  });

  describe('when request has failed', () => {
    const component = (
      <TestHook
        hook={() => {
          hookValues = useRequest({ request: FailureMockService.fetchFoo, payload: 1 }, []);
        }}
      />
    );

    beforeEach(() => {
      mount(component);
    });

    it('has correct error', () => {
      const values = hookValues as HookReturnValue;
      const [state, loading, error] = values;
      expect(state).toBe(null);
      expect(loading).toBe(false);
      expect(error?.errorData).toBe(failureResponse.data);
    });
  });

  describe('when request returns an ok response', () => {
    const component = (
      <TestHook
        hook={() => {
          hookValues = useRequest({ request: MockService.fetchFoo, payload: 1 }, []);
        }}
      />
    );

    beforeEach(() => {
      mount(component);
    });

    it('has correct state', () => {
      const values = hookValues as HookReturnValue;
      const [state, loading, error] = values;
      expect(state).toBe(successResponse.data);
      expect(loading).toBe(false);
      expect(error).toBe(null);
    });
  });

  describe('when request has failed', () => {
    const component = (
      <TestHook
        hook={() => {
          hookValues = useRequest({ request: FailureMockService.fetchFoo, payload: 1 }, []);
        }}
      />
    );

    beforeEach(() => {
      mount(component);
    });

    it('has correct error', () => {
      const values = hookValues as HookReturnValue;
      const [state, loading, error] = values;
      expect(state).toBe(null);
      expect(loading).toBe(false);
      expect(error?.errorData).toBe(failureResponse.data);
    });
  });

  describe('when request is loading', () => {
    const component = (
      <TestHook
        hook={() => {
          hookValues = useRequest({ request: LoadingMockService.fetchFoo, payload: 1 }, []);
        }}
      />
    );

    beforeEach(() => {
      mount(component);
    });

    it('is loading', () => {
      const values = hookValues as HookReturnValue;
      const [state, loading, error] = values;
      expect(state).toBe(null);
      expect(loading).toBe(true);
      expect(error).toBe(null);
    });
  });
});

describe('#useLazyRequest', () => {
  describe('when request is not called', () => {
    beforeEach(() => {
      testHook(() => {
        hookValues = useLazyRequest({ request: MockService.fetchFoo });
      });
    });

    it('is neither loading nor has state', () => {
      const values = hookValues as HookReturnValue;
      const [state, loading, error] = values;
      expect(state).toBe(null);
      expect(loading).toBe(false);
      expect(error).toBe(null);
    });
  });

  describe('when request is called and it is loading', () => {
    beforeEach(() => {
      testHook(() => {
        hookValues = useLazyRequest({ request: LoadingMockService.fetchFoo });
        const [, , , request] = hookValues;

        useEffect(() => {
          request();
        }, [request]);
      });
    });

    it('is starts loading', () => {
      const values = hookValues as HookReturnValue;
      const [state, loading, error] = values;
      expect(state).toBe(null);
      expect(loading).toBe(true);
      expect(error).toBe(null);
    });
  });

  describe('when request is called and it succeeds', () => {
    beforeEach(() => {
      testHook(() => {
        hookValues = useLazyRequest({ request: MockService.fetchFoo });
        const [, , , request] = hookValues;

        useEffect(() => {
          request();
        }, [request]);
      });
    });

    it('is has the correct state', () => {
      const values = hookValues as HookReturnValue;
      const [state, loading, error] = values;
      expect(state).toBe(successResponse.data);
      expect(loading).toBe(false);
      expect(error).toBe(null);
    });
  });

  describe('when request is called and it fails', () => {
    beforeEach(() => {
      testHook(() => {
        hookValues = useLazyRequest({ request: FailureMockService.fetchFoo });
        const [, , , request] = hookValues;

        useEffect(() => {
          request();
        }, [request]);
      });
    });

    it('it sets the error', () => {
      const values = hookValues as HookReturnValue;
      const [state, loading, error] = values;
      expect(state).toBe(null);
      expect(loading).toBe(false);
      expect(error?.errorData).toBe(failureResponse.data);
    });
  });
});
