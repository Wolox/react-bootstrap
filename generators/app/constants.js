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
  `${DOCS_README_PATH}/Checkbox.md`,
  `${DOCS_README_PATH}/Field.md`,
  `${DOCS_README_PATH}/InputLabel.md`,
  `${DOCS_README_PATH}/SearchBar.md`,
  `${DOCS_README_PATH}/Spinner.md`,
  `${DOCS_README_PATH}/TextArea.md`,
  `${DOCS_README_PATH}/BaseStyles.md`,
  `${DOCS_README_PATH}/RadioGroup.md`,
  `${DOCS_README_PATH}/Login.md`,
  `${CONFIG_PATH}/api.js`,
  `${CONFIG_PATH}/i18n.js`,
  REDUX_PATH,
  `${REDUX_PATH}/store.js`,
  `${REDUX_PATH}/Auth/actions.js`,
  `${REDUX_PATH}/Auth/reducer.js`,
  SERVICES_PATH,
  `${SERVICES_PATH}/AuthServices.js`,
  `${SERVICES_PATH}/AnalyticsService.js`,
  SCSS_PATH,
  `${SCSS_PATH}/application.scss`,
  `${SCSS_PATH}/components.scss`,
  `${SCSS_PATH}/layout.scss`,
  `${SCSS_PATH}/margins.scss`,
  UTILS_PATH,
  `${UTILS_PATH}/colors.js`,
  `${UTILS_PATH}/array.js`,
  `${SCREENS_PATH}/Dashboard/screens/Home/assets`,
  `${SCREENS_PATH}/Dashboard/screens/Home/assets/logo.svg`,
  `${SCREENS_PATH}/Dashboard/screens/Home/index.js`,
  `${SCREENS_PATH}/Dashboard/screens/Home/styles.module.scss`,
  `${SCREENS_PATH}/Dashboard/index.js`,
  `${SCREENS_PATH}/Login/index.js`,
  `${SCREENS_PATH}/Login/layout.js`,
  `${SCREENS_PATH}/Login/constants.js`,
  `${SCREENS_PATH}/Login/i18n.js`,
  `${SCREENS_PATH}/Login/styles.module.scss`,
  `${COMPONENTS_PATH}/Routes/components/AuthenticatedRoute.js`,
  `${COMPONENTS_PATH}/Routes/styles.scss`,
  `${COMPONENTS_PATH}/Spinner/index.js`,
  `${COMPONENTS_PATH}/Spinner/components/loading.js`,
  `${COMPONENTS_PATH}/Spinner/components/constants.js`,
  `${COMPONENTS_PATH}/SearchBar/index.js`,
  `${COMPONENTS_PATH}/InputLabel/index.js`,
  `${COMPONENTS_PATH}/TextArea/index.js`,
  `${COMPONENTS_PATH}/TextArea/styles.scss`,
  `${COMPONENTS_PATH}/Checkbox/index.js`,
  `${COMPONENTS_PATH}/Checkbox/layout.js`,
  `${COMPONENTS_PATH}/RadioGroup/index.js`,
  `${COMPONENTS_PATH}/RadioGroup/components/RadioOption/index.js`,
  `${CONSTANTS_PATH}/fonts.js`,
  `${CONSTANTS_PATH}/sizes.js`,
  `${CONSTANTS_PATH}/routes.js`,
  `${STORYBOOK_CONFIG_PATH}/config.js`,
  `${STORYBOOK_CONFIG_PATH}/webpack.config.js`,
  `${STORIES_PATH}/components.js`,
  `${STORIES_PATH}/styles.scss`,
  `${CI_PATH}/Dockerfile`
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
  reselect: { dependencies: ['reselect'] }
};
