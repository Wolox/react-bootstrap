import LocalStorageService from './LocalStorageService';

const KEY = 'sessionToken';
const VALUE = 'tokenValue';

describe('when localStorage is working properly', () => {
  afterEach(() => {
    localStorage.clear();
  });

  test('#setValue sets the local storage value and #getValue obtains it', () => {
    expect(LocalStorageService.getValue(KEY)).toBe(null);
    LocalStorageService.setValue(KEY, VALUE);
    expect(LocalStorageService.getValue(KEY)).toBe(VALUE);
  });

  test('#removeValue removes the value from local storage', () => {
    LocalStorageService.setValue(KEY, VALUE);
    expect(LocalStorageService.getValue(KEY)).toBe(VALUE);
    LocalStorageService.removeValue(KEY);
    expect(LocalStorageService.getValue(KEY)).toBe(null);
  });
});

describe('when localStorage returns an exception', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: () => {
          throw new Error();
        },
        setItem: () => {
          throw new Error();
        }
      }
    });
  });

  test('#setValue still sets a value', () => {
    expect(LocalStorageService.getValue(KEY)).toBe(undefined);
    LocalStorageService.setValue(KEY, VALUE);
    expect(LocalStorageService.getValue(KEY)).toBe(VALUE);
  });

  test('#getValue still returns a value', () => {
    LocalStorageService.setValue(KEY, VALUE);
    expect(LocalStorageService.getValue(KEY)).toBe(VALUE);
    LocalStorageService.removeValue(KEY);
    expect(LocalStorageService.getValue(KEY)).toBe(undefined);
  });

  test('#removeValue removes the value from local storage', () => {
    LocalStorageService.setValue(KEY, VALUE);
    expect(LocalStorageService.getValue(KEY)).toBe(VALUE);
    LocalStorageService.removeValue(KEY);
    expect(LocalStorageService.getValue(KEY)).toBe(undefined);
  });
});
