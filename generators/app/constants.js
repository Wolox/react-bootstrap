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

const LINTER_IGNORE_PATH = {
  src: 'eslintignore',
  destination: '.eslintignore'
};

const SCSS_PATH = 'src/scss';
// TODO: check how to avoid using "wolox" keyword here
const CI_PATH = '.woloxci/';
const SCRIPTS_PATH = 'scripts';

const RESCRIPTS_PATH = {
  src: 'rescriptsrc.js',
  destination: '.rescriptsrc.js'
};

const NPMRC_PATH = {
  src: 'npmrc',
  destination: '.npmrc'
};

const TESTS_SETUP_PATH = {
  src: 'setupTests.ts',
  destination: 'src/setupTests.ts'
};

const ESLINTRC_PATH = {
  src: 'eslintrc.js',
  destination: '.eslintrc.js'
};

const GITIGNORE_PATH = {
  src: 'gitignore',
  destination: '.gitignore'
};

module.exports.BABELRC_PATH = {
  src: 'babelrc',
  destination: '.babelrc'
};

module.exports.FILES = [
  'pull_request_template.md',
  'README.md',
  'Jenkinsfile',
  '.stylelintrc.js',
  '.env.development',
  `${SCRIPTS_PATH}/build.js`,
  `${SCRIPTS_PATH}/start.js`,
  `${SCRIPTS_PATH}/utils.js`,
  CI_PATH,
  SCSS_PATH
];

module.exports.TEMPLATE_FILES = [];

module.exports.FILES_TO_DESTINATION = [
  LINTER_IGNORE_PATH,
  RESCRIPTS_PATH,
  NPMRC_PATH,
  TESTS_SETUP_PATH,
  GITIGNORE_PATH,
  ESLINTRC_PATH
];

module.exports.CI_CONFIG_FILE = `${CI_PATH}/config.yml`;

module.exports.BOOTSTRAP_TYPES = [
  { name: 'Clean', value: false },
  { name: 'Customized', value: true }
];

module.exports.DEV_DEPENDENCIES = [
  'eslint-plugin-import@2.22.1',
  'eslint-plugin-jsx-a11y@6.2.3',
  'eslint-plugin-prettier@3.1.0',
  'eslint-plugin-react@7.14.3',
  'eslint-plugin-babel@5.3.0',
  'eslint-config-wolox-react@2.1.2',
  'eslint-config-wolox@3.0.2',
  'eslint-import-resolver-typescript@^2.3.0',
  '@typescript-eslint/parser@^4.7.0',
  'stylelint-config-wolox@1.0.7',
  'stylelint-no-indistinguishable-colors@1.2.1',
  'stylelint-scss@3.5.4',
  'stylelint@9.10.1',
  'husky@^4.0.3',
  'prettier@1.19.1',
  'prettier-eslint@8.8.2',
  'prettier-stylelint@0.4.2',
  'prettier-eslint-cli@5.0.0',
  '@rescripts/cli@^0.0.14',
  'env-cmd@^10.0.1',
  'aws-deploy-script-fe@1.0.8',
  'minimist@1.2.0',
  'postcss-syntax@^0.36.2',
  'postcss-html@^0.36.0',
  'mutationobserver-shim@^0.3.7',
  '@testing-library/react-hooks@^3.7.0',
  '@types/react-spinkit'
];

module.exports.DEPENDENCIES = ['wolox-equalizer@^0.0.3', 'node-sass@^4.11.0'];
