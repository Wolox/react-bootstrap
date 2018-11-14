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
const STORYBOOK_CONFIG_PATH = '.storybook/';
const STORIES_PATH = 'stories/';
const CI_PATH = '.woloxci/';
const DOCS_README_PATH = 'docs';

module.exports.FLOWCONFIG_PATH = {
  src: 'flowconfig',
  destination: '.flowconfig'
};

module.exports.REDUX_COMPONENTS = [`${COMPONENTS_PATH}/Field/index.js`];

module.exports.FILES = [
  'config-overrides.js',
  'pull_request_template.md',
  'README.md',
  'src/index.js',
  'Jenkinsfile',
  'jsconfig.json',
  CI_PATH,
  CONFIG_PATH,
  CONSTANTS_PATH,
  DOCS_README_PATH,
  REDUX_PATH,
  SCREENS_PATH,
  SCSS_PATH,
  SERVICES_PATH,
  STORYBOOK_CONFIG_PATH,
  STORIES_PATH,
  UTILS_PATH,
  `${COMPONENTS_PATH}/Routes/components/AuthenticatedRoute.js`,
  `${COMPONENTS_PATH}/Routes/styles.scss`,
  `${COMPONENTS_PATH}/Spinner`,
  `${COMPONENTS_PATH}/Suspense`,
  `${COMPONENTS_PATH}/SearchBar`,
  `${COMPONENTS_PATH}/InputLabel`,
  `${COMPONENTS_PATH}/TextArea`,
  `${COMPONENTS_PATH}/Checkbox`,
  `${COMPONENTS_PATH}/RadioGroup`
];

module.exports.TEMPLATE_FILES = [
  // TODO: Insert here all template ejs files
  '.eslintrc.js',
  'src/app/index.js',
  `${COMPONENTS_PATH}/Routes/index.js`,
  `${SERVICES_PATH}/LocalStorageService.js`
];

module.exports.FILES_TO_DELETE = [
  'src/App.css',
  'src/App.js',
  'src/App.test.js',
  'src/index.css',
  'src/logo.svg'
];

module.exports.CI_CONFIG_FILE = `${CI_PATH}/config.yml`;

module.exports.OPTIONAL_DEPENDENCIES = {
  jest: { dependencies: ['jest'] },
  moment: { dependencies: ['moment'] },
  'seamless-immutable': { dependencies: ['seamless-immutable'] },
  flow: {
    dependencies: ['@babel/cli'],
    devDependencies: ['flow-bin', '@babel/preset-flow']
  },
  reselect: { dependencies: ['reselect'] },
  'babel-module-resolver': {
    dependencies: ['babel-plugin-module-resolver'],
    devDependencies: ['eslint-import-resolver-babel-module']
  }
};
