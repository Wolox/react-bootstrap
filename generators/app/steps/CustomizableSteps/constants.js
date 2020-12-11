const COMPONENTS_PATH = 'src/components';
const SCREENS_PATH = 'src/screens';
const CONFIG_PATH = 'src/config';
const UTILS_PATH = 'src/utils';
const SERVICES_PATH = 'src/services';
const CONSTANTS_PATH = 'src/constants';
const STYLES_PATH = 'src/scss';
const DOCS_README_PATH = 'docs';
const HOOKS_PATH = 'src/hooks';
const CONTEXT_PATH = 'src/contexts';

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
  COMPONENTS_PATH,
  SCREENS_PATH,
  UTILS_PATH,
  HOOKS_PATH,
  CONTEXT_PATH,
  STYLES_PATH,
  'aws.js',
  'tsconfig.json',
  'scripts/deploy.js',
  'src/react-app-env.d.ts',
  `${SERVICES_PATH}/AuthServices.ts`
];

module.exports.TEMPLATE_FILES = [
  // TODO: Insert here all template ejs files
  'src/index.tsx',
  `${SERVICES_PATH}/LocalStorageService.ts`
];

module.exports.FILES_TO_DELETE = [
  'tsconfig.json',
  'src/index.tsx',
  'src/App.css',
  'src/App.tsx',
  'src/App.test.tsx',
  'src/index.css',
  'src/logo.svg'
];

module.exports.DEPENDENCIES = [
  'apisauce@^1.0.1',
  'react-router@^5.1.2',
  'react-router-dom@^5.1.2',
  'history@^4.7.2',
  'i18next@^13.0.0',
  'react-spinkit@^3.0.0',
  'typescript@4.0.5',
  'react-hook-form@^6.12.2'
];

module.exports.DEV_DEPENDENCIES = [
  '@types/react-router@^5.1.2',
  '@types/react-router@^5.1.4',
  '@types/react-router-dom@^5.1.3',
  '@types/webpack-env@^1.14.1',
  '@wolox/eslint-config-typescript@1.1.3'
];
