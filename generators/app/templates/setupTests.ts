import '@testing-library/jest-dom';
import 'mutationobserver-shim';

jest.mock('react-i18next', () => ({
  initReactI18next: {
    type: '3rdParty',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    init: () => {}
  },
  useTranslation: () => ({
    t: (key: string, params: Record<string, string>) => (params ? `${key} ${JSON.stringify(params)}` : key),
    i18n: {
      changeLanguage: jest.fn(),
      language: 'es'
    }
  })
}));

jest.mock('i18next', () => ({
  addResources: jest.fn(),
  use: () => ({ init: jest.fn() })
}));
