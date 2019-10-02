const chalk = require('chalk');

module.exports.KICKOFF_MESSAGE = `${chalk.cyan('\n        ║║║            ║║║       ') +
  chalk.cyan('\n       ║    ║║║    ║║║    ║      ') +
  chalk.cyan('\n       ║       ║║║║       ║       ') +
  chalk.cyan('\n        ║    ║║ ║║ ║║    ║           ') +
  chalk.cyan('\n        ║║║ ║║║║  ║║║║ ║║║        ') +
  chalk.cyan('\n     ║║║ ║ ║          ║ ║ ║║║          ') +
  chalk.blue('██╗  ██╗██╗ ██████╗██╗  ██╗ ') +
  chalk.white('██████╗ ███████╗███████╗') +
  chalk.cyan('\n   ║║    ║║║   ║║║║   ║║║    ║║        ') +
  chalk.blue('██║ ██╔╝██║██╔════╝██║ ██╔╝') +
  chalk.white('██╔═══██╗██╔════╝██╔════╝') +
  chalk.cyan('\n  ║       ║   ║║║║║║   ║       ║       ') +
  chalk.blue('█████╔╝ ██║██║     █████╔╝ ') +
  chalk.white('██║   ██║█████╗  █████╗') +
  chalk.cyan('\n   ║║    ║║║   ║║║║   ║║║    ║║        ') +
  chalk.blue('██╔═██╗ ██║██║     ██╔═██╗ ') +
  chalk.white('██║   ██║██╔══╝  ██╔══╝') +
  chalk.cyan('\n     ║║║ ║ ║          ║ ║ ║║║          ') +
  chalk.blue('██║  ██╗██║╚██████╗██║  ██╗') +
  chalk.white('╚██████╔╝██║     ██║') +
  chalk.cyan('\n        ║║║ ║║║║  ║║║║ ║║║             ') +
  chalk.blue('╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝ ') +
  chalk.white('╚═════╝ ╚═╝     ╚═╝') +
  chalk.cyan('\n        ║    ║║ ║║ ║║    ║         ') +
  chalk.cyan('\n       ║       ║║║║       ║          ') +
  chalk.cyan('\n       ║    ║║║    ║║║    ║        ') +
  chalk.cyan('\n        ║║║            ║║║      ')}\n\n  ${chalk.blue.bold(
  'Welcome to the React kickoff'
)}\n\n  `;

module.exports.LINTER_IGNORE_PATH = {
  src: 'eslintignore',
  destination: '.eslintignore'
};

module.exports.FLOWCONFIG_PATH = {
  src: 'flowconfig',
  destination: '.flowconfig'
};

module.exports.BABELRC_PATH = {
  src: 'babelrc',
  destination: '.babelrc'
};

const COMPONENTS_PATH = 'src/app/components';
const SCREENS_PATH = 'src/app/screens';
const CONFIG_PATH = 'src/config';
const REDUX_PATH = 'src/redux';
const UTILS_PATH = 'src/utils';
const SERVICES_PATH = 'src/services';
const CONSTANTS_PATH = 'src/constants';
const SCSS_PATH = 'src/scss';
const CI_PATH = '.woloxci/';
const DOCS_README_PATH = 'docs';
const DEPENDENCY_SPECIFIC_PATH = 'src/dependency_specific';
const SCRIPTS_PATH = 'scripts';

module.exports.FLOWCONFIG_PATH = {
  src: 'flowconfig',
  destination: '.flowconfig'
};

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
  'pull_request_template.md',
  'README.md',
  'src/index.tsx',
  'src/react-app-env.d.ts',
  'Jenkinsfile',
  'tsconfig.json',
  '.stylelintrc.js',
  SCRIPTS_PATH,
  CI_PATH,
  CONFIG_PATH,
  CONSTANTS_PATH,
  DOCS_README_PATH,
  REDUX_PATH,
  SCREENS_PATH,
  SCSS_PATH,
  UTILS_PATH,
  `${COMPONENTS_PATH}/Routes/components/AuthenticatedRoute.tsx`,
  `${COMPONENTS_PATH}/Routes/styles.module.scss`,
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
  'src/app/index.tsx',
  `${COMPONENTS_PATH}/Routes/index.tsx`,
  `${SERVICES_PATH}/LocalStorageService.js`
];

module.exports.FILES_TO_DELETE = [
  'src/App.css',
  'src/App.js',
  'src/App.test.js',
  'src/index.css',
  'src/index.js',
  'src/logo.svg'
];

module.exports.CI_CONFIG_FILE = `${CI_PATH}/config.yml`;

module.exports.OPTIONAL_DEPENDENCIES = {
  moment: { dependencies: ['moment@^2.23.0'] },
  'seamless-immutable': { dependencies: ['seamless-immutable@^7.1.4'] },
  flow: {
    dependencies: ['@babel/cli@^7.2.0'],
    devDependencies: ['flow-bin@^0.89.0', '@babel/preset-flow@^7.0.0']
  },
  reselect: { dependencies: ['reselect@^4.0.0'] },
  'babel-module-resolver': {
    dependencies: ['babel-plugin-module-resolver@^3.1.1'],
    devDependencies: ['eslint-import-resolver-babel-module@^5.0.0']
  }
};

module.exports.WITHOUT_SEAMLESS_FILES = {
  src: `${DEPENDENCY_SPECIFIC_PATH}/seamless-immutable`,
  destination: 'src'
};
