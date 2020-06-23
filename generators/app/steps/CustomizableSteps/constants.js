const COMPONENTS_PATH = 'src/app/components';
const SCREENS_PATH = 'src/app/screens';
const CONFIG_PATH = 'src/config';
const UTILS_PATH = 'src/utils';
const SERVICES_PATH = 'src/services';
const CONSTANTS_PATH = 'src/constants';
const DOCS_README_PATH = 'docs';
const HOOKS_PATH = 'src/app/hooks';
const CONTEXT_PATH = 'src/app/contexts';

module.exports.RESCRIPTS_PATH = {
  src: 'rescriptsrc.js',
  destination: '.rescriptsrc.js'
};

module.exports.NPMRC_PATH = {
  src: 'npmrc',
  destination: '.npmrc'
};

module.exports.FILES = [
  CONFIG_PATH,
  CONSTANTS_PATH,
  DOCS_README_PATH,
  SCREENS_PATH,
  UTILS_PATH,
  HOOKS_PATH,
  CONTEXT_PATH,
  'aws.js',
  'tsconfig.json',
  'tsconfig.paths.json',
  'scripts/deploy.js',
  'src/react-app-env.d.ts',
  'src/app/index.tsx',
  `${COMPONENTS_PATH}/Routes`,
  `${COMPONENTS_PATH}/Suspense`,
  `${COMPONENTS_PATH}/FormInput`,
  `${COMPONENTS_PATH}/Spinner`,
  `${COMPONENTS_PATH}/ProviderWrapper`,
  `${COMPONENTS_PATH}/Paginator`,
  `${SERVICES_PATH}/ListExampleService.ts`,
  `${SERVICES_PATH}/AuthServices.ts`
];

module.exports.TEMPLATE_FILES = [
  // TODO: Insert here all template ejs files
  '.eslintrc.js',
  '.babelrc.js',
  'src/index.tsx',
  `${SERVICES_PATH}/LocalStorageService.ts`
];

module.exports.FILES_TO_DELETE = [
  'jsconfig.json',
  'src/index.js',
  'src/App.css',
  'src/App.js',
  'src/App.test.js',
  'src/index.css',
  'src/logo.svg'
];

module.exports.OPTIONAL_COMPONENTS = {
  Checkbox: `${COMPONENTS_PATH}/Checkbox`,
  RadioGroup: `${COMPONENTS_PATH}/RadioGroup`,
  SearchBar: `${COMPONENTS_PATH}/SearchBar`
};

module.exports.DEPENDENCIES = [
  'apisauce@^1.0.1',
  'react-router@^5.1.2',
  'react-router-dom@^5.1.2',
  'seamless-immutable@^7.1.4',
  'history@^4.7.2',
  'i18next@^13.0.0',
  'react-spinkit@^3.0.0',
  'typescript@^3.7.2',
  'babel-plugin-module-resolver@^3.1.1',
  // TODO: make optional?
  'react-paginate@^6.3.2'
];

module.exports.DEV_DEPENDENCIES = [
  '@types/jest@^24.0.23',
  '@types/node@^12.12.14',
  '@types/react@^16.9.13',
  '@types/react-dom@^16.9.4',
  '@types/react-router@^5.1.2',
  '@types/react-router@^5.1.4',
  '@types/react-router-dom@^5.1.3',
  '@types/seamless-immutable@^7.1.11',
  '@types/webpack-env@^1.14.1',
  '@types/react-paginate@^6.2.1',
  'eslint-config-wolox-typescript@1.0.1',
  'eslint-import-resolver-babel-module@^5.0.0'
];
