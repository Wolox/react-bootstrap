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

module.exports.LINTER_PATH = {
  src: 'eslintrc.js',
  destination: '.eslintrc.js'
};

const COMPONENTS_PATH = 'src/app/components';
const SCREENS_PATH = 'src/app/screens';
const CONFIG_PATH = 'src/config';
const REDUX_PATH = 'src/redux';
const UTILS_PATH = 'src/utils';
const SERVICES_PATH = 'src/services';
const CONSTANTS_PATH = 'src/constants';

module.exports.TEMPLATE_FILES = [
  'config-overrides.js',
  'eslintrc.js',
  'pull_request_template.md',
  'circle.yml',
  'src/index.js',
  'src/app/index.js',
  `${CONFIG_PATH}/api.js`,
  `${CONFIG_PATH}/i18n.js`,
  `${CONFIG_PATH}/numeral.js`,
  REDUX_PATH,
  `${REDUX_PATH}/store.js`,
  `${REDUX_PATH}/Auth/actions.js`,
  `${REDUX_PATH}/Auth/reducer.js`,
  SERVICES_PATH,
  `${SERVICES_PATH}/AuthServices.js`,
  `${SERVICES_PATH}/LocalStorageService.js`,
  `${SERVICES_PATH}/AnalyticsService.js`,
  UTILS_PATH,
  `${UTILS_PATH}/colors.js`,
  `${UTILS_PATH}/array.js`,
  `${SCREENS_PATH}/Dashboard/screens/Home/index.js`,
  `${SCREENS_PATH}/Dashboard/index.js`,
  `${COMPONENTS_PATH}/Routes/components/AuthenticatedRoute.js`,
  `${COMPONENTS_PATH}/Routes/constants.js`,
  `${COMPONENTS_PATH}/Routes/index.js`,
  `${COMPONENTS_PATH}/Routes/styles.js`,
  `${COMPONENTS_PATH}/Button/index.js`,
  `${COMPONENTS_PATH}/Button/styles.js`,
  `${COMPONENTS_PATH}/Checkbox/index.js`,
  `${COMPONENTS_PATH}/Checkbox/styles.js`,
  `${COMPONENTS_PATH}/Label/index.js`,
  `${COMPONENTS_PATH}/Label/styles.js`,
  `${COMPONENTS_PATH}/RadioButton/index.js`,
  `${COMPONENTS_PATH}/RadioButton/styles.js`,
  `${COMPONENTS_PATH}/TextArea/index.js`,
  `${COMPONENTS_PATH}/TextArea/styles.js`,
  `${COMPONENTS_PATH}/TextInput/index.js`,
  `${COMPONENTS_PATH}/TextInput/styles.js`,
  `${COMPONENTS_PATH}/Touchable/index.js`,
  `${COMPONENTS_PATH}/Touchable/styles.js`,
  `${COMPONENTS_PATH}/Spinner/index.js`,
  `${COMPONENTS_PATH}/Spinner/styles.js`,
  `${CONSTANTS_PATH}/fonts.js`,
  `${CONSTANTS_PATH}/sizes.js`
];

module.exports.LOCAL_STORAGE_FILE = `${SERVICES_PATH}/LocalStorageService.js`;
