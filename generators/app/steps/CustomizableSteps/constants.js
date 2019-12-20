const COMPONENTS_PATH = 'src/app/components';
const SCREENS_PATH = 'src/app/screens';
const CONFIG_PATH = 'src/config';
const REDUX_PATH = 'src/redux';
const UTILS_PATH = 'src/utils';
const SERVICES_PATH = 'src/services';
const CONSTANTS_PATH = 'src/constants';
const DOCS_README_PATH = 'docs';
const DEPENDENCY_SPECIFIC_PATH = 'src/dependency_specific';

module.exports.RESCRIPTS_PATH = {
  src: 'rescriptsrc.js',
  destination: '.rescriptsrc.js'
};

module.exports.NPMRC_PATH = {
  src: 'npmrc',
  destination: '.npmrc'
};

module.exports.REDUX_COMPONENTS = [`${COMPONENTS_PATH}/Field/index.js`];

module.exports.FILES = [
  CONFIG_PATH,
  CONSTANTS_PATH,
  DOCS_README_PATH,
  REDUX_PATH,
  SCREENS_PATH,
  UTILS_PATH,
  'aws.js',
  'tsconfig.json',
  'tsconfig.paths.json',
  'scripts/deploy.js',
  'src/react-app-env.d.ts',
  `${COMPONENTS_PATH}/Routes/components/AuthenticatedRoute.tsx`,
  `${COMPONENTS_PATH}/Routes/styles.scss`,
  `${COMPONENTS_PATH}/Spinner`,
  `${COMPONENTS_PATH}/Suspense`,
  `${COMPONENTS_PATH}/SearchBar`,
  `${COMPONENTS_PATH}/InputLabel`,
  `${COMPONENTS_PATH}/TextArea`,
  `${COMPONENTS_PATH}/Checkbox`,
  `${COMPONENTS_PATH}/RadioGroup`,
  `${SERVICES_PATH}/AuthServices.js`,
  `${SERVICES_PATH}/AnalyticsService.js`
];

module.exports.TEMPLATE_FILES = [
  // TODO: Insert here all template ejs files
  '.eslintrc.js',
  '.babelrc.js',
  'src/index.tsx',
  'src/app/index.tsx',
  `${COMPONENTS_PATH}/Routes/index.tsx`,
  `${SERVICES_PATH}/LocalStorageService.js`
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

module.exports.WITHOUT_SEAMLESS_FILES = {
  src: `${DEPENDENCY_SPECIFIC_PATH}/seamless-immutable`,
  destination: 'src'
};

module.exports.OPTIONAL_DEPENDENCIES = {
  moment: { dependencies: ['moment@^2.23.0'] },
  'seamless-immutable': { dependencies: ['seamless-immutable@^7.1.4'] },
  reselect: { dependencies: ['reselect@^4.0.0'] },
  'babel-module-resolver': {
    dependencies: ['babel-plugin-module-resolver@^3.1.1'],
    devDependencies: ['eslint-import-resolver-babel-module@^5.0.0']
  }
};

module.exports.DEPENDENCIES = [
  'apisauce@^1.0.1',
  'redux@^4.0.1',
  'react-redux@^6.0.0',
  'connected-react-router@^6.0.0',
  'react-router-dom@^4.3.1',
  'redux-recompose@^2.1.0',
  'redux-form@^8.0.4',
  'redux-thunk@^2.3.0',
  'react-router@^4.3.1',
  'redux-beacon@^2.0.3',
  '@redux-beacon/google-analytics@^1.1.1',
  'seamless-immutable@^7.1.4',
  'history@^4.7.2',
  'i18next@^13.0.0',
  'react-spinkit@^3.0.0',
  'typescript@^3.7.2',
  '@types/jest@^24.0.23',
  '@types/node@^12.12.14',
  '@types/react@^16.9.13',
  '@types/react-dom@^16.9.4',
  '@types/react-redux@^7.1.5',
  '@types/react-router@^5.1.2',
  '@types/react-router-dom@^5.1.3',
  '@types/seamless-immutable@^7.1.11',
  '@types/webpack-env@^1.14.1'
];
