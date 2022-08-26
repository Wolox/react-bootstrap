const chalk = require('chalk');

module.exports.KICKOFF_MESSAGE = `${
  chalk.cyan('\n        ║║║            ║║║       ') +
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
  chalk.cyan('\n        ║║║            ║║║      ')
}\n\n  ${chalk.blue.bold('Welcome to the React kickoff')}\n\n  `;

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
  src: '.eslintrc',
  destination: '.eslintrc'
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
  SCRIPTS_PATH,
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
  '@rescripts/cli@^0.0.16',
  '@testing-library/react-hooks@^8.0.1',
  '@types/react-spinkit',
  '@typescript-eslint/parser@^5.12.1',
  '@wolox/eslint-config-react@^2.0.0',
  '@wolox/eslint-config-typescript@^2.1.0',
  '@wolox/eslint-config@1.0.0',
  'aws-deploy-script-fe@1.0.8',
  'chrome-launcher@^0.14.0',
  'env-cmd@^10.0.1',
  'eslint-import-resolver-typescript@^2.5.0',
  'eslint-plugin-babel@5.3.1',
  'eslint-plugin-import@2.26.0',
  'eslint-plugin-jsx-a11y@6.6.1',
  'eslint-plugin-prettier@3.3.1',
  'eslint-plugin-react@^7.22.0',
  'eslint-plugin-testing-library@^5.0.5',
  'eslint@8.9.0',
  'husky@^4.0.3',
  'lighthouse@^9.6.5',
  'minimist@1.2.6',
  'mutationobserver-shim@^0.3.7',
  'postcss-html@^1.4.1',
  'postcss-syntax@^0.36.2',
  'prettier-eslint-cli@5.0.0',
  'prettier-eslint@12.0.0',
  'prettier-stylelint@0.4.2',
  'prettier@2.2.1',
  'react-test-renderer@^18.2.0',
  'serve@12.0.0',
  'stylelint-config-wolox@^1.1.0',
  'stylelint-scss@^3.18.0',
  'stylelint@^13.7.0'
];

module.exports.DEPENDENCIES = ['wolox-equalizer@^0.0.3', 'node-sass@^4.11.0'];
