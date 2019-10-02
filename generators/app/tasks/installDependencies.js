const { OPTIONAL_DEPENDENCIES } = require('../constants');

const runCommand = require('./runCommand');

const DEPENDENCIES = [
  'apisauce@^1.0.1',
  'history@^4.7.2',
  'i18next@^13.0.0',
  'postcss@^7.0.7',
  'react@^16.6.3',
  'react-dom@^16.6.3',
  'react-spinkit@^3.0.0',
  'wolox-equalizer@^0.0.3',
  'node-sass@^4.11.0',
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
  'typescript@^3.6.3',
  '@types/jest@^24.0.18',
  '@types/node@^12.7.5',
  '@types/react@^16.9.2',
  '@types/react-dom@^16.9.0',
  '@types/react-redux@^7.1.4',
  '@types/react-router@^5.1.0',
  '@types/react-router-dom@^5.1.0',
  '@types/webpack-env@^1.14.0'
];

const DEV_DEPENDENCIES = [
  'eslint-plugin-flowtype@3.9.1',
  'eslint-plugin-import@2.17.3',
  'eslint-plugin-jsx-a11y@6.2.1',
  'eslint-plugin-prettier@3.1.0',
  'eslint-plugin-react@7.13.0',
  'eslint-plugin-react-native@3.5.0',
  'eslint-config-wolox-react@1.1.0',
  'eslint-config-wolox@2.3.0',
  'husky@^2.3.0',
  'prettier@1.17.1',
  'prettier-eslint@8.8.2',
  'react-hot-loader@^4.6.1',
  'prop-types@^15.6.2',
  '@babel/plugin-proposal-optional-chaining@^7.2.0',
  '@rescripts/cli@^0.0.7',
  'eslint-plugin-babel@^5.3.0',
  'env-cmd@^9.0.3',
  'aws-deploy-script-fe@0.0.4',
  'chalk@2.4.2',
  'minimist@1.2.0',
  'stylelint-config-wolox@1.0.5',
  'stylelint-no-indistinguishable-colors@1.2.1',
  'stylelint-scss@3.5.4',
  'stylelint@9.10.1',
  'prettier-stylelint@0.4.2',
  'prettier-eslint-cli@4.7.1',
  'postcss-syntax@^0.36.2',
  'postcss-html@^0.36.0'
];

function npmInstall(projectName, deps, options, dev) {
  const npmArgs = dev ? ['install', '-D'].concat(deps) : ['install'].concat(deps);

  return runCommand({
    command: ['npm', npmArgs, { cwd: `${process.cwd()}/${projectName}` }],
    loadingMessage: `Fetching ${dev ? 'dev dependencies' : 'dependencies'}`,
    successMessage: `${dev ? 'Dev dependencies' : 'Dependencies'} ready!`,
    failureMessage: `${
      dev ? 'Dev dependencies' : 'Dependencies'
    } installation failed. Turn verbose mode on for detailed logging`,
    context: options
  });
}

module.exports = function installDependencies() {
  return npmInstall(this.projectName, DEPENDENCIES, { verbose: true })
    .then(() => npmInstall(this.projectName, DEV_DEPENDENCIES, { verbose: true }, true))
    .then(() => {
      const optionalDependencies = Object.keys(this.features).reduce(
        (dependenciesObject, option) => {
          const dependencies = OPTIONAL_DEPENDENCIES[option].dependencies || [];
          const devDependencies = OPTIONAL_DEPENDENCIES[option].devDependencies || [];

          return {
            dependencies: [...dependenciesObject.dependencies, ...dependencies],
            devDependencies: [...dependenciesObject.devDependencies, ...devDependencies]
          };
        },
        { dependencies: [], devDependencies: [] }
      );

      return npmInstall(this.projectName, optionalDependencies.dependencies, this.options).then(() =>
        npmInstall(this.projectName, optionalDependencies.devDependencies, this.options, true)
      );
    })
    .catch(() => {
      process.exit(1);
    });
};
